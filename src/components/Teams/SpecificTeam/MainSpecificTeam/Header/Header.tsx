import { useContext, useEffect, useState } from "react";
import { oneWeekAfter, oneWeekBefore } from "../../../../../config/constants";
import { GlobalContext } from "../../../../../contexts/globalContext";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Value } from "../../../teamsTypes";

export default function Header() {
  const { setDateRangeForSpecificTeamGames, teamFullName } =
    useContext(GlobalContext);
  const [value, onChange] = useState<Value>([oneWeekBefore, oneWeekAfter]);

  useEffect(() => {
    if (value !== null) {
      setDateRangeForSpecificTeamGames(value);
      localStorage.setItem("rangeDateVAlue", JSON.stringify(value));
    }
  }, [value]);

  return (
    <div className="header">
      <span className="label-date-range">Choisir une période</span>
      <DateRangePicker
        className="date-range-picker"
        calendarClassName="calendar-date-picker"
        rangeDivider="à"
        onChange={onChange}
        value={value}
      />
      <h3 className="team-name">{teamFullName?.toUpperCase()}</h3>
    </div>
  );
}
