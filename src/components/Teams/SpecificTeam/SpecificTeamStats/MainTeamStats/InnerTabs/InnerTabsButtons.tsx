import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { ActiveButton } from "../../../../../../config/globalTypes";
import { getButtonsSelectStatsConfig } from "../../../../../../config/config";
import { handleActiveButtonClicked } from "../../../../../../helpers/games";

const initialActiveButtons = {
  isRosterActive: true,
  isScheduleActive: false,
  isStatsActive: false,
};

export default function InnerTabsButtons() {
  const { setInnerStatsTabsButtons } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState<ActiveButton>(initialActiveButtons);
  const buttonsConfig = getButtonsSelectStatsConfig(isActive);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    handleActiveButtonClicked(setIsActive, name);
  };

  useEffect(() => {
    setInnerStatsTabsButtons(isActive);
  }, [isActive]);

  return (
    <div className="inner-tabs-list">
      {buttonsConfig.map(({ key, label, active }) => (
        <button key={key} name={key} className={active} onClick={handleClick}>
          {label}
        </button>
      ))}
    </div>
  );
}
