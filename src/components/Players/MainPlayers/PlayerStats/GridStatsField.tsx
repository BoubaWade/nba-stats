type GridStatsFieldProps = {
  label: string;
  stat: number;
};
export default function GridStatsField({ label, stat }: GridStatsFieldProps) {
  return (
    <div className="stat">
      {label}
      <br />
      <span>{stat}</span>
    </div>
  );
}
