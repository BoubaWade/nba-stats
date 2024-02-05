import "./cursor.css";
type CursorProps = {
  className: string;
};
export default function Cursor({ className }: CursorProps) {
  return <div id="cursor" className={className}></div>;
}
