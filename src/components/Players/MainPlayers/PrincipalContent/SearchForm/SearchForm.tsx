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
      {players1.map(({ name }) => (
        <img
          key={name}
          src={`/public/${name}.avif`}
          style={{ width: "100px" }}
        />
      ))}
      <Form />
      {players2.map(({ name }) => (
        <img
          key={name}
          src={`/public/${name}.avif`}
          style={{ width: "100px" }}
        />
      ))}
    </div>
  );
}
