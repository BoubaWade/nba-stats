import { useContext } from "react";
import InputRange from "./InputRange";
import Loader from "../../../../reusable-ui/Loader/Loader";
import { PlayersContext } from "../../../../../contexts/playersContext";
import TableContainer from "./TableContainer/TableContainer";

export default function PlayersTable() {
  const { inputSearch, isLoadingPlayers, players } = useContext(PlayersContext);

  if (!inputSearch) return;
  if (isLoadingPlayers) return <Loader />;
  if (players.length === 0)
    return <p className="empty-players-message">Pas de joueurs trouvés</p>;

  return (
    <>
      <InputRange />
      <TableContainer />
    </>
  );
}
