import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../reusable-ui/PrimaryButton/PrimaryButton";
import StatsCardsList from "./StatsCardsList";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";

export default function Stats() {
  const { setShowSpecificTeam } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowSpecificTeam(true);
    navigate("/teams");
  };

  return (
    <>
      <PrimaryButton
        className="return-button"
        label="Retour"
        onClick={handleClick}
      />
      <StatsCardsList />
    </>
  );
}
