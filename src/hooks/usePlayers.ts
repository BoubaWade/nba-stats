import { useEffect, useState } from "react";
import { Player, PlayerStats } from "../components/Players/playersTypes";
import { API_KEY, baseURL } from "../service/apiCall";

export default function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [inputSearch, setInputSearch] = useState<string | undefined>(undefined);
  const [rangeValue, setRangeValue] = useState("100");
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [playerStatsBySeason, setPlayerStatsBySeason] = useState<PlayerStats[]>(
    []
  );

  const handleFetchPlayers = async () => {
    setIsLoading(true);
    setError(null);
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
      setError("une erreur est survenue");
    } finally {
      setIsLoading(false);
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
    playerStatsBySeason,
    setPlayerStatsBySeason,
    isLoading,
    setIsLoading,
  };
  return { playersContextValue };
}
