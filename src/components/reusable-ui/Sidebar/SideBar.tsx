import "./sideBar.css";
import { GiBasketballJersey } from "react-icons/gi";
import { TbPlayBasketball } from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { FaBasketballBall } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

const sidebarItems = [
  {
    icon: <TbPlayBasketball className="icon" />,
    text: "Joueurs",
    link: "/players",
  },
  {
    icon: <BsMicrosoftTeams className="icon" />,
    text: "Équipes",
    link: "/teams",
  },
  {
    icon: <GiBasketballJersey className="icon" />,
    text: "Matchs",
    link: "/games",
  },
  {
    icon: <IoStatsChart className="icon" />,
    text: "Statistiques",
    link: "/stats",
  },
  {
    icon: <FaBasketballBall className="icon" />,
    text: "Saison",
    link: "/season",
  },
  {
    icon: <IoSettingsSharp className="icon" />,
    text: "Réglages",
    link: "/settings",
  },
];

export default function SideBar() {
  const { setShowSpecificPlayer, setShowSpecificTeam } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  // const handleClickPlayersButton = () => {
  //   setShowSpecificPlayer(false);
  //   navigate("/players");
  // };
  // const handleClickTeamsButton = () => {
  //   setShowSpecificTeam(false);
  //   navigate("/teams");
  // };
  const handleClickButton = (link: string) => {
    setShowSpecificPlayer(false);
    setShowSpecificTeam(false);
    navigate(link);
  };
  return (
    <div className="sidebar">
      <FaBasketballBall className="logo" />
      <img src="" />
      <ul className="sideBar-list">
        {sidebarItems.map((item, index) => (
          <li key={index} onClick={() => handleClickButton(item.link)}>
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
