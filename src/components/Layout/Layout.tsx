import { ReactNode } from "react";
import * as style from "./Layout.style";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div css={style.container}>{children}</div>
);
