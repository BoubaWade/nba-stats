import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function PlayerInfos() {
  const { playerStats } = useContext(GlobalContext);
  const fullName = playerStats[0]?.team?.full_name;
  const position = playerStats[0]?.player?.position;
  const firstName = playerStats[0]?.player?.first_name;
  const lastName = playerStats[0]?.player?.last_name;

  return (
    <div className="infos">
      <p>
        {fullName} | #Numéro | {position}
      </p>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
}
