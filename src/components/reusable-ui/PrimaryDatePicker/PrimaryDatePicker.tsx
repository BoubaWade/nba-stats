import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./primaryDatePicker.css";
import { Value } from "../../Teams/teamsTypes";
type Range<T> = [T, T];
type LooseValuePiece = string | Date | null;
type LooseValue = LooseValuePiece | Range<LooseValuePiece>;

type PrimaryDatePickerProps = {
  onChange: ((value: Value) => void) | undefined;
  value?: LooseValue;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
};
export default function PrimaryDatePicker({
  onChange,
  value,
  onCalendarOpen,
  onCalendarClose,
}: PrimaryDatePickerProps) {
  return (
    <>
      <DateRangePicker
        className="date-range-picker"
        calendarClassName="calendar-date-picker"
        onChange={onChange}
        value={value}
        onCalendarOpen={onCalendarOpen}
        onCalendarClose={onCalendarClose}
      />
    </>
  );
}
