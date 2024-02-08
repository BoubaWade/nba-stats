import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "./datePicker.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "../../../../../service/apiCall";
import { GlobalContext } from "../../../../../contexts/globalContext";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function DatePicker() {
  const { setGames } = useContext(GlobalContext);
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  const startDate = formatDate(value[0]);
  const endDate = formatDate(value[1]);

  useEffect(() => {
    getAllGames(startDate, endDate, setGames);
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
