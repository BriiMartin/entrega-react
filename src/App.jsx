import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './container/ItemListContainer/itemListContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <><div>
      <NavBar />
    </div>
    <section>
    <ItemListContainer greeting="Hola Bienvenidos a Liluna Essen"/>
    </section>
    </>
  );
}

export default App;

