import { useState } from "react";
import SwitchButton from "../reusable-ui/SwitchButton/SwitchButton";
import "./home.css";
export default function Home() {
  const [isSwitchButtonActived, setIsSwitchButtonActived] = useState(false);

  const onTranslateX = (value: boolean) => {
    setIsSwitchButtonActived(value);
  };
  return (
    <div className="home-container">
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
        <img src="../../../public/images/suns.svg" style={{ width: "90px" }} />
        <img src="../../../public/images/bucks.svg" style={{ width: "90px" }} />
        <img
          src="../../../public/images/clippers.svg"
          style={{ width: "90px" }}
        />
        <img src="../../../public/images/jazz.svg" style={{ width: "90px" }} />
        <img
          src="../../../public/images/knicks.svg"
          style={{ width: "90px" }}
        />
        <img
          src="../../../public/images/warriors.svg"
          style={{ width: "90px" }}
        />
        <img
          src="../../../public/images/thunder.svg"
          style={{ width: "90px" }}
        />
      </div>
      <h1>
        NBA <br />
        STATISTIQUES
      </h1>
      <SwitchButton onTranslateX={onTranslateX} />
    </div>
  );
}
