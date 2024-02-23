import { useEffect, useState } from "react";
import { Player } from "../components/Players/playersTypes";
import { API_KEY, baseURL } from "../service/apiCall";

export default function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [inputSearch, setInputSearch] = useState<string | undefined>(undefined);
  const [rangeValue, setRangeValue] = useState("100");
  const [isLoadingPlayers, setIsLoadingPlayers] = useState<boolean | null>(
    null
  );
  const [errorPlayers, setErrorPlayers] = useState<string | null>(null);
  const [isLoadingPlayerStats, setIsLoadingPlayerStats] = useState<
    boolean | null
  >(null);
  const [errorPlayerStats, setErrorPlayerStats] = useState<string | null>(null);

  const handleFetchPlayers = async () => {
    setIsLoadingPlayers(true);
    setErrorPlayers(null);
    try {
      const response = await fetch(
        `${baseURL}/players?search=${inputSearch}&per_page=100`,
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setPlayers(
        data.data.filter((player: Player) => player.draft_year > 2002)
      );
    } catch {
      setErrorPlayers("une erreur est survenue");
    } finally {
      setIsLoadingPlayers(false);
    }
  };

  useEffect(() => {
    handleFetchPlayers();
  }, [inputSearch]);

  const playersContextValue = {
    players,
    setPlayers,
    inputSearch,
    setInputSearch,
    rangeValue,
    setRangeValue,
    isLoadingPlayers,
    setIsLoadingPlayers,
    errorPlayers,
    isLoadingPlayerStats,
    setIsLoadingPlayerStats,
    errorPlayerStats,
    setErrorPlayerStats,
  };
  return { playersContextValue };
}
