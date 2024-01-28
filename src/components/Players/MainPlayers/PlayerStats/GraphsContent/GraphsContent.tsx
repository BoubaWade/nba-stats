import { MenuSelect } from "react-menu-dropdown-list";
import { seasons } from "../../../../../config/constants";
import { getPlayerStatsBySeason } from "../../../../../service/apiCall";
import { useContext, useState } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import LinePlot from "./GraphPoints";
import { PlayerStats } from "../../../playersTypes";
import { getSpecificStat } from "../../../../../helpers/players";
// import { PlayerStats } from "../../../playersTypes";

export default function GraphsContent() {
  const { playerStats, playerStatsBySeason, setPlayerStatsBySeason } =
    useContext(PlayersContext);
  const [specificStat, setSpecificStat] = useState<number[]>([]);
  //   const [playerStatsBySeason, setPlayerStatsBySeason] = useState<PlayerStats[]>(
  //     []
  //   );
  const handleSelectStatName = (option: string) => {
    const playerId = playerStats[0]?.player.id;
    getPlayerStatsBySeason(playerId, parseInt(option), setPlayerStatsBySeason);
  };
  const handleSelectSeason = (option: string) => {
    const specificStat = getSpecificStat(playerStatsBySeason, option);
    setSpecificStat(specificStat);
  };

  return (
    <div>
      <div>
        <label>Statistiques du joueur</label>
        <MenuSelect
          options={["Points", "Passes", "Rebonds"]}
          onSelect={(option) => handleSelectStatName(option)}
          classNameContainer=""
          classNameButton=""
          classNameList=""
          classNameItem=""
        />
      </div>
      <div>
        <label>Saison</label>
        <MenuSelect
          options={seasons}
          onSelect={(option) => handleSelectSeason(option)}
          classNameContainer=""
          classNameButton=""
          classNameList=""
          classNameItem=""
        />
      </div>
      <LinePlot
        data={specificStat}
        width={640}
        height={400}
        marginTop={20}
        marginRight={20}
        marginBottom={20}
        marginLeft={20}
      />
    </div>
  );
}
