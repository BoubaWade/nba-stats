import DatePicker from "./DateRangePicker/DatePicker";
import GamesList from "./GamesList/GamesList";
import FilterGames from "./FilterGames/FilterGames";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { Game } from "../../../Teams/teamsTypes";

export default function AllGames() {
  const { games } = useContext(GlobalContext);
  const [gamesToDisplay, setGamesToDisplay] = useState(games);

  const onFilterGames = (array: Game[]) => {
    setGamesToDisplay(array);
  };

  return (
    <div className="all-games-container">
      <DatePicker />
      <FilterGames onFilterGames={onFilterGames} />
      <GamesList gamesToDisplay={gamesToDisplay} />
    </div>
  );
}
