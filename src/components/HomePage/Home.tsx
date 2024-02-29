import "./home.css";
import { useState } from "react";
import SwitchButton from "../reusable-ui/SwitchButton/SwitchButton";
import Meteors from "./Meteors/Meteors";
import lebron from "/images/starsImages/LebronJAMES.avif";
import curry from "/images/starsImages/StephenCURRY.avif";

export default function Home() {
  const [isSwitchButtonActived, setIsSwitchButtonActived] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [hasDisappeared, setHasDisappeared] = useState(false);

  const onTranslateX = (value: boolean) => {
    setIsSwitchButtonActived(value);
    setTimeout(() => {
      setIsDisplayed(false);
    }, 1000);
    setTimeout(() => {
      setHasDisappeared(true);
    }, 200);
  };

  return (
    <div
      className={
        !isDisplayed ? "home-container switch-behind" : "home-container"
      }
    >
      <Meteors />
      <img src={lebron} className="player-star" />
      <img src={curry} className="player-star" />
      <div className="background-home">
        <div
          className={
            isSwitchButtonActived ? "left-side left-translate" : "left-side"
          }
        ></div>
        <div
          className={
            isSwitchButtonActived ? "right-side right-translate" : "right-side"
          }
        ></div>
      </div>
      <div className={hasDisappeared ? "disappears" : ""}>
        <h1>
          NBA <br />
          STATISTIQUES
        </h1>
        <SwitchButton onTranslateX={onTranslateX} />
      </div>
    </div>
  );
}
