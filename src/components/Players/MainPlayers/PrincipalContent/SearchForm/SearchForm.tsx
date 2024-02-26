import "./searchForm.css";
import Form from "./Form";
import PlayersStars from "./PlayersStars";

const players1 = [
  { name: "NikolaJOKIC" },
  { name: "KevinDURANT" },
  { name: "LebronJAMES" },
];
const players2 = [
  { name: "StephenCURRY" },
  { name: "JoelEMBIID" },
  { name: "ANTETOKOUNMPO" },
];

export default function SearchForm() {
  return (
    <div className="search-form-container">
      <PlayersStars className="stars-left" stars={players1} />
      <Form />
      <PlayersStars className="stars-right" stars={players2} />
    </div>
  );
}
