import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BlueBar } from "./components/BlueBar/BlueBar";
import { NumberPanel } from "./components/NumberPanel/NumberPanel";
import * as style from "./PlayerInfo.style";

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
