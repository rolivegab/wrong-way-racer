import { Typography } from "@mui/material";
import * as style from "./message-player-joined.style";

interface Props {
  playerName: string;
}

export const MessagePlayerJoined = ({ playerName }: Props) => {
  return (
    <Typography css={style.text}>{playerName} Has Joind the Game</Typography>
  );
};
