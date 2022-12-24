import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { gameService } from "src/game/services/game.service";
import { configStore } from "src/store/config.store";
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
    <div
      ref={divRef}
      style={{
        margin: "0 auto",
        width: "100vw",
        maxWidth: `calc(100vh * ${configStore.aspectRatio})`,
      }}
    />
  );
});
