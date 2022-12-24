import { ReactNode, useEffect, useRef } from "react";
import { store } from "src/store/store";

interface Props {
  children: ReactNode;
}

export const Stage = ({ children }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { app } = store.application;
  const { aspectRatio } = store.config;

  useEffect(() => {
    divRef.current?.appendChild(app.view);

    // set canvas style
    app.view.style.width = "100%";
    app.view.style.height = "100%";
  }, [app.view]);

  return (
    <div
      ref={divRef}
      style={{
        margin: "0 auto",
        width: "100vw",
        maxWidth: `calc(100vh * ${aspectRatio})`,
      }}
    >
      {children}
    </div>
  );
};
