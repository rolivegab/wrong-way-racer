import { Grid } from "@mui/material";
import { Chat } from "./components/chat/chat.component";
import { Players } from "./components/players/players.component";
import { Ranking } from "./components/ranking/ranking.component";

export const BottomPanels = () => {
  return (
    <Grid container spacing={5} marginBottom={5}>
      <Grid item xs>
        <Ranking />
      </Grid>
      <Grid item xs>
        <Chat />
      </Grid>
      <Grid item xs>
        <Players />
      </Grid>
    </Grid>
  );
};
