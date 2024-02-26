type HamburgerProps = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hamburger({ toggleNav, setToggleNav }: HamburgerProps) {
  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <button
      type="button"
      className={`hamburger ${toggleNav ? "actived" : ""}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
