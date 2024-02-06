import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "./datePicker.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "../../../../../service/apiCall";
import { GlobalContext } from "../../../../../contexts/globalContext";
// type Range<T> = [T, T];
// type ValuePiece = Date | null;
// type Value = ValuePiece | Range<ValuePiece>;

// type LooseValuePiece = string | Date | null;
// type LooseValue = LooseValuePiece | Range<LooseValuePiece>;
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
// console.log(Array(dateValue));
// const formatRange = (dateRange: Value[]) => {
//   if (dateRange) {
//     const [date_start, date_end] = dateRange;
//     const formatted_start = formatDate(date_start);
//     const formatted_end = formatDate(date_end);
//     return [formatted_start, formatted_end];
//   }
// };

export default function DatePicker() {
  // const [games, setGames] = useState<Game[]>([]);
  const { setGames } = useContext(GlobalContext);
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  // const [startDate, setStartDate] = useState<ValuePiece>(new Date());
  // const [endDate, setEndDate] = useState<ValuePiece>(null);
  // console.log(dateValue?.map((date) => formatDate(date)));
  // const [startDate, setStartDate] =dateValue;

  const startDate = formatDate(value[0]);
  const endDate = formatDate(value[1]);

  useEffect(() => {
    // if (dateValue !== null) {
    // }
    getAllGames(startDate, endDate, setGames);
  }, [value]);
  // const handleChange = (value: Value) => {
  //   setDateValue(value);
  // };

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
