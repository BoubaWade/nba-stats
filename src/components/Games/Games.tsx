import "./games.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainGames from "./MainGames/MainGames";
import NavigationMobile from "../reusable-ui/NavigationMobile.tsx/NavigationMobile";

export default function Games() {
  return (
    <div className="games-container">
      <NavigationMobile />
      <Navigation />
      <MainGames />
    </div>
  );
}
