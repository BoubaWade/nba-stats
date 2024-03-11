import { useContext } from "react";
import SecondaryButton from "../../../../reusable-ui/SecondaryButton/SecondaryButton";
import StatsTable from "./StatsTable";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function StatsGameTable() {
  const { setShowAllGames } = useContext(GlobalContext);

  const handleReturnToAllGames = () => {
    setShowAllGames(true);
  };

  return (
    <div className="stats-game-table">
      <SecondaryButton
        className="return-button"
        label="Retour"
        onClick={handleReturnToAllGames}
      />
      <StatsTable />
    </div>
  );
}
