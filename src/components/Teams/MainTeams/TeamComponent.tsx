import { useContext } from "react";
import { Team } from "../../Players/playersTypes";
import { GlobalContext } from "../../../contexts/globalContext";
import PrimaryButton from "../../reusable-ui/PrimaryButton/PrimaryButton";
import TeamBanner from "./TeamBanner";
import LogoName from "./LogoName";

type TeamComponentProps = {
  team: Team;
};

export default function TeamComponent({ team }: TeamComponentProps) {
  const { id, name, full_name, city } = team;
  const { setSpecificTeamID, setShowSpecificTeam, setTeamFullName } =
    useContext(GlobalContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setTeamFullName(e.currentTarget.name);
    setShowSpecificTeam(true);
  };

  return (
    <div className="team" id={city}>
      <TeamBanner name={full_name} />
      <div className="description-container">
        <LogoName name={name} full_name={full_name} />
        <PrimaryButton
          id={id.toString()}
          className="display-games-button"
          label="matchs"
          name={full_name}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
