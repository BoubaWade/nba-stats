import DatePicker from "./DateRangePicker/DatePicker";
import FilterGames from "./FilterGames/FilterGames";
import useAllGames from "../../../../hooks/useAllGames";
import GamesContent from "./GamesContent/GamesContent";

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
      <GamesContent gamesToDisplay={gamesToDisplay} buttonLabel={buttonLabel} />
    </div>
  );
}
