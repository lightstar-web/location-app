import { useState } from "react";
import LocationDisplay from "./views/locationDisplay";
import LocationMap from "./views/locationMap";
import { Box } from "@mui/material";

import "./App.css";

function App() {
  const [range, setRange] = useState(4);

  const onChangeRange = (e) => {
      setRange(e.target.value)
  };
  return (
    <Box>
      <LocationDisplay onchangeRange={onChangeRange} value={range}  />
      <LocationMap range={range} />
    </Box>
  );
}

export default App;
