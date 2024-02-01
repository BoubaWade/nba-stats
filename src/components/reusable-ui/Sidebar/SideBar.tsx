import "./sideBar.css";
import { GiBasketballJersey } from "react-icons/gi";
import { TbPlayBasketball } from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { FaBasketballBall } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayersContext } from "../../../contexts/playersContext";
import { TeamsContext } from "../../../contexts/teamsContext";

export default function SideBar() {
  const { setShowSpecificPlayer } = useContext(PlayersContext);
  const { setShowSpecificTeam } = useContext(TeamsContext);

  const navigate = useNavigate();

  const handleClickPlayersButton = () => {
    setShowSpecificPlayer(false);
    navigate("/players");
  };
  const handleClickTeamsButton = () => {
    setShowSpecificTeam(false);
    navigate("/teams");
  };
  return (
    <div className="sidebar">
      <FaBasketballBall className="logo" />
      <img src="" />
      <ul className="sideBar-list">
        <li onClick={handleClickPlayersButton}>
          <TbPlayBasketball className="icon" />
          Joueurs
        </li>
        <li onClick={handleClickTeamsButton}>
          <BsMicrosoftTeams className="icon" />
          Équipes
        </li>
        <li onClick={() => navigate("/games")}>
          <GiBasketballJersey className="icon" />
          Matchs
        </li>
        <li onClick={() => navigate("/stats")}>
          <IoStatsChart className="icon" />
          Statistiques
        </li>
        <li onClick={() => navigate("/season")}>
          <FaBasketballBall className="icon" />
          Saison
        </li>
        <li onClick={() => navigate("/settings")}>
          <IoSettingsSharp className="icon" />
          Réglages
        </li>
      </ul>
    </div>
  );
}
