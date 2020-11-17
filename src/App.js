import React from 'react';
import FormAddItem from './components/FormAddItem';
import Title from './components/Title';
import Main from './components/Main';

function App() {
  return (
    <Main>
      <Title> Your Shopping List </Title>

      <FormAddItem />
    </Main>
  );
}

export default App;
