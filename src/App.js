import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Navbar/childrens/Filter'
import CartWidget from './components/Navbar/childrens/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const greeting = "Sneaker House"
  return (
    <>
      <Navbar >
        <Filter />
        <CartWidget />
      </Navbar>
      <ItemListContainer greeting={greeting} />
    </>
  );
}

export default App;
