import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { SmallInfoContainer } from "./small-info-container.component";

interface Props {
  icon: ReactElement;
  value: number;
}

export const SmallInfo = ({ icon, value }: Props) => {
  return (
    <Box position="relative" display="flex" margin={1}>
      <SmallInfoContainer />
      <Box display="flex" sx={{ bottom: 4, left: 5, position: "absolute" }}>
        {icon}
      </Box>
      <Typography
        sx={{
          color: "white",
          fontSize: 14,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          fontWeight: 900,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
