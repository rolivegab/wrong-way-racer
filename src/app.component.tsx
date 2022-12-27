import { Grid } from "@mui/material";
import "./app.css";
import { BottomPanels } from "./components/bottom-panels/bottom-panels.component";
import { Game } from "./components/game/game";
import { Layout } from "./components/layout/layout.component";

export const App = () => {
  return (
    <Layout>
      <Grid container spacing={4} maxWidth="md">
        <Grid item xs={12}>
          <Game />
        </Grid>
        <Grid sx={{ zIndex: 1 }} item xs={12}>
          <BottomPanels />
        </Grid>
      </Grid>
    </Layout>
  );
};
