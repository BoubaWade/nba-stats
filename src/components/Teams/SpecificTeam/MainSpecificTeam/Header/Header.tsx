import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Value } from "../../../teamsTypes";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";

export default function Header() {
  const {
    dateRangeForSpecificTeamGames,
    setDateRangeForSpecificTeamGames,
    teamFullName,
    setShowSpecificTeam,
  } = useContext(GlobalContext);
  const [value, onChange] = useState<Value>(dateRangeForSpecificTeamGames);

  useEffect(() => {
    if (value !== null) setDateRangeForSpecificTeamGames(value);
  }, [value]);

  const handleClick = () => {
    setShowSpecificTeam(false);
  };

  return (
    <div className="header">
      <PrimaryButton
        id="return-main-teams"
        label="Retour"
        onClick={handleClick}
      />
      <span className="label-date-range">Choisir une période</span>
      <DateRangePicker
        className="date-range-picker"
        calendarClassName="calendar-date-picker"
        rangeDivider="-"
        onChange={onChange}
        value={value}
      />
      <h3 className="team-name">{teamFullName?.toUpperCase()}</h3>
    </div>
  );
}
