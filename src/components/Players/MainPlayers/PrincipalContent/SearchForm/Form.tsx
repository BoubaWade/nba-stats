import { useContext, useEffect, useRef } from "react";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import { PlayersContext } from "../../../../../contexts/playersContext";

export default function Form() {
  const { setInputSearch } = useContext(PlayersContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = inputRef.current?.value.trim();
    setInputSearch(searchValue);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-search"
        placeholder="Rechercher un joueur"
        ref={inputRef}
      />
      <PrimaryButton className="input-submit" label="Valider" />
    </form>
  );
}
