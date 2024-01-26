import "./mainPlayers.css";
import { useContext } from "react";
import InputRange from "./InputRange";
import Table from "./Table";
import PlayerStats from "./PlayerStats/PlayerStats";
import { PlayersContext } from "../../../contexts/playersContext";

export default function MainPlayers() {
  const { showSpecificPlayer } = useContext(PlayersContext);
  return (
    <div className="main-players">
      {showSpecificPlayer ? (
        <PlayerStats />
      ) : (
        <>
          <InputRange />
          <Table />
        </>
      )}
    </div>
  );
}
