import { useNavigate } from "react-router-dom";
import "./switchButton.css";
import { useState } from "react";
type SwitchButtonProps = {
  onTranslateX: (value: boolean) => void;
};

export default function SwitchButton({ onTranslateX }: SwitchButtonProps) {
  const [isActived, setIsActived] = useState(false);
  const navigate = useNavigate();
  const handleClickOnSwitchButton = () => {
    setIsActived(true);
    onTranslateX(true);
    setTimeout(() => {
      navigate("/players");
    }, 1000);
  };

  return (
    <div
      className="button-container"
      onClick={() => handleClickOnSwitchButton()}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={isActived}
        onChange={() => {}}
      />
      <div
        className={isActived ? "slide-button actived" : "slide-button"}
      ></div>
    </div>
  );
}
