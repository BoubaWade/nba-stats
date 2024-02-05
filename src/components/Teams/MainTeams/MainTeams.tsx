import { useContext, useEffect } from "react";
import DivisionTeam from "./DivisionTeam";
import { getAllDivisionsWithTeams } from "../../../helpers/players";
import { GlobalContext } from "../../../contexts/globalContext";
import { getAllTeams } from "../../../service/apiCall";

export default function MainTeams() {
  const { teams, setTeams } = useContext(GlobalContext);
  const divisionsWithTeams = getAllDivisionsWithTeams(teams);

  useEffect(() => {
    getAllTeams(setTeams);
  }, []);

  return (
    <div className="main-teams">
      <div className="divisions-container">
        {divisionsWithTeams.map((division, index) => (
          <DivisionTeam key={index} division={division} />
        ))}
      </div>
    </div>
  );
}
