import "./overlay.css";
type OverlayProps = {
  className?: string;
};
export default function Overlay({ className }: OverlayProps) {
  return <div id="overlay" className={className}></div>;
}
