import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import StatsGameCards from "./StatsGameCards/StatsGameCards";
import StatsGameTable from "./StatsGameTable/StatsGameTable";

export default function Stats() {
  const { statGameCardDisplayed } = useContext(GlobalContext);

  return <>{statGameCardDisplayed ? <StatsGameCards /> : <StatsGameTable />}</>;
}
