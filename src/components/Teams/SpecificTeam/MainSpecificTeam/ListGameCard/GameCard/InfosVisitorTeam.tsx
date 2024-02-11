import { Team } from "../../../../../Players/playersTypes";
const getLogoPATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type InfosTeamCardProps = {
  team: Team;
};
export default function InfosVisitorTeam({ team }: InfosTeamCardProps) {
  const { abbreviation, name } = team;

  return (
    <div className="team-infos">
      <h3 className="abbreviation-name">{abbreviation}</h3>
      <img className="logo" src={getLogoPATH(name)} />
    </div>
  );
}
