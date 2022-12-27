import { extendObservable, observable } from "mobx";
import { io, Socket } from "socket.io-client";
import { gameStore } from "src/store/game.store";
import { isPlayer } from "src/types/player.type";
import { isArrayOf, isOneStringLiteralOf, isString } from "ts-narrow";
import { nanoid } from "nanoid";
import { MESSAGE_TYPE } from "src/types/message-type.enum";
import { SOCKET_EVENT } from "../types/socket-event.type";
import { enemyService, EnemyTypes } from "./enemy.service";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";

const state = observable<{
  socket: Socket;
  events: Record<SOCKET_EVENT, (...args: unknown[]) => void>;
}>({
  socket: io("wss://wrongway-racer-api.spls.ae/"),
  events: {
    [SOCKET_EVENT.NEW_CHAT_JOIN]: (player) => {
      if (isPlayer(player)) {
        gameStore.addMessage({
          id: nanoid(),
          type: MESSAGE_TYPE.PLAYER_JOINED,
          playerName: player.name,
        });
      }
    },
    [SOCKET_EVENT.PLAYERS]: (players) => {
      if (isArrayOf(isPlayer)(players)) {
        gameStore.setPlayers(
          players.map((player) => ({ ...player, id: player.name }))
        );
      }
    },
    [SOCKET_EVENT.NEW_CHAT]: (message) => {
      if (isString(message)) {
        gameStore.addMessage({
          id: nanoid(),
          type: MESSAGE_TYPE.MESSAGE_SENT,
          messageContent: message,
        });
      }
    },
    [SOCKET_EVENT.NEW_ENEMY]: (position) => {
      const positionDicio: Record<"left" | "center" | "right", EnemyTypes> = {
        left: TEXTURE_KEYS.ENEMY_LEFT,
        right: TEXTURE_KEYS.ENEMY_RIGHT,
        center: TEXTURE_KEYS.ENEMY_CENTER,
      };
      if (isOneStringLiteralOf("left", "center", "right")(position)) {
        enemyService.createEnemy(positionDicio[position]);
      }
    },
  },
});

state.socket.on("connect", () => {
  console.log(state.socket.id);
});

state.socket.onAny((event, ...args) => {
  console.debug("event", event, ...args);
});

const listenToNewChatJoinEvents = () => {
  state.socket.on(SOCKET_EVENT.NEW_CHAT_JOIN, state.events.newChatJoin);
};

const listenToPlayerEvents = () => {
  state.socket.on(SOCKET_EVENT.PLAYERS, state.events.players);
};

const listenToNewChatEvents = () => {
  state.socket.on(SOCKET_EVENT.NEW_CHAT, state.events.newChat);
};

const listenToEnemies = () => {
  state.socket.on(SOCKET_EVENT.NEW_ENEMY, state.events.newEnemy);
};

const initialize = () => {
  listenToPlayerEvents();
  listenToNewChatJoinEvents();
  listenToNewChatEvents();
  listenToEnemies();
};

const clean = () => {
  state.socket.off(SOCKET_EVENT.PLAYERS, state.events.players);
  state.socket.off(SOCKET_EVENT.NEW_CHAT_JOIN, state.events.newChatJoin);
  state.socket.off(SOCKET_EVENT.NEW_CHAT, state.events.newChat);
};

export const socketService = extendObservable(state, {
  initialize,
  clean,
});
