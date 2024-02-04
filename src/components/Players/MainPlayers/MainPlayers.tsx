import "./mainPlayers.css";
import { useContext } from "react";
import InputRange from "./InputRange";
import Table from "./Table";
import PlayerStats from "./PlayerStats/PlayerStats";
import { GlobalContext } from "../../../contexts/globalContext";

export default function MainPlayers() {
  const { showSpecificPlayer } = useContext(GlobalContext);
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
