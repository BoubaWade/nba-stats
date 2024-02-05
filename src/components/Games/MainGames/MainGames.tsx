import { useNavigate } from "react-router-dom";
import ListStatsCard from "./ListStatsCards/ListStatsCard";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";
import { getGames } from "../../../service/apiCall";

export default function MainGames() {
  const { specificTeamID, setShowSpecificTeam, yearOfTheGames, setGames } =
    useContext(GlobalContext);

  const navigate = useNavigate();
  const handleClick = () => {
    getGames(specificTeamID, parseInt(yearOfTheGames), setGames);
    navigate("/teams");
    setShowSpecificTeam(true);
  };

  return (
    <div className="main-games">
      <div>Principal Content</div>
      <button onClick={handleClick}>Retour</button>
      <ListStatsCard />
    </div>
  );
}
