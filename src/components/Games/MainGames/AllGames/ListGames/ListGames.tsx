import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
const getLogoPATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};

export default function ListGames() {
  const { games } = useContext(GlobalContext);
  console.log(games);
  return (
    <ul className="list-games-container">
      {games.map((game) => (
        <li key={game.id} className="game-card">
          <div className="visitor-team">
            <img src={getLogoPATH(game.visitor_team.name)} />
            <span className="team-name">{game.visitor_team.name}</span>
          </div>
          <div className="date-and-time">
            <p className="time">{}</p>
            <span className="date">{}</span>
          </div>
          <div className="home-team">
            <img src={getLogoPATH(game.home_team.name)} />
            <span className="team-name">{game.home_team.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
