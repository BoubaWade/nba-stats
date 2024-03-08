import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { Value } from "../../../teamsTypes";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import PrimaryDatePicker from "../../../../reusable-ui/PrimaryDatePicker/PrimaryDatePicker";

type HeaderProps = {
  setDisplayCards: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setDisplayCards }: HeaderProps) {
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
      <PrimaryDatePicker
        onChange={onChange}
        value={value}
        onCalendarOpen={() => setDisplayCards(false)}
        onCalendarClose={() => setDisplayCards(true)}
      />
      <h3 className="team-name">{teamFullName?.toUpperCase()}</h3>
    </div>
  );
}
