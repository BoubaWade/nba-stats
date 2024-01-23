import "./players.css";
import NavBar from "../reusable-ui/NavBar/NavBar";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import MainPlayers from "./MainPlayers/MainPlayers";

export default function Players() {
  return (
    <div className="players-container">
      <SideBar />
      <NavBar placeholder="Rechercher un joueur" userName="exemple" />
      <MainPlayers />
    </div>
  );
}
