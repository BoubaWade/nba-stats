import MenuDropDown from "../../../../../reusable-ui/MenuDropDown/MenuDropDown";
import {
  graphs,
  seasons,
  statOptions,
} from "../../../../../../config/constants";

type MenusSelectProps = {
  showLabelSeason: boolean;
  showLabelStat: boolean;
  showLabelGraph: boolean;
  isDisabledStatNameButton: boolean;
  isDisabledGraphTypeButton: boolean;
  handleSelectASeason: (option: string) => void;
  handleSelectStatName: (option: string) => void;
  handleSelectAGraph: (option: string) => void;
};

export default function MenusSelect({
  showLabelSeason,
  showLabelStat,
  showLabelGraph,
  isDisabledStatNameButton,
  isDisabledGraphTypeButton,
  handleSelectASeason,
  handleSelectStatName,
  handleSelectAGraph,
}: MenusSelectProps) {
  return (
    <div className="menu-select-container">
      <MenuDropDown
        className="season"
        label="Saison"
        showLabel={showLabelSeason}
        options={seasons}
        onSelect={handleSelectASeason}
      />
      <MenuDropDown
        className={isDisabledStatNameButton ? "disabled stats" : "stats"}
        label="Statistiques"
        showLabel={showLabelStat}
        options={statOptions}
        onSelect={handleSelectStatName}
      />
      <MenuDropDown
        className={isDisabledGraphTypeButton ? "disabled graphs" : "graphs"}
        label="Type de graphe"
        showLabel={showLabelGraph}
        options={graphs}
        onSelect={handleSelectAGraph}
      />
    </div>
  );
}
