import { useContext } from "react";
import InputRange from "./InputRange";
import Table from "./Table/Table";
import Loader from "../../../reusable-ui/Loader/Loader";
import { PlayersContext } from "../../../../contexts/playersContext";

export default function PlayersTable() {
  const { isLoading } = useContext(PlayersContext);

  if (isLoading) return <Loader />;
  return (
    <>
      <InputRange />
      <Table />
    </>
  );
}
