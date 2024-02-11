import { useEffect, useState } from "react";
import { getDateWithHour } from "../helpers/games";
import { PERIOD_BEFORE_GAME, PERIOD_CURRENT_GAME } from "../config/constants";

export default function useDateAndTime(period: number, status: string) {
  const [inProgress, setInProgress] = useState(false);

  const statusFormat = getDateWithHour(status);
  const day = statusFormat?.split(",")[0]?.toUpperCase();
  const hour = statusFormat?.split(",")[1]?.replace(":", "h : ");

  useEffect(() => {
    if (period === PERIOD_BEFORE_GAME) setInProgress(false);
    if (PERIOD_CURRENT_GAME.includes(period)) {
      setInProgress(true);
    }
  }, []);

  return { inProgress, hour, day };
}
