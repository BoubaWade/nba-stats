import "./games.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainGames from "./MainGames/MainGames";
import Cursor from "../reusable-ui/Cursor/Cursor";

export default function Games() {
  return (
    <div className="games-container">
      <Navigation />
      <Cursor className="games-button-cursor" />
      <MainGames />
    </div>
  );
}
