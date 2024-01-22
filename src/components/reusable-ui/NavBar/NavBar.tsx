import "./navBar.css";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
type NavBarProps = {
  userName?: string;
  placeholder: string;
};
export default function NavBar({ userName, placeholder }: NavBarProps) {
  return (
    <div className="navBar-container">
      <form className="search-form">
        <input className="input-search" type="text" placeholder={placeholder} />
        <FaSearch className="icon" />
      </form>
      <div className="navBar-right-side">
        <p className="user-name">{userName}</p>
        <FaUser className="user-icon" />
      </div>
    </div>
  );
}
