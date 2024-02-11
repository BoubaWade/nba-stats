import useDateAndTime from "../../../../../hooks/useDateAndTime";
import GameStatus from "./GameStatus";

type DateAndTimeProps = {
  period: number;
  status: string;
};

export default function DateAndTime({ period, status }: DateAndTimeProps) {
  const { inProgress, hour, day } = useDateAndTime(period, status);

  if (inProgress) return <GameStatus status={status} />;

  return (
    <div className="date-and-time">
      <p className="date">{day}</p>
      <p className="time">{hour}</p>
    </div>
  );
}
