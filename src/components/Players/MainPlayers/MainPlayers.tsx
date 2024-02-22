import "./mainPlayers.css";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";
import PlayerStats from "./PlayerStats/PlayerStats";
import PrincipalContent from "./PrincipalContent/PrincipalContent";

export default function MainPlayers() {
  const { showSpecificPlayer } = useContext(GlobalContext);

  return (
    <div className="main-players">
      {showSpecificPlayer ? <PlayerStats /> : <PrincipalContent />}
    </div>
  );
}
