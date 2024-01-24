import "./teams.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";

export default function Teams() {
  return (
    <div className="teams-container">
      <SideBar />
      <NavBar placeholder="Rechercher une équipe" />
      Teams
    </div>
  );
}
