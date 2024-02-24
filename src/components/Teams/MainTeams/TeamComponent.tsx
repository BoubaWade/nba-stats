import { useContext } from "react";
import { Team } from "../../Players/playersTypes";
import { GlobalContext } from "../../../contexts/globalContext";
import PrimaryButton from "../../reusable-ui/PrimaryButton/PrimaryButton";
// const getLogoPATH = (name: string) => {
//   return `/images/teamsLogos/${name}.svg`;
// };
// const getFaceImagePATH = (name: string) => {
//   return `/images/teamsBanners/${name}.png`;
// };
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
      {/* <img src={getFaceImagePATH(full_name)} className="face" /> */}
      <img src={`/images/teamsBanners/${full_name}.png`} className="face" />
      <div className="description-container">
        <img src={`public/images/teamsLogos/${name}.svg`} />
        <span className="name">{full_name}</span>
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
