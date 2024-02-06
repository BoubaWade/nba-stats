import DatePicker from "./DateRangePicker/DatePicker";
import ListGames from "./ListGames/ListGames";

export default function AllGames() {
  return (
    <div className="all-games-container">
      <DatePicker />
      <ListGames />
    </div>
  );
}
