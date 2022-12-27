import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { gameStore } from "src/store/game.store";
import { MESSAGE_TYPE } from "src/types/message-type.enum";
import { Message } from "src/types/message.type";
import * as style from "./chat.style";
import { MessagePlayerJoined } from "./components/message-player-joined/message-player-joined.component";
import { MessageSent } from "./components/message-sent/message-sent.component";

export const Chat = observer(() => {
  const messages = gameStore.messages;

  const renderMessage = (message: Message) => {
    switch (message.type) {
      case MESSAGE_TYPE.PLAYER_JOINED:
        return (
          <MessagePlayerJoined
            key={message.id}
            playerName={message.playerName}
          />
        );
      case MESSAGE_TYPE.MESSAGE_SENT:
        return (
          <MessageSent key={message.id} content={message.messageContent} />
        );
    }
  };
  return (
    <Box css={style.container}>
      {messages.length === 0 && (
        <Typography css={style.empty}>Empty</Typography>
      )}
      {messages.map(renderMessage)}
    </Box>
  );
});
