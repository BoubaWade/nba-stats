import { useContext, useEffect, useState } from "react";
import { ActiveButton } from "../../../../config/globalTypes";
import { getButtonsSelectStatsConfig } from "../../../../config/config";
import { handleActiveButtonClicked } from "../../../../helpers/games";
import { GlobalContext } from "../../../../contexts/globalContext";

const initialActiveButtons = {
  isRosterActive: true,
  isScheduleActive: false,
  isStatsActive: false,
};

export default function InnerNavButtons() {
  const { setInnerStatsNavButtons } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState<ActiveButton>(initialActiveButtons);
  const buttonsConfig = getButtonsSelectStatsConfig(isActive);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    handleActiveButtonClicked(setIsActive, name);
  };

  useEffect(() => {
    setInnerStatsNavButtons(isActive);
  }, [isActive]);

  return (
    <div className="inner-nav-list">
      {buttonsConfig.map(({ key, label, active }) => (
        <button key={key} name={key} className={active} onClick={handleClick}>
          {label}
        </button>
      ))}
    </div>
  );
}
