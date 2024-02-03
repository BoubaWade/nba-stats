import "./games.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";
import MainGames from "./MainGames/MainGames";

export default function Games() {
  return (
    <div className="games-container">
      <SideBar />
      <NavBar placeholder="Rechercher un match" />
      <MainGames />
    </div>
  );
}
