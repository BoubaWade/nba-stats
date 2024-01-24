import "./navBar.css";
import { FaUser } from "react-icons/fa";
import { NavBarProps } from "../../Players/playersTypes";

export default function NavBar({
  userName,
  placeholder,
  value,
  onChange,
}: NavBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as string);
  };

  return (
    <div className="navBar-container">
      <input
        className="input-search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div className="navBar-right-side">
        <p className="user-name">{userName}</p>
        <FaUser className="user-icon" />
      </div>
    </div>
  );
}
