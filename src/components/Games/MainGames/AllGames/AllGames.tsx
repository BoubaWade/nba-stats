import DatePicker from "./DateRangePicker/DatePicker";
import GamesList from "./GamesList/GamesList";
import FilterGames from "./FilterGames/FilterGames";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { Game } from "../../../Teams/teamsTypes";
import { getStartAndEndDateRange } from "../../../../helpers/games";
import { getAllGames } from "../../../../service/apiCall";

export default function AllGames() {
  const { games, dateRangeForAllGames } = useContext(GlobalContext);
  const [gamesToDisplay, setGamesToDisplay] = useState(games);
  const [buttonLabel, setButtonLabel] = useState("");

  const onFilterGames = (array: Game[]) => {
    setGamesToDisplay(array);
  };
  const getButtonLabel = (str: string | null) => {
    if (str === "Tous les matchs") {
      setButtonLabel("");
    } else {
      if (str) setButtonLabel(str);
    }
  };

  useEffect(() => {
    const dateRange = getStartAndEndDateRange(dateRangeForAllGames);
    if (dateRange) {
      const { startDate, endDate } = dateRange;
      getAllGames(startDate, endDate, setGamesToDisplay);
    }
  }, [dateRangeForAllGames]);

  return (
    <div className="all-games-container">
      <DatePicker />
      <FilterGames
        onFilterGames={onFilterGames}
        getButtonLabel={getButtonLabel}
      />
      <GamesList gamesToDisplay={gamesToDisplay} buttonLabel={buttonLabel} />
    </div>
  );
}
