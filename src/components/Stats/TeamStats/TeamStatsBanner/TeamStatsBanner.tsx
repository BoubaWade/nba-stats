import "./teamStatsBanner.css";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import SecondaryButton from "../../../reusable-ui/SecondaryButton/SecondaryButton";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

export default function TeamStatsBanner() {
  const { setTeamStatsDisplayed } = useContext(GlobalContext);

  return (
    <div className="team-stats-banner">
      <LeftSide />
      <SecondaryButton
        label="Retour"
        className="return-button"
        onClick={() => setTeamStatsDisplayed(false)}
      />
      <RightSide />
    </div>
  );
}
