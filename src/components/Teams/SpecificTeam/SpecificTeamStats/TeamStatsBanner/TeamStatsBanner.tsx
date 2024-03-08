import "./teamStatsBanner.css";
import { useContext } from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { GlobalContext } from "../../../../../contexts/globalContext";
import SecondaryButton from "../../../../reusable-ui/SecondaryButton/SecondaryButton";

export default function TeamStatsBanner() {
  const {
    setShowSpecificTeam,
    setShowSpecificTeamStats,
    setShowSpecificTeamGames,
  } = useContext(GlobalContext);

  return (
    <div className="team-stats-banner">
      <LeftSide />
      <SecondaryButton
        label="Retour"
        className="return-button"
        onClick={() => {
          setShowSpecificTeam(false);
          setShowSpecificTeamStats(false);
          setShowSpecificTeamGames(false);
        }}
      />
      <RightSide />
    </div>
  );
}
