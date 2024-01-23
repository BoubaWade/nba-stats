import { useEffect, useState } from "react";
import Loader from "../../reusable-ui/Loader/Loader";
type PlayerType = {
  first_name: string;
  height_feet?: number;
  height_inches?: number;
  id: number;
  last_name: string;
  position: string;
  team: TeamType;
  weight_pounds: number;
};
type TeamType = {
  id: number;
  full_name: string;
  name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
};
export default function Table() {
  const [dataPlayers, setDataPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    try {
      fetch("https://www.balldontlie.io/api/v1/players")
        .then((res) => res.json())
        .then((result) => setDataPlayers(result.data));
    } catch (error) {
      console.error(error);
    }
  }, []);
  if (dataPlayers.length === 0) return <Loader className="table-loader" />;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Position</th>
            <th>Équipe</th>
            <th>Conférence</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody>
          {dataPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.last_name}</td>
              <td>{player.first_name}</td>
              <td>{player.position}</td>
              <td>{player.team.full_name}</td>
              <td>{player.team.conference}</td>
              <td>{player.team.division}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
