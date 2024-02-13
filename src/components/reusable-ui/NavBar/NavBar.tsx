import "./navBar.css";

type NavBarProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
export default function NavBar({ placeholder, value, onChange }: NavBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as string);
  };

  return (
    <div className="navBar-container">
      <input
        className="input-search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
