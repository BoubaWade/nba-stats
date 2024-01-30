// import Loader from "../../reusable-ui/Loader/Loader";

import React, { useContext } from "react";
import { PlayersContext } from "../../../contexts/playersContext";
import { getPlayerStats } from "../../../service/apiCall";

export default function Table() {
  const { dataPlayers, rangeValue, setShowSpecificPlayer, setPlayerStats } =
    useContext(PlayersContext);
  const playersLength = dataPlayers.length;
  const proportion = (playersLength * parseInt(rangeValue)) / 100;
  const sliceDataPlayers = dataPlayers.slice(0, proportion);

  const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const playerId = parseInt(e.currentTarget.id);
    getPlayerStats(playerId, setPlayerStats);
    setShowSpecificPlayer(true);
  };
  // console.log(sliceDataPlayers);

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
          {sliceDataPlayers.map((player) => (
            <tr key={player.id}>
              <td id={player.id.toString()} onClick={handleClick}>
                {player.last_name}
              </td>
              <td id={player.id.toString()} onClick={handleClick}>
                {player.first_name}
              </td>
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
