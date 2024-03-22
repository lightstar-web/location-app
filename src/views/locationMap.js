import { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { getMarkersWithinDistance, getNearestMarker } from "../utils/Marker";
import { Markerinfo } from "../utils/LocationMock";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = { lat: 37.7749, lng: -122.4194 };

const LocationMap = ({ range }) => {
  const [nearbyMarkers, setNearbyMarkers] = useState([]);
  const [nearestMarkers, setNearestMarkers] = useState();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [directions, setDirections] = useState(null);
  const routeMap = useRef();

  useEffect(() => {
    if (isLoaded) {
      fetchNearbyMarkers(center.lat, center.lng);
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: center,
          destination: nearestMarkers,
          travelMode: window.google.maps.TravelMode["DRIVING"],
        },
        (result, status) => {
          if (status === "OK") {
            if (result) {
              setDirections(result);
            }
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }

  }, [isLoaded, nearbyMarkers.length, range]);
  
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const fetchNearbyMarkers = (lat, lng) => {
    const inDistance = getMarkersWithinDistance(center, Markerinfo, range);
    setNearbyMarkers(inDistance);
    const nearlydistance = getNearestMarker(center, Markerinfo);
    setNearestMarkers(nearlydistance);
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        { directions && <DirectionsRenderer directions={directions} />  }
        <div id="map" ref={routeMap}></div>
        <Marker position={center} />

        {nearbyMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={`Marker ${marker.id}`}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
