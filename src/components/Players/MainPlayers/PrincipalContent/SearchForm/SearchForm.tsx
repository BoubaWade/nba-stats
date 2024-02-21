import "./searchForm.css";
import { useContext, useEffect, useRef } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";

export default function SearchForm() {
  const { setInputSearch } = useContext(PlayersContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSearch(inputRef.current?.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="search-form-container">
      <img
        src="../../../../../../public/NikolaJOKIC.avif"
        style={{ width: "100px" }}
      />
      <img
        src="../../../../../../public/KevinDURANT.avif"
        style={{ width: "100px" }}
      />
      <img
        src="../../../../../../public/LebronJAMES.avif"
        style={{ width: "100px" }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-search"
          placeholder="Rechercher un joueur"
          ref={inputRef}
        />
        <PrimaryButton className="input-submit" label="Valider" />
      </form>
      <img
        src="../../../../../../public/StephenCURRY.avif"
        style={{ width: "100px" }}
      />
      <img
        src="../../../../../../public/JoelEMBIID.avif"
        style={{ width: "100px" }}
      />
      <img
        src="../../../../../../public/ANTETOKOUNMPO.avif"
        style={{ width: "100px" }}
      />
    </div>
  );
}
