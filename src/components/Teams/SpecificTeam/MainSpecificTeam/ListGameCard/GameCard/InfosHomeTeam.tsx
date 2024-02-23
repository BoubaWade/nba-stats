import { Team } from "../../../../../Players/playersTypes";
const getLogoPATH = (name: string) => {
  return `/public/images/${name}.svg`;
};
type InfosTeamCardProps = {
  team: Team;
};

export default function InfosHomeTeam({ team }: InfosTeamCardProps) {
  const { name, abbreviation } = team;

  return (
    <div className="team-infos">
      <img className="logo" src={getLogoPATH(name)} />
      <h3 className="abbreviation-name">{abbreviation}</h3>
    </div>
  );
}
