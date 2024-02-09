import { useContext } from "react";
import { getSpecificTeamGames } from "../../../../service/apiCall";
import { GlobalContext } from "../../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();
  const {
    specificTeamID,
    setShowSpecificTeam,
    yearOfTheGames,
    setSpecificTeamGames,
  } = useContext(GlobalContext);

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
    <button className="return-button" onClick={handleClick}>
      Retour
    </button>
  );
}
