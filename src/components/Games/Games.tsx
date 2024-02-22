import "./games.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import MainGames from "./MainGames/MainGames";
import Cursor from "../reusable-ui/Cursor/Cursor";

export default function Games() {
  return (
    <div className="games-container">
      <SideBar />
      <Cursor className="games-button-cursor" />
      <MainGames />
    </div>
  );
}
