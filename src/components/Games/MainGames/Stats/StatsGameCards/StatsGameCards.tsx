import { useContext } from "react";
import SecondaryButton from "../../../../reusable-ui/SecondaryButton/SecondaryButton";
import StatsCardsList from "./StatsCardsList";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";
import { handleActiveButtonClicked } from "../../../../../helpers/games";

export default function StatsGameCards() {
  const { setShowSpecificTeam, setIsActiveNavButton } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const handleReturnToTeamGames = () => {
    setShowSpecificTeam(true);
    navigate("/teams");
    handleActiveButtonClicked(setIsActiveNavButton, "isTeamsNavButton");
  };

  return (
    <>
      <SecondaryButton
        className="return-button"
        label="Retour"
        onClick={handleReturnToTeamGames}
      />
      <StatsCardsList />
    </>
  );
}
