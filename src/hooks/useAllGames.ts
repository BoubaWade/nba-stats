import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { Game } from "../components/Teams/teamsTypes";
import { getStartAndEndDateRange } from "../helpers/games";
import { getAllGames } from "../service/apiCall";

export default function useAllGames() {
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

  return { gamesToDisplay, buttonLabel, onFilterGames, getButtonLabel };
}
