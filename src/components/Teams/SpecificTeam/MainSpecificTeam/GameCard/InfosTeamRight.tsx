import { Game } from "../../../teamsTypes";
const getLogoSourcePATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type InfosTeamCardProps = {
  game: Game;
};
export default function InfosTeamRight({ game }: InfosTeamCardProps) {
  return (
    <div className="team-infos">
      <h3 className="abbreviation-name">{game.visitor_team.abbreviation}</h3>
      <img className="logo" src={getLogoSourcePATH(game.visitor_team.name)} />
    </div>
  );
}
