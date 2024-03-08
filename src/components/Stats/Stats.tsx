import "./stats.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import NavigationMobile from "../reusable-ui/NavigationMobile.tsx/NavigationMobile";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { getAllTeams } from "../../service/apiCall";

export default function Stats() {
  const { setTeams } = useContext(GlobalContext);

  useEffect(() => {
    getAllTeams(setTeams);
  }, []);

  return (
    <div className="stats-container">
      <NavigationMobile />
      <Navigation />
    </div>
  );
}
