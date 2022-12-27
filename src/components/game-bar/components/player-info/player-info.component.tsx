import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { BlueBar } from "./components/blue-bar/blue-bar.component";
import { NumberPanel } from "./components/number-panel/number-panel.component";
import * as style from "./player-info.style";

export const PlayerInfo = () => {
  return (
    <Box display="flex" margin={-2}>
      <Box margin={2}>
        <NumberPanel value={3} />
      </Box>
      <Box margin={2}>
        <Box margin={-1}>
          <Box margin={1}>
            <Typography css={style.playerName}>Salimo Salivano</Typography>
          </Box>
          <Box margin={1}>
            <BlueBar total={1500} value={1176} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
