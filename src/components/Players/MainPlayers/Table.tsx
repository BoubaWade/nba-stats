// import Loader from "../../reusable-ui/Loader/Loader";
import { usePlayersContext } from "../../../contexts/playersContext";

export default function Table() {
  const dataPlayers = usePlayersContext();

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
