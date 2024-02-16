import MainSpecificTeam from "./MainSpecificTeam/MainSpecificTeam";
import LogoBackground from "./LogoBackground";
import PrimaryButton from "../../reusable-ui/PrimaryButton/PrimaryButton";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

export default function SpecificTeam() {
  const { setShowSpecificTeam } = useContext(GlobalContext);

  const handleClick = () => {
    setShowSpecificTeam(false);
  };

  return (
    <div className="specificTeam-container">
      <PrimaryButton label="Retour" onClick={handleClick} />
      <LogoBackground />
      <MainSpecificTeam />
    </div>
  );
}
