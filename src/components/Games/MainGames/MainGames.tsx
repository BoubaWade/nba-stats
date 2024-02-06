import ListStatsCard from "./ListStatsCards/ListStatsCard";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";
import AllGames from "./AllGames/AllGames";

export default function MainGames() {
  const { showAllGames } = useContext(GlobalContext);

  return (
    <div className="main-games">
      {showAllGames ? <AllGames /> : <ListStatsCard />}
    </div>
  );
}
