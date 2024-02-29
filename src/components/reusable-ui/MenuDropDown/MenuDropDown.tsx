import "./menuDropDown.css";
import { MenuSelect } from "react-menu-dropdown-list";

type MenuDropDownProps = {
  className: string;
  options: string[];
  onSelect: (option: string) => void;
};

export default function MenuDropDown({
  className,
  options,
  onSelect,
}: MenuDropDownProps) {
  return (
    <div className={className}>
      <MenuSelect
        options={options}
        onSelect={onSelect}
        classNameButton="menu-select"
        classNameItem="menu-select-items"
      />
    </div>
  );
}
