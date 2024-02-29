import MenuDropDown from "../../../../../reusable-ui/MenuDropDown/MenuDropDown";
import { graphs, statOptions } from "../../../../../../config/constants";

type MenusSelectProps = {
  handleSelectStatName: (option: string) => void;
  handleSelectAGraph: (option: string) => void;
};

export default function MenusSelect({
  handleSelectStatName,
  handleSelectAGraph,
}: MenusSelectProps) {
  return (
    <div className="menu-select-container">
      <MenuDropDown
        className="stats"
        options={statOptions}
        onSelect={handleSelectStatName}
      />
      <MenuDropDown
        className="graphs"
        options={graphs}
        onSelect={handleSelectAGraph}
      />
    </div>
  );
}
