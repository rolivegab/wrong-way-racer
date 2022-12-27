import { Box, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { gameStore } from "src/store/game.store";
import { Player } from "src/types/player.type";
import { Cog } from "./components/cog.component";
import { PlayersItem } from "./components/players-item/players-item.component";
import * as style from "./players.style";

export const Players = observer(() => {
  const players = gameStore.players;

  const renderPlayerItem = (player: Player) => (
    <Box key={player.id} margin={1}>
      <PlayersItem player={player} />
    </Box>
  );
  return (
    <Box css={style.container}>
      <Box display="flex" marginBottom={3}>
        <Typography css={style.title}>Players</Typography>
        <Typography css={style.titleNumber}>8/12</Typography>
      </Box>
      <Button fullWidth startIcon={<Cog />} css={style.button}>
        <Box css={style.buttonBorder} />
        <Box css={style.buttonBg} />
        <Typography css={style.buttonLabel}>Setting</Typography>
      </Button>
      <Box margin={-1}>{players.map(renderPlayerItem)}</Box>
    </Box>
  );
});
