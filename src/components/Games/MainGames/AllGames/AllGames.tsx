import DatePicker from "./DateRangePicker/DatePicker";
import GamesList from "./GamesList/GamesList";
import FilterGames from "./FilterGames/FilterGames";
import useAllGames from "../../../../hooks/useAllGames";

export default function AllGames() {
  const { gamesToDisplay, buttonLabel, onFilterGames, getButtonLabel } =
    useAllGames();

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
