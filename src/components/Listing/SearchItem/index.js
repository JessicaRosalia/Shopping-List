import { Button } from "../../Button";
import { LabelField } from "../../FormItem/LabelField";
import { TextField } from "../../TextField";
import SearchResult from "../SearchResult";
import "./style.css";

function SearchItem({ value, onChange, onClick, item }) {
  console.log();
  return (
    <>
      <LabelField value="Search Item:" />
      <TextField placeholder="Tomato" onChange={onChange} />
      <Button value="Search" onClick={onClick} />
      <span>{item}</span>
    </>
  );
}

export default SearchItem;
