import { css } from "@emotion/react";
import { theme } from "src/theme";

export const container = css`
  background: radial-gradient(
      101.35% 101.35% at 50% 22.11%,
      #4e2082 0%,
      #0c0c4c 71.87%
    ),
    #131444;
  padding-top: ${theme.spacing(3)};
`;
