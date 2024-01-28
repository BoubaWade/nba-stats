import "./players.css";
import NavBar from "../reusable-ui/NavBar/NavBar";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import MainPlayers from "./MainPlayers/MainPlayers";
import { PlayersContext } from "../../contexts/playersContext";
import { useEffect, useState } from "react";
import { PlayerStats, Player } from "./playersTypes";
import { getAllPlayers } from "../../service/apiCall";

export default function Players() {
  const [dataPlayers, setDataPlayers] = useState<Player[]>([]);
  const [inputSearch, setSearchValue] = useState("");
  const [rangeValue, setRangeValue] = useState("100");
  const [showSpecificPlayer, setShowSpecificPlayer] = useState(false);
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [playerStatsBySeason, setPlayerStatsBySeason] = useState<PlayerStats[]>(
    []
  );

  useEffect(() => {
    getAllPlayers(inputSearch, setDataPlayers);
  }, [inputSearch]);

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const playersContextValue = {
    dataPlayers,
    setDataPlayers,
    rangeValue,
    setRangeValue,
    showSpecificPlayer,
    setShowSpecificPlayer,
    playerStats,
    setPlayerStats,
    playerStatsBySeason,
    setPlayerStatsBySeason,
  };

  return (
    <PlayersContext.Provider value={playersContextValue}>
      <div className="players-container">
        <SideBar />
        <NavBar
          placeholder="Rechercher un joueur"
          userName="exemple"
          value={inputSearch}
          onChange={handleChange}
        />
        <MainPlayers />
      </div>
    </PlayersContext.Provider>
  );
}
