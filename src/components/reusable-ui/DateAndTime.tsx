import { getDateWithHour } from "../../helpers/games";

type DateAndTimeProps = {
  status: string;
};

export default function DateAndTime({ status }: DateAndTimeProps) {
  const statusFormat = getDateWithHour(status);
  const day = statusFormat?.split(",")[0]?.toUpperCase();
  const hour = statusFormat?.split(",")[1]?.replace(":", "h : ");

  return (
    <div className="date-and-time">
      <p className="date">{day}</p>
      <p className="time">{hour}</p>
    </div>
  );
}
