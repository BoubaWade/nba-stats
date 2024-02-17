import "./emptyGamesList.css";
type EmptyGamesListProps = {
  label: string;
};
export default function EmptyGamesList({ label }: EmptyGamesListProps) {
  return (
    <>
      <p className="text-label">Pas de matchs {label}</p>
      <span className="instruction">Choisir une autre date peut-être</span>
    </>
  );
}
