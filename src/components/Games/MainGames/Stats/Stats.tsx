import { useNavigate } from "react-router-dom";
import StatsCardsList from "./StatsCardsList";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import SecondaryButton from "../../../reusable-ui/SecondaryButton/SecondaryButton";

export default function Stats() {
  const { setShowSpecificTeam } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowSpecificTeam(true);
    navigate("/teams");
  };

  return (
    <>
      <SecondaryButton
        className="return-button"
        label="Retour"
        onClick={handleClick}
      />
      <StatsCardsList />
    </>
  );
}
