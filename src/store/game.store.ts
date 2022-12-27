import { action, extendObservable, observable } from "mobx";
import { Message } from "src/types/message.type";
import { Player } from "src/types/player.type";

const state = observable<{ players: Player[]; messages: Message[] }>({
  players: [],
  messages: [],
});

const setPlayers = action("set-players", (players: Player[]) => {
  state.players = players;
});

const addMessage = action("add-message", (message: Message) => {
  state.messages.push(message);
});

export const gameStore = extendObservable(state, {
  setPlayers,
  addMessage,
});
