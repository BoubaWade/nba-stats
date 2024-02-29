import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "./datePicker.css";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "../../../../../service/apiCall";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { Value } from "../../../../Teams/teamsTypes";
import { getStartAndEndDateRange } from "../../../../../helpers/games";
import PrimaryDatePicker from "../../../../reusable-ui/PrimaryDatePicker/PrimaryDatePicker";

type DatePickerProps = {
  setIsOverlayDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DatePicker({ setIsOverlayDisplayed }: DatePickerProps) {
  const { dateRangeForAllGames, setDateRangeForAllGames, setGames } =
    useContext(GlobalContext);
  const [value, onChange] = useState<Value>(dateRangeForAllGames);

  useEffect(() => {
    setDateRangeForAllGames(value);
    const dateRange = getStartAndEndDateRange(value);
    if (dateRange) {
      const { startDate, endDate } = dateRange;
      getAllGames(startDate, endDate, setGames);
    }
  }, [value]);

  return (
    <div className="date-picker-container">
      <p>Choisir une période</p>
      <PrimaryDatePicker
        onChange={onChange}
        value={value}
        onCalendarOpen={() => setIsOverlayDisplayed(true)}
        onCalendarClose={() => setIsOverlayDisplayed(false)}
      />
    </div>
  );
}
