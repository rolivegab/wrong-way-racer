import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { gameService } from "src/game/services/game.service";
import { GameBar } from "../GameBar/GameBar";
import * as style from "./Game.style";
export const Game = observer(() => {
  const divRef = useRef<HTMLDivElement>(null);

  const load = async (div: HTMLDivElement) => {
    gameService.attachToDiv(div);
    await gameService.load();
  };

  const unload = async (div: HTMLDivElement) => {
    gameService.removeFromDiv(div);
  };

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;
    load(div);

    return () => {
      unload(div);
    };
  }, []);

  return (
    <div ref={divRef} css={style.game}>
      <GameBar />
    </div>
  );
});
