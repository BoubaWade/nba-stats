import { useContext } from "react";
import { Team } from "../../Players/playersTypes";
import { GlobalContext } from "../../../contexts/globalContext";
import PrimaryButton from "../../reusable-ui/PrimaryButton/PrimaryButton";
import TeamBanner from "./TeamBanner";
import LogoName from "./LogoName";
import { getAllGamesByTeam } from "../../../service/apiCall";

type TeamComponentProps = {
  team: Team;
};

export default function TeamComponent({ team }: TeamComponentProps) {
  const { id, name, full_name, city } = team;

  const {
    setShowSpecificTeamStats,
    setShowSpecificTeamGames,
    setSpecificTeamID,
    setShowSpecificTeam,
    setTeamFullName,
    setAllGamesByTeam,
  } = useContext(GlobalContext);

  const handleShowTeamGames = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setTeamFullName(e.currentTarget.name);
    setShowSpecificTeam(true);
    setShowSpecificTeamStats(false);
    setShowSpecificTeamGames(true);
  };

  const handleShowTeamStats = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowSpecificTeam(true);
    setShowSpecificTeamStats(true);
    setShowSpecificTeamGames(false);

    const teamId = parseInt(e.currentTarget.id);
    getAllGamesByTeam(teamId, setAllGamesByTeam);
    setTeamFullName(e.currentTarget.name);
  };

  return (
    <div className="team" id={city}>
      <TeamBanner name={full_name} />
      <div className="description-container">
        <LogoName name={name} full_name={full_name} />
        <PrimaryButton
          id={id.toString()}
          className="button"
          label="Matchs"
          name={full_name}
          onClick={handleShowTeamGames}
        />
        <PrimaryButton
          id={id.toString()}
          className="button"
          label="Statistiques"
          name={full_name}
          onClick={handleShowTeamStats}
        />
      </div>
    </div>
  );
}
