import "./style.css";
import List from "./List";
import SearchItem from "./SearchItem";
import Title from "../Title";

function Listing({ onChange, items = [], item, onClick }) {
  console.log("TEST::::", item);
  return (
    <div className="listing">
      <Title type="title" value="Listing" />
      <List items={items} />
      <SearchItem onChange={onChange} item={item} onClick={onClick} />
    </div>
  );
}

export default Listing;
