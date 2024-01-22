import "./sideBar.css"
import { GiBasketballJersey } from "react-icons/gi"
import { TbPlayBasketball } from "react-icons/tb"
import { BsMicrosoftTeams } from "react-icons/bs"
import { IoStatsChart } from "react-icons/io5"
import { FaBasketballBall } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom"

export default function SideBar() {
    const navigate=useNavigate()
    return (
        <div className="sidebar">
            <FaBasketballBall className="logo" />
            <img src="" />
            <ul className="sideBar-list">
                <li onClick={()=>navigate("/players")}><TbPlayBasketball className="icon" />Joueurs</li>
                <li onClick={()=>navigate("/teams")}><BsMicrosoftTeams className="icon" />Équipes</li>
                <li onClick={()=>navigate("/games")}><GiBasketballJersey className="icon" />Matchs</li>
                <li onClick={()=>navigate("/stats")}><IoStatsChart className="icon" />Statistiques</li>
                <li onClick={()=>navigate("/season")}><FaBasketballBall className="icon" />Saison</li>
                <li onClick={()=>navigate("/settings")}><IoSettingsSharp className="icon" />Réglages</li>
            </ul>
        </div>
    )
}
