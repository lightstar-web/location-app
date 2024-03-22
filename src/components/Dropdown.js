import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownButton({ handleChange, value }) {
  return (
    <Box sx={{ minWidth: 120  }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Range"
          onChange={handleChange}
        >
          <MenuItem value={4}>4Km</MenuItem>
          <MenuItem value={5}>5Km</MenuItem>
          <MenuItem value={6}>6Km</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
