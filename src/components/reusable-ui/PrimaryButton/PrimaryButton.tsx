import "./primaryButton.css";

type PrimaryButtonProps = {
  id?: string;
  className?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
};

export default function PrimaryButton({
  id,
  className,
  label,
  onClick,
  name,
}: PrimaryButtonProps) {
  return (
    <button id={id} className={className} name={name} onClick={onClick}>
      {label}
    </button>
  );
}
