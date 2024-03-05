import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function LogoImage() {
  const { teamFullName, teams } = useContext(GlobalContext);
  const team = teams.find((team) => team.full_name === teamFullName);

  return (
    <>
      <img
        src={`public/images/teamsLogos/${team?.name}.svg`}
        className="logo"
      />
    </>
  );
}
