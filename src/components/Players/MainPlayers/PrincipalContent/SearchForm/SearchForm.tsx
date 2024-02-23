import "./searchForm.css";
import Images from "./Images";
import Form from "./Form";
import {
  imagesFieldsLeft,
  imagesFieldsRight,
} from "../../../../../config/constants";

export default function SearchForm() {
  return (
    <div className="search-form-container">
      <Images imagesFields={imagesFieldsLeft} />
      <Form />
      <Images imagesFields={imagesFieldsRight} />
    </div>
  );
}
