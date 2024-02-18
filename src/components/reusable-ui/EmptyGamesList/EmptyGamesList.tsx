import "./emptyGamesList.css";
type EmptyGamesListProps = {
  label?: string;
  className?: string;
};
export default function EmptyGamesList({
  label,
  className,
}: EmptyGamesListProps) {
  return (
    <div className={className}>
      <p className="text-label">Pas de matchs {label}</p>
      <span className="instruction">Choisir une autre date peut-être</span>
    </div>
  );
}
