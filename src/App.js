import React, { useState } from 'react';
import Main from './components/Main';
import Listing from './components/Listing';
import FormItem from './components/FormItem';

function App() {

  const [items, setItems] = useState(["Arroz", "Farinha", "Macarrão", "Vinagre", "Tomate", "Papel Toalha"]);
  const [name, setName] = useState("");
  const [nameR, setNameR] = useState("");
  const [nameS, setNameS] = useState("");

  function addItem() {
    console.log(items);
    items.filter((item) => (
      // let FormatedName = name.trim()
      (item !== name && name !== "") && (setItems([...items, name.trim()]),setName("")
      ))
    )
  }

  function removeItem() {
    var aux;
    const ArrayAux = items
    ArrayAux.map(item => {
      if (item === nameR) {
        aux = item
        console.log("removido:" + aux)
        // return aux
        ArrayAux.splice(ArrayAux.indexOf(aux), 1)
        setNameR([...ArrayAux])
        setNameR("")
      }
      return;
    })

    console.log(nameR)
    console.log(items)

  }

  function searchItem() {
    items.filter(item => {
      if (item === nameS) {
        console.log("achado o item " + item)
        setNameS("")
      }
      return;
    })
  }

  function onChange(event) {
    setNameS(event.target.value);
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
      <Listing onChange={onChange} searchItem={searchItem} items={items} />

    </Main>
  );
}

export default App;
