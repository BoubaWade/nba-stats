import "./sideBar.css";
import logo from "../../../images/nba_logo.svg";
import SideBarListItems from "./SideBarListItems";
import { useContext } from "react";
import { PlayersContext } from "../../../contexts/playersContext";

export default function SideBar() {
  const { setIsHomeDisplayed } = useContext(PlayersContext);

  const handleReturnHomePage = () => {
    setIsHomeDisplayed(true);
  };

  return (
    <div className="sidebar">
      <img src={logo} className="logo" onClick={handleReturnHomePage} />
      <SideBarListItems />
    </div>
  );
}
