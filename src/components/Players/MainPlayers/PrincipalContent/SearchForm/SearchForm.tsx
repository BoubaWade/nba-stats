import "./searchForm.css";
import Form from "./Form";

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
      <div className="stars-left">
        {players1.map(({ name }) => (
          <img
            key={name}
            src={`/images/starsImages/${name}.avif`}
            className="star-logo"
          />
        ))}
      </div>
      <Form />
      <div className="stars-right">
        {players2.map(({ name }) => (
          <img
            key={name}
            src={`/images/starsImages/${name}.avif`}
            className="star-logo"
          />
        ))}
      </div>
    </div>
  );
}
