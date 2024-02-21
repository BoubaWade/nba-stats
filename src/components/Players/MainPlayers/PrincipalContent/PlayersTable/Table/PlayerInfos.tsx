import React, { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getPlayerStats } from "../../../../../../service/apiCall";
import { Player } from "../../../../playersTypes";
type PlayerInfosProps = {
  player: Player;
};

export default function PlayerInfos({ player }: PlayerInfosProps) {
  const { setShowSpecificPlayer, setPlayerStats } = useContext(GlobalContext);
  const { id, last_name, first_name, position } = player;

  const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const playerId = parseInt(e.currentTarget.id);
    getPlayerStats(playerId, setPlayerStats);
    setShowSpecificPlayer(true);
  };

  return (
    <>
      <td id={id.toString()} onClick={handleClick}>
        {last_name}
      </td>
      <td id={id.toString()} onClick={handleClick}>
        {first_name}
      </td>
      <td>{position}</td>
    </>
  );
}
