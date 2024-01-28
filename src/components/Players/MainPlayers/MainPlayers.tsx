import "./mainPlayers.css";
import { useContext } from "react";
import InputRange from "./InputRange";
import Table from "./Table";
import PlayerStats from "./PlayerStats/PlayerStats";
import { PlayersContext } from "../../../contexts/playersContext";

export default function MainPlayers() {
  const { showSpecificPlayer } = useContext(PlayersContext);
  const tableContainer = (
    <>
      <InputRange />
      <Table />
    </>
  );
  return (
    <div className="main-players">
      {showSpecificPlayer ? <PlayerStats /> : tableContainer}
    </div>
  );
}
