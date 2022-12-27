import { css } from "@emotion/react";
import { theme } from "src/theme";

export const container = css`
  ${theme.breakpoints.up("sm")} {
    position: absolute;
    top: ${theme.spacing(5)};
  }
  display: flex;
`;
