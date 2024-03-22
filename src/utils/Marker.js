function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

//get markers with in distance
export function getMarkersWithinDistance(center, markers, distance) {
    return markers.filter(marker => {
        const markerDistance = getDistance(center.lat, center.lng, marker.lat, marker.lng);
        return markerDistance <= distance;
    });
}

//get nearest marker
export function getNearestMarker(center, markers){
    let nearestMarker = null;
    let minDistance = Number.MAX_VALUE;

    markers.forEach(marker => {
        const distance = getDistance(center.lat, center.lng, marker.lat, marker.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestMarker = marker;
        }
    });

    if (nearestMarker === null) {
        throw new Error("No markers provided.");
    }

    return nearestMarker;
}

