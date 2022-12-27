import { MESSAGE_TYPE } from "./message-type.enum";

export type Message = { id: string } & (
  | {
      type: MESSAGE_TYPE.PLAYER_JOINED;
      playerName: string;
    }
  | {
      type: MESSAGE_TYPE.ORANGE_INFO;
      messageContent: string;
    }
  | {
      type: MESSAGE_TYPE.MESSAGE_SENT;
      // playerName: string;
      messageContent: string;
    }
);
