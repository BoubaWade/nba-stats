import "./sideBar.css"
import { GiBasketballJersey } from "react-icons/gi"
import { TbPlayBasketball } from "react-icons/tb"
import { BsMicrosoftTeams } from "react-icons/bs"
import { IoStatsChart } from "react-icons/io5"
import { FaBasketballBall } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="sidebar">
        <img src=""/>
        <ul className="sideBar-list">
            <li><TbPlayBasketball className="icon"/>Joueurs</li>
            <li><BsMicrosoftTeams className="icon"/>Équipes</li>
            <li><GiBasketballJersey className="icon"/>Matchs</li>
            <li><IoStatsChart className="icon"/>Statistiques</li>
            <li><FaBasketballBall className="icon"/>Saison</li>
            <li><IoSettingsSharp className="icon"/>Réglages</li>
        </ul>
    </div>
  )
}
