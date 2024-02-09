import "./sideBar.css";
import logo from "../../../images/nba_logo.svg";
import SideBarListItems from "./SideBarListItems";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img src={logo} className="logo" />
      <SideBarListItems />
    </div>
  );
}
