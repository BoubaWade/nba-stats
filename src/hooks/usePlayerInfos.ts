import { useContext } from "react";
import { PlayersContext } from "../contexts/playersContext";
import { GlobalContext } from "../contexts/globalContext";
import { API_KEY, baseURL } from "../service/apiCall";
import { Player } from "../components/Players/playersTypes";

export default function usePlayerInfos(player: Player) {
  const { setShowSpecificPlayer, setPlayerStats } = useContext(GlobalContext);
  const { setIsLoadingPlayerStats, setErrorPlayerStats } =
    useContext(PlayersContext);
  const { id, last_name, first_name, position } = player;

  const getPlayerStats = async (playerId: number) => {
    setIsLoadingPlayerStats(true);
    setErrorPlayerStats(null);
    try {
      const response = await fetch(
        `${baseURL}/stats?seasons[]=2023&player_ids[]=${playerId}&postseason=false`,
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setPlayerStats(data.data);
    } catch {
      setErrorPlayerStats("une erreur est survenue");
    } finally {
      setIsLoadingPlayerStats(false);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const playerId = parseInt(e.currentTarget.id);
    getPlayerStats(playerId);
    setShowSpecificPlayer(true);
  };
  const infosFields = [
    {
      id: id.toString(),
      onclick: handleClick,
      label: last_name,
      className: "",
    },
    {
      id: id.toString(),
      onclick: handleClick,
      label: first_name,
      className: "",
    },
    { id: "", onclick: () => {}, label: position, className: "Position" },
  ];
  return { infosFields };
}
