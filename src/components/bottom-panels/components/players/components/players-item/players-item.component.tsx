import { Avatar, Box, Typography } from "@mui/material";
import { Player } from "src/types/player.type";
import * as style from "./players-item.style";

interface Props {
  player: Player;
}

export const PlayersItem = ({ player }: Props) => {
  return (
    <Box display={"flex"} alignItems="center" margin={-1}>
      <Box margin={1}>
        <Avatar src={player.avatar} sx={{ width: 24, height: 24 }} />
      </Box>
      <Box margin={1}>
        <Typography css={style.playerName}>{player.name}</Typography>
      </Box>
    </Box>
  );
};
