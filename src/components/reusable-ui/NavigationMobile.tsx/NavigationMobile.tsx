import "./navigationMobile.css";
import { useNavigate } from "react-router-dom";
import NavigationListItems from "../Navigation/NavigationListItems";
import logo from "../../../../public/images/nba_logo.svg";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function NavigationMobile() {
  const [toggleNav, setToggleNav] = useState(false);
  const navigate = useNavigate();

  const handleReturnHomePage = () => {
    navigate("/");
  };

  return (
    <nav className="navigation-mobile">
      <Hamburger toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <img src={logo} className="logo" onClick={handleReturnHomePage} />
      <NavigationListItems toggleNav={toggleNav} />
    </nav>
  );
}
