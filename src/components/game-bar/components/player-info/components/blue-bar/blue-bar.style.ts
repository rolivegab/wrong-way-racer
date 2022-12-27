import { css } from "@emotion/react";

export const blueBarBack = css`
  position: absolute;
  border-radius: 2px;
  height: 20px;
  background: #0c0a22;
  border: 1px solid #203258;
  box-sizing: border-box;
  width: 100%;
`;

export const blueBarInnerFront = css`
  position: absolute;
  height: 14px;
  top: 3px;
  left: 2px;
  background: linear-gradient(90deg, #0085d2 6.03%, #33f3ff 91.38%), #08ccff;
`;

export const blueBarOutFront = css`
  height: 18px;
  position: absolute;
  top: 1px;
  border-radius: 2px;
  background: linear-gradient(269.39deg, #96f9ff 4.87%, #43b4ed 105.5%);
`;

export const valueText = css`
  font-size: 10px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
