import { useContext } from "react";
import { TeamsContext } from "../../../../../contexts/teamsContext";
import { MenuSelect } from "react-menu-dropdown-list";
import { seasons } from "../../../../../config/constants";

export default function Header() {
  const { setYearOfTheGames, teamFullName } = useContext(TeamsContext);
  const gamesSeasons = seasons.slice(1, 11);

  const handleSelectSeason = (option: string) => {
    const year = option.split("-", 3)[0];
    setYearOfTheGames(year);
  };

  return (
    <div className="header">
      <span className="label-menu-select">Saison</span>
      <MenuSelect
        options={gamesSeasons}
        onSelect={(option) => handleSelectSeason(option)}
        classNameList="list-menu-select"
      />
      <h3 className="team-name">{teamFullName.toUpperCase()}</h3>
    </div>
  );
}
