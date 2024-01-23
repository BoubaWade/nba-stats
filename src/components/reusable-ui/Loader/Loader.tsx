import "./loader.css";
type LoaderType = {
  className?: string;
};
export default function Loader({ className }: LoaderType) {
  return <div id="loader" className={className}></div>;
}
