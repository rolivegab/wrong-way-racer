import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { gameService } from "src/game/services/game.service";
import { GameBar } from "../game-bar/game-bar.component";
import * as style from "./game.style";

export const Game = observer(() => {
  const divRef = useRef<HTMLDivElement>(null);

  const load = async (div: HTMLDivElement) => {
    gameService.attachToDiv(div);
    await gameService.load();
  };

  const unload = async (div: HTMLDivElement) => {
    gameService.removeFromDiv(div);
    gameService.clean();
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
