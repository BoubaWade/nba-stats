import "./sideBar.css";
import logo from "../../../images/nba_logo.svg";
import SideBarListItems from "./SideBarListItems";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const handleReturnHomePage = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <img src={logo} className="logo" onClick={handleReturnHomePage} />
      <SideBarListItems />
    </div>
  );
}
