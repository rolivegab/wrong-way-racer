import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { gameStore } from "src/store/game.store";
import { RankingItem as RankingItem } from "../ranking-item/ranking-item.component";
import * as style from "./ranking-content.style";

export const RankingContent = observer(() => {
  const players = gameStore.players;
  return (
    <Box css={style.container}>
      {players.map((player, index) => (
        <RankingItem
          borderBottom={index !== players.length - 1}
          key={player.id}
          player={player}
        />
      ))}
      {players.length === 0 && (
        <Typography css={style.noPlayers}>No players</Typography>
      )}
    </Box>
  );
});
