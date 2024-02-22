import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { Game } from "../components/Teams/teamsTypes";
import { getStartAndEndDateRange } from "../helpers/games";
import { API_KEY, baseURL } from "../service/apiCall";

export default function useAllGames() {
  const { games, dateRangeForAllGames } = useContext(GlobalContext);
  const [gamesToDisplay, setGamesToDisplay] = useState(games);
  const [buttonLabel, setButtonLabel] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState<boolean | null>(null);
  const [errorGames, setErrorGames] = useState<string | null>(null);

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

  const handleFetchGames = async (startDate: string, endDate: string) => {
    setIsLoadingGames(true);
    setErrorGames(null);
    try {
      const response = await fetch(
        `${baseURL}/games?start_date=${startDate}&end_date=${endDate}`,
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setGamesToDisplay(data.data);
    } catch {
      setErrorGames("une erreur est survenue");
    } finally {
      setIsLoadingGames(false);
    }
  };

  useEffect(() => {
    const dateRange = getStartAndEndDateRange(dateRangeForAllGames);
    if (dateRange) {
      const { startDate, endDate } = dateRange;
      handleFetchGames(startDate, endDate);
    }
  }, [dateRangeForAllGames]);

  return {
    handleFetchGames,
    isLoadingGames,
    gamesToDisplay,
    buttonLabel,
    onFilterGames,
    getButtonLabel,
  };
}
