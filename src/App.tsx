import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import road from "./assets/road.png";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);
  useEffect(() => {
    let app = new PIXI.Application({ width, height: 360 });
    divRef.current?.appendChild(app.view);

    let sprite = PIXI.Sprite.from(road);
    app.stage.addChild(sprite);

    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;
      sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
  }, []);
  return (
    <div ref={divRef}>
      <button
        onClick={() => {
          setWidth((p) => p + 50);
        }}
      >
        inc
      </button>
    </div>
  );
}

export default App;
