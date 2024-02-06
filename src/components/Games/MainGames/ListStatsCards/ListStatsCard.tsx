import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import StatsCard from "./StatsCard";
import { PlayerStats } from "../../../Players/playersTypes";
import { useNavigate } from "react-router-dom";
import { getSpecificTeamGames } from "../../../../service/apiCall";
const condition = (stat: PlayerStats) => {
  return stat.min !== "00" && stat.min !== null && stat.min !== "0:00";
};

export default function ListStatsCard() {
  const {
    gameStats,
    specificTeamID,
    setShowSpecificTeam,
    yearOfTheGames,
    setSpecificTeamGames,
  } = useContext(GlobalContext);

  const getStatIfTheyPlay = gameStats.filter((stat) => condition(stat));
  const navigate = useNavigate();

  const handleClick = () => {
    getSpecificTeamGames(
      specificTeamID,
      parseInt(yearOfTheGames),
      setSpecificTeamGames
    );
    navigate("/teams");
    setShowSpecificTeam(true);
  };

  return (
    <>
      <button className="return-button" onClick={handleClick}>
        Retour
      </button>
      <ul className="list-stats-card">
        {getStatIfTheyPlay.map((stats) => (
          <StatsCard key={stats.id} stats={stats} />
        ))}
      </ul>
    </>
  );
}
