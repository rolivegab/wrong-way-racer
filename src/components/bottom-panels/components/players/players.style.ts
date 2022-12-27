import { css } from "@emotion/react";
import { theme } from "src/theme";

export const container = css`
  background: radial-gradient(
      101.35% 101.35% at 50% 22.11%,
      rgba(34, 21, 49, 0.5) 0%,
      rgba(22, 22, 48, 0.5) 71.87%
    ),
    rgba(19, 20, 68, 0.5);
  box-shadow: 3px 4px 63px 0px #ffffff40 inset;
  border-radius: 12px;
  padding: 4px 16px;
  max-height: 250px;
  overflow: auto;
`;

export const title = css`
  font-size: 16px;
  font-weight: 700;
  color: white;
  flex-grow: 1;
`;

export const titleNumber = css`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const buttonLabel = css`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: none;
`;

export const button = css`
  color: white;
  border-radius: 4px;
  background-color: red;
  z-index: 1;
  height: 36px;
  margin-bottom: ${theme.spacing(3)};
`;

export const buttonBg = css`
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  right: 4px;
  z-index: -1;
  background: linear-gradient(
    180deg,
    #995aff -7.69%,
    rgba(108, 58, 252, 0.91) 127.88%
  );
`;

export const buttonBorder = css`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  border-radius: 4px;
  border: 2px solid black;
  background: linear-gradient(
    90deg,
    #995aff -22.86%,
    rgba(186, 155, 255, 0.954063) 52.56%,
    #8e53fa 126.43%
  );
`;
