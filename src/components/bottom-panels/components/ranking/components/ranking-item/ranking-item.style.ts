import { css } from "@emotion/react";

export const label = css`
  font-size: 12px;
  font-weight: 600;
  color: white;
  flex-grow: 1;
  margin-left: 16px;
`;

export const container = (borderBottom: boolean) => css`
  display: flex;
  align-items: center;

  ${borderBottom &&
  css`
    border-bottom: 1px solid rgba(130, 75, 244, 0.08);
  `}
`;

export const recordContainer = css`
  background: rgba(38, 27, 80, 1);
  height: 100%;
  padding: 2px 9px 2px 9px;
  text-align: center;
`;

export const rankContainer = css`
  ${recordContainer}
  background-color: rgba(18, 8, 55, 1);
`;

export const recordLabel = css`
  font-size: 9px;
  color: rgba(255, 251, 251, 0.7);
  font-weight: 400;
`;

export const rankLabel = css`
  ${recordLabel}
  color: rgba(255, 251, 251, 0.4);
`;

export const recordValue = css`
  font-size: 20px;
  color: white;
  font-weight: 800;
`;
