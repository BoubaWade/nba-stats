import { useContext } from "react";
import { TeamsContext } from "../../../../../contexts/teamsContext";
import { MenuSelect } from "react-menu-dropdown-list";
import { seasons } from "../../../../../config/constants";

export default function Header() {
  const { yearOfTheGames, setYearOfTheGames, teamFullName } =
    useContext(TeamsContext);
  const handleSelectSeason = (option: string) => {
    const year = option.split("-", 3)[0];
    setYearOfTheGames(year);
  };
  const gamesSeasons = seasons.slice(1, 11);
  return (
    <div className="header">
      <MenuSelect
        options={gamesSeasons}
        onSelect={(option) => handleSelectSeason(option)}
        classNameList="list-menu-select"
      />
      <h2>
        Les dernièrs matchs des {teamFullName} en {yearOfTheGames}-
        {parseInt(yearOfTheGames) + 1}
      </h2>
    </div>
  );
}
