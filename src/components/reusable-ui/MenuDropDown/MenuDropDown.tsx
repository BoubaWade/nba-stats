import "./menuDropDown.css";
import { MenuSelect } from "react-menu-dropdown-list";

type MenuDropDownProps = {
  className: string;
  label: string;
  showLabel: boolean;
  options: string[];
  onSelect: (option: string) => void;
};

export default function MenuDropDown({
  className,
  label,
  showLabel,
  options,
  onSelect,
}: MenuDropDownProps) {
  return (
    <div className={className}>
      {showLabel && (
        <div className="label-container">
          <label>{label}</label>
          {/* <IoIosArrowDown className="arrow" /> */}
        </div>
      )}
      <MenuSelect
        options={options}
        onSelect={onSelect}
        classNameButton="menu-select"
        classNameItem="menu-select-items"
      />
    </div>
  );
}
