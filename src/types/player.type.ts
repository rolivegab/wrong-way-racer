import { isNumber, isObjectOf, isString } from "ts-narrow";

export interface Player {
  id: string;
  name: string;
  avatar: string;
  record: number;
  rank: number;
  gamesPlayed: number;
  worstRecord: number;
  highestRank: number;
}

export const isPlayer = isObjectOf({
  name: isString,
  avatar: isString,
  record: isNumber,
  rank: isNumber,
  gamesPlayed: isNumber,
  worstRecord: isNumber,
  highestRank: isNumber,
});
