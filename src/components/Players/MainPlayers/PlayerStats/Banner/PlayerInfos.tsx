import { useContext } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";

export default function PlayerInfos() {
  const { playerStats } = useContext(PlayersContext);
  return (
    <div className="infos">
      <p>
        {playerStats[0]?.team?.full_name} | #Numéro |{" "}
        {playerStats[0]?.player?.position}
      </p>
      <h1>
        {playerStats[0]?.player?.first_name} {playerStats[0]?.player?.last_name}
      </h1>
    </div>
  );
}
