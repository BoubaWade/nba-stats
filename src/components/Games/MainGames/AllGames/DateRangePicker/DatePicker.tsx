import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "./datePicker.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "../../../../../service/apiCall";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { Value } from "../../../../Teams/teamsTypes";
import { formatDate } from "../../../../../helpers/games";

export default function DatePicker() {
  const { dateRangeForAllGames, setDateRangeForAllGames, setGames } =
    useContext(GlobalContext);
  const [value, onChange] = useState<Value>(dateRangeForAllGames);

  useEffect(() => {
    if (value) {
      setDateRangeForAllGames(value);
      const startDate = formatDate(
        Array.isArray(value) ? value[0] ?? new Date() : value
      );
      const endDate = formatDate(
        Array.isArray(value) ? value[1] ?? new Date() : value
      );

      getAllGames(startDate, endDate, setGames);
    }
  }, [value]);

  return (
    <div className="date-picker-container">
      <p>Choisir une période</p>
      <DateRangePicker
        className="date-range-picker"
        calendarClassName="calendar-date-picker"
        rangeDivider="à"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
