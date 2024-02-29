import { useState } from "react";
import Header from "./Header/Header";
import ListGameCard from "./ListGameCard/ListGameCard";

export default function MainSpecificTeam() {
  const [displayCard, setDisplayCards] = useState(true);
  return (
    <div className="main-specificTeam">
      <Header setDisplayCards={setDisplayCards} />
      {displayCard && <ListGameCard />}
    </div>
  );
}
