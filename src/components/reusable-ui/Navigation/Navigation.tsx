import "./navigation.css";
import logo from "/images/nba_logo.svg";
import NavigationListItems from "./NavigationListItems";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const handleReturnHomePage = () => {
    navigate("/");
  };

  return (
    <nav className="navigation">
      <img src={logo} className="logo" onClick={handleReturnHomePage} />
      <NavigationListItems />
    </nav>
  );
}
