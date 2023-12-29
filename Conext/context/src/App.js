import { useContext } from 'react';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';
function App() {

  return (
    <div className="App">
      <h1>Context Api Store</h1>
      <Item name="MacBook Pro" price={10000} />
      <Item name="Apple 14pro" price={1000} />
      <Item name="Bose Speakers" price={4000} />
      <Cart/>
    </div>
  );
}

export default App;
