import React from 'react';
import { FormAddItem, LabelField, SearchField, TitleForm, ButtonAdd } from './components/FormAddItem';
import Main from './components/Main';

function App() {
  return (
    <Main>
      <FormAddItem >
        <TitleForm> Your Shopping List </TitleForm>
        <LabelField> Add new Item:</LabelField>
        <SearchField />
        <ButtonAdd>Adicionar</ButtonAdd>
      </FormAddItem>
    </Main>
  );
}

export default App;
