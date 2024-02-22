import { useContext } from "react";
import InputRange from "./InputRange";
import Table from "./Table/Table";
import Loader from "../../../../reusable-ui/Loader/Loader";
import { PlayersContext } from "../../../../../contexts/playersContext";

export default function PlayersTable() {
  const { inputSearch, isLoading, players } = useContext(PlayersContext);

  if (!inputSearch) return;
  if (isLoading) return <Loader />;
  if (players.length === 0)
    return <p className="empty-players-message">Pas de joueurs trouvés</p>;

  return (
    <>
      <InputRange />
      <Table />
    </>
  );
}
