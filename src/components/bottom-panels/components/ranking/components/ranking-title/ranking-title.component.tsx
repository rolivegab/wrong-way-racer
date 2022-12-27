import { Box, Typography } from "@mui/material";
import * as style from "./ranking-title.style";

export const RankingTitle = () => {
  return (
    <Box css={style.container}>
      <Box css={style.recordContainer}>
        <Typography css={style.elapsedValue}>3:44</Typography>
        <Typography css={style.elapsedLabel}>Your last record</Typography>
      </Box>
      <Box css={style.circle}>
        <Typography css={style.circleValue}>
          # 144<small>th</small>
        </Typography>
        <Typography css={style.circleLabel}>From 15k</Typography>
      </Box>
    </Box>
  );
};
