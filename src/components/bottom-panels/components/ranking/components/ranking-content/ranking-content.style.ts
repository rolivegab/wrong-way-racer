import { css } from "@emotion/react";
import { theme } from "src/theme";

export const container = css`
  background: rgba(16, 12, 74, 0.2);
  box-shadow: inset 0px 4px 63px rgba(255, 255, 255, 0.25);
  overflow: scroll;
`;

export const noPlayers = css`
  color: lightgray;
  font-style: italic;
  font-size: 14px;
  margin: ${theme.spacing(3)};
`;
