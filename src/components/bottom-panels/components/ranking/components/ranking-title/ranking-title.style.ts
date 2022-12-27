import { css } from "@emotion/react";

export const container = css`
  background: radial-gradient(
      101.35% 101.35% at 50% 22.11%,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(24, 20, 53, 0.26) 71.87%
    ),
    #9747ff;
  box-shadow: inset 0px 4px 12px #ffffff;
  display: flex;
  padding: 12px;
`;

export const recordContainer = css`
  flex-grow: 1;
`;

export const elapsedValue = css`
  font-size: 40px;
  font-weight: 900;
  color: white;
  line-height: 1;
`;

export const elapsedLabel = css`
  font-size: 12px;
  font-weight: 500;
  color: white;
  line-height: 1;
`;

export const circle = css`
  background-color: rgba(19, 20, 68, 1);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const circleValue = css`
  font-size: 14px;
  font-weight: 900;
  color: white;
`;

export const circleLabel = css`
  font-size: 9px;
  font-weight: 400;
  color: white;
`;
