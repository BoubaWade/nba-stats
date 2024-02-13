import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const { setShowSpecificTeam } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowSpecificTeam(true);
    navigate("/teams");
  };

  return (
    <button className="return-button" onClick={handleClick}>
      Retour
    </button>
  );
}
