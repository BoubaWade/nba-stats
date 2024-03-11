import { Team } from "../../../../../Players/playersTypes";
// const getLogoPATH = (name: string) => {
//   return `/images/teamsLogos/${name}.svg`;
// };
type InfosTeamCardProps = {
  team: Team;
};

export default function InfosHomeTeam({ team }: InfosTeamCardProps) {
  const { name, abbreviation } = team;

  return (
    <div className="team-infos">
      <img className="logo" src={`/images/teamsLogos/${name}.svg`} />
      <h3 className="abbreviation-name">{abbreviation}</h3>
    </div>
  );
}
