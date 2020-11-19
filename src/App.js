import React, { useState } from 'react';
import Main from './components/Main';
import Listing from './components/Listing';
import FormItem from './components/FormItem';

function App() {

  const [items, setItems] = useState(["Arroz", "Farinha", "Macarrão", "Vinagre", "Tomate", "Papel Toalha"]);
  const [name, setName] = useState("");
  const [nameR, setNameR] = useState("");

  function addItem() {
    console.log(items);
    items.filter((item) => {
      if (item !== name.trim() && name !== "") {
        setItems([...items, name]);
        setName("")
      } else if (item === name.trim()) {
        setItems([...items])
      }
    })
  }

  function removeItem() {
    setItems("")
    items.filter((item) => {
      if (item === name) {
        return "Ok"
      }
    })

  }

  function onChangeAdd(event) {
    setName(event.target.value);
  }

  function onChangeRemove(event) {
    setNameR(event.target.value);
  }



  return (
    <Main>
      <FormItem onChangeAdd={onChangeAdd} onChangeRemove={onChangeRemove} valueAdd={name} valueRemove={nameR} addItem={addItem} removeItem={removeItem} />
      <Listing items={items} />
    </Main>
  );
}

export default App;
