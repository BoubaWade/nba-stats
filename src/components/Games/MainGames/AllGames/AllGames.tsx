import DatePicker from "./DateRangePicker/DatePicker";
import FilterGames from "./FilterGames/FilterGames";
import useAllGames from "../../../../hooks/useAllGames";
import GamesContent from "./GamesContent/GamesContent";
import { useState } from "react";
import Overlay from "../../../reusable-ui/Overlay/Overlay";

export default function AllGames() {
  const { gamesToDisplay, buttonLabel, onFilterGames, getButtonLabel } =
    useAllGames();
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);

  return (
    <div className="all-games-container">
      {isOverlayDisplayed && <Overlay />}
      <DatePicker setIsOverlayDisplayed={setIsOverlayDisplayed} />
      <FilterGames
        onFilterGames={onFilterGames}
        getButtonLabel={getButtonLabel}
      />
      <GamesContent gamesToDisplay={gamesToDisplay} buttonLabel={buttonLabel} />
    </div>
  );
}
