import { Typography } from "@mui/material";
import * as style from "./message-sent.style";

interface Props {
  content: string;
}

export const MessageSent = ({ content }: Props) => {
  return <Typography css={style.text}>{content}</Typography>;
};
