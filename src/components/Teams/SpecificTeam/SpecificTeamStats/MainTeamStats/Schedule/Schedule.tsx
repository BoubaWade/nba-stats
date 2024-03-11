import "./schedule.css";
import { nbaArenas } from "../../../../../../config/constants";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getDateFormated } from "../../../../../../helpers/games";
import {
  getSpecificTeamArena,
  setTeamsWithArenas,
} from "../../../../../../helpers/teams";
import TableHeader from "../../../../../reusable-ui/TableHeader";
import { Game } from "../../../../teamsTypes";
import "./schedule.css";
import { useContext } from "react";

export default function Schedule() {
  const { teams, teamFullName, allGamesByTeam } = useContext(GlobalContext);
  const scheduleTableHeaderFields = ["Date", "Adversaire", "Résultat", "Stade"];

  const teamsWithArenas = setTeamsWithArenas(teams, nbaArenas);

  return (
    <div className="table-container">
      <table>
        <TableHeader datas={scheduleTableHeaderFields} />
        <tbody>
          {allGamesByTeam.map((game) => (
            <tr key={game.id}>
              <td>{getDateFormated(game.date)}</td>
              <td>
                {game.home_team.full_name === teamFullName
                  ? VisitorTeam(game)
                  : HomeTeam(game)}
              </td>
              <td>
                <span>{getStatusResult(game, teamFullName)}</span>
                <span>
                  {game.home_team.full_name === teamFullName
                    ? game.visitor_team_score
                    : game.home_team_score}
                  -
                  {game.visitor_team.full_name === teamFullName
                    ? game.visitor_team_score
                    : game.home_team_score}
                </span>
              </td>
              <td>
                {
                  getSpecificTeamArena(teamsWithArenas, game.home_team.name)
                    ?.arena
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const VisitorTeam = (game: Game) => {
  return (
    <div className="team-visitor">
      <span>VS</span>
      <img src={`/images/teamsLogos/${game.visitor_team.name}.svg`} />
      <span> {game.visitor_team.abbreviation}</span>
    </div>
  );
};
const HomeTeam = (game: Game) => {
  return (
    <div className="team-home">
      <span>@</span>
      <img src={`/images/teamsLogos/${game.home_team.name}.svg`} />
      <span> {game.home_team.abbreviation}</span>
    </div>
  );
};

const getStatusResult = (
  game: Game,
  name: string | null
): string | undefined => {
  const scoreDifference = game.home_team_score - game.visitor_team_score;
  if (scoreDifference > 0 && game.home_team.full_name === name) return "V";
  if (scoreDifference > 0 && game.home_team.full_name !== name) return "D";

  if (scoreDifference < 0 && game.visitor_team.full_name === name) return "V";
  if (scoreDifference < 0 && game.visitor_team.full_name !== name) return "D";
};
