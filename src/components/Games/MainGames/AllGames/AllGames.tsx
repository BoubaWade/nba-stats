import DatePicker from "./DateRangePicker/DatePicker";
import GamesList from "./GamesList/GamesList";

export default function AllGames() {
  return (
    <div className="all-games-container">
      <DatePicker />
      <GamesList />
    </div>
  );
}
