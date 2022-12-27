import { Box, Typography } from "@mui/material";
import numberPanelSvg from "src/assets/number-panel.svg";

interface Props {
  value: number;
}

export const NumberPanel = ({ value }: Props) => {
  return (
    <Box position="relative">
      <img src={numberPanelSvg} />
      <Typography
        sx={{
          position: "absolute",
          fontSize: 14,
          fontWeight: 800,
          color: "white",
          top: 8,
          left: 20,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
