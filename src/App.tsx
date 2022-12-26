import "./App.css";
import { Game } from "./components/Game/Game";
import { GameBar } from "./components/GameBar/GameBar";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  );
};
