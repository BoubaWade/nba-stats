import { Game } from "../../../../teamsTypes";

const getLogoSourcePATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type InfosTeamCardProps = {
  game: Game;
};
export default function InfosHomeTeam({ game }: InfosTeamCardProps) {
  return (
    <div className="team-infos">
      <img className="logo" src={getLogoSourcePATH(game.home_team.name)} />
      <h3 className="abbreviation-name">{game.home_team.abbreviation}</h3>
    </div>
  );
}
