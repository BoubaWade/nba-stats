import { useContext } from "react";
import { getSpecificTeamGames } from "../../../../service/apiCall";
import { GlobalContext } from "../../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../helpers/games";

export default function Button() {
  const navigate = useNavigate();
  const {
    specificTeamID,
    setShowSpecificTeam,
    setSpecificTeamGames,
    setDateRangeForSpecificTeamGames,
    dateRangeForSpecificTeamGames,
  } = useContext(GlobalContext);
  const startDate = formatDate(dateRangeForSpecificTeamGames[0]);
  const endDate = formatDate(dateRangeForSpecificTeamGames[1]);

  const searchParams = {
    teamId: specificTeamID,
    startDate: startDate,
    endDate: endDate,
  };
  const handleClick = () => {
    getSpecificTeamGames(searchParams, setSpecificTeamGames);
    setShowSpecificTeam(true);
    navigate("/teams");
  };
  return (
    <button className="return-button" onClick={handleClick}>
      Retour
    </button>
  );
}
