import { css } from "@emotion/react";
import { configStore } from "src/store/config.store";

export const game = css`
  border-radius: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: calc(100% * ${configStore.aspectRatio});
  overflow: hidden;
  position: relative;

  box-shadow: 0px 4px 90px 0px rgba(84, 40, 153, 1);
  border: 2px solid;
`;
