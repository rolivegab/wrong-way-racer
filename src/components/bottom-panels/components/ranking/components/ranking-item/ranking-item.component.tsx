import { Box, Typography } from "@mui/material";
import { Player } from "src/types/player.type";
import * as style from "./ranking-item.style";

interface Props {
  player: Player;
  borderBottom: boolean;
}

export const RankingItem = ({ player, borderBottom }: Props) => {
  return (
    <Box css={style.container(borderBottom)}>
      <Typography css={style.label}>{player.name}</Typography>
      <Box css={style.recordContainer}>
        <Typography css={style.recordLabel}>Record</Typography>
        <Typography css={style.recordValue}>{player.record}</Typography>
      </Box>
      <Box css={style.rankContainer}>
        <Typography css={style.rankLabel}>Rank</Typography>
        <Typography css={style.recordValue}>{player.record}</Typography>
      </Box>
    </Box>
  );
};
