import "./stats.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import NavigationMobile from "../reusable-ui/NavigationMobile.tsx/NavigationMobile";
import MainStats from "./MainStats/MainStats";

export default function Stats() {
  return (
    <div className="stats-container">
      <NavigationMobile />
      <Navigation />
      <MainStats />
    </div>
  );
}
