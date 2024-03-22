import { Box } from "@mui/material";
import DropdownButton from "../components/Dropdown";
import DisShow from "../components/DistanceShow";

export default function LocationDisplay({ onchangeRange, value, distanceShow, checked }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 60,
        left: 10,
        width: 'auto',
        display: "flex",
        zIndex: 1000,
        background: "white",
        p: 2,
        borderRadius: "16px",
        boxShadow: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
      }}
    >
      <Box
        sx={{ textAlign: "center", fontSize: "1.8rem", fontWeight: "700", mr : 2 }}
      >
        select radius
      </Box>
      <DropdownButton handleChange={onchangeRange} value={value} />
      <DisShow distanceShow={distanceShow} />
    </Box>
  );
}
