import { useEffect, useState } from "react";
import { Player, PlayerStats } from "../components/Players/playersTypes";
import { API_KEY, baseURL } from "../service/apiCall";

export default function usePlayers() {
  const [isHomeDisplayed, setIsHomeDisplayed] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [inputSearch, setSearchValue] = useState("");
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
      const response = await fetch(`${baseURL}/players?search=${inputSearch}`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setPlayers(data.data);
    } catch {
      setError("une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFetchPlayers();
  }, []);

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const playersContextValue = {
    isHomeDisplayed,
    setIsHomeDisplayed,
    players,
    setPlayers,
    rangeValue,
    setRangeValue,
    playerStatsBySeason,
    setPlayerStatsBySeason,
    isLoading,
    setIsLoading,
  };
  return {
    isHomeDisplayed,
    inputSearch,
    handleChange,
    playersContextValue,
  };
}
