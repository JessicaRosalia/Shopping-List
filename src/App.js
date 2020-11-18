import React, { useState } from 'react';
import Main from './components/Main';
import Listing from './components/Listing';
import FormItem from './components/FormItem';
import List from './components/Listing/List'

function App() {

  /*const [items, setItems] = useState(["Arroz", "Farinha", "Macarrão", "Vinagre", "Tomate", "Papel Toalha"]);
  const [name, setName] = useState("");


  function addItem() {
    console.log(items);
    setItems([...items, name]);
    setName("");
  }

  function removeItem() {
    console.log("removido");
  }

  function onChange(event) {
    setName(event.target.value);
  }
*/

  return (
    <Main>
      <FormItem onChange={onChange} value={name} onClick={addItem} />
      <Listing items={items} />
      <List items={items} />
    </Main>
  );
}

export default App;
