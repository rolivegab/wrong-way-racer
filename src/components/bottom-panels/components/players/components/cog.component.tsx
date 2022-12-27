import { css } from "@emotion/react";
import cogSvg from "src/assets/cog.svg";

export const Cog = () => {
  return (
    <img
      css={css`
        filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.25));
      `}
      src={cogSvg}
    />
  );
};
