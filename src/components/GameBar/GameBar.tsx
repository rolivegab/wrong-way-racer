import { Box, Container } from "@mui/material";
import { Coin } from "src/components/GameBar/components/Coin";
import { Thunder } from "src/components/GameBar/components/Thunder";
import { Heart } from "src/components/GameBar/components/Heart";
import { SmallInfo } from "./components/SmallInfo";
import * as style from "./GameBar.style";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";

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
