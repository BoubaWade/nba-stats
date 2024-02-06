import { Game } from "../../../../teamsTypes";
const getLogoPATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type InfosTeamCardProps = {
  game: Game;
};
export default function InfosVisitorTeam({ game }: InfosTeamCardProps) {
  return (
    <div className="team-infos">
      <h3 className="abbreviation-name">{game.visitor_team.abbreviation}</h3>
      <img className="logo" src={getLogoPATH(game.visitor_team.name)} />
    </div>
  );
}
