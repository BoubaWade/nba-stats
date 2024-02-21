import { useContext, useRef } from "react";
import "./navBar.css";
import { PlayersContext } from "../../../contexts/playersContext";

export default function NavBar() {
  const { setInputSearch } = useContext(PlayersContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSearch(inputRef.current?.value);
  };

  return (
    <div className="navBar-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-search"
          type="text"
          placeholder="Rechercher un joueur"
          ref={inputRef}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}
