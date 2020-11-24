import React, { useState } from "react";
import Main from "./components/Main";
import Listing from "./components/Listing";
import SearchResult from "./components/Listing/SearchResult";
import FormItem from "./components/FormItem";

function App() {
  const [items, setItems] = useState([
    "Arroz",
    "Farinha",
    "Macarrão",
    "Vinagre",
    "Tomate",
    "Papel Toalha",
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [removeItemName, setRemoveItemName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function addItem() {
    console.log(items);
    items.filter(
      (item) =>
        // let FormatedName = name.trim()
        item !== newItemName &&
        newItemName !== "" &&
        setItems([...items, newItemName.trim(), setNewItemName("")])
    );
  }

  function removeItem() {
    const itemsRest = items.filter((item) => item != removeItemName);
    setItems(itemsRest);

    setRemoveItemName("");

    // console.log(removeItemName);
    // console.log(items);
  }

  function searchItem() {
    const itemFound = items.find((item) => item === searchName);
    if (itemFound === undefined) {
      setSearchResult("");
    } else {
      setSearchResult(itemFound);
    }
  }

  function onChange(event) {
    setSearchName(event.target.value);
  }

  function onChangeAdd(event) {
    setNewItemName(event.target.value);
  }

  function onChangeRemove(event) {
    setRemoveItemName(event.target.value);
  }

  return (
    <Main>
      <FormItem
        onChangeAdd={onChangeAdd}
        onChangeRemove={onChangeRemove}
        valueAdd={newItemName}
        valueRemove={removeItemName}
        addItem={addItem}
        removeItem={removeItem}
      />

      <Listing
        onChange={onChange}
        onClick={searchItem}
        items={items}
        item={searchResult}
      />
    </Main>
  );
}

export default App;
