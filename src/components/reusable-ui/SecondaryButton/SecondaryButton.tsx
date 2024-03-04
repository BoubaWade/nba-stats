import "./secondaryButton.css";
type SecondaryButtonProps = {
  className?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SecondaryButton({
  className,
  label,
  onClick,
}: SecondaryButtonProps) {
  return (
    <button id="secondary-button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}
