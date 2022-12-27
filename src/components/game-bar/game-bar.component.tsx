import { Box, Container } from "@mui/material";
import { Coin } from "src/components/game-bar/components/coin.component";
import { Thunder } from "src/components/game-bar/components/thunder.component";
import { Heart } from "src/components/game-bar/components/heart.component";
import { SmallInfo } from "./components/small-info.component";
import * as style from "./game-bar.style";
import { PlayerInfo } from "./components/player-info/player-info.component";

export const GameBar = () => {
  return (
    <Container css={style.container}>
      <Box flexGrow={1}>
        <PlayerInfo />
      </Box>
      <Box>
        <Box display="flex" margin={-1}>
          <SmallInfo icon={<Coin />} value={0} />
          <SmallInfo icon={<Thunder />} value={0} />
          <SmallInfo icon={<Heart />} value={0} />
        </Box>
      </Box>
    </Container>
  );
};
