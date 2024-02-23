import MenuDropDown from "../../../../../reusable-ui/MenuDropDown/MenuDropDown";
import { graphs, statOptions } from "../../../../../../config/constants";

type MenusSelectProps = {
  showLabelStat: boolean;
  showLabelGraph: boolean;
  handleSelectStatName: (option: string) => void;
  handleSelectAGraph: (option: string) => void;
};

export default function MenusSelect({
  showLabelStat,
  showLabelGraph,
  handleSelectStatName,
  handleSelectAGraph,
}: MenusSelectProps) {
  return (
    <div className="menu-select-container">
      <MenuDropDown
        className="stats"
        label="Statistiques"
        showLabel={showLabelStat}
        options={statOptions}
        onSelect={handleSelectStatName}
      />
      <MenuDropDown
        className="graphs"
        label="Type de graphe"
        showLabel={showLabelGraph}
        options={graphs}
        onSelect={handleSelectAGraph}
      />
    </div>
  );
}
