import "./searchForm.css";
import Form from "./Form";
import PlayersStars from "./PlayersStars";
import { starsPlayers1, starsPlayers2 } from "../../../../../config/config";

export default function SearchForm() {
  return (
    <div className="search-form-container">
      <PlayersStars className="stars-left" stars={starsPlayers1} />
      <Form />
      <PlayersStars className="stars-right" stars={starsPlayers2} />
    </div>
  );
}
