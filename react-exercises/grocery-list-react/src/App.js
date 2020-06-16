import React from 'react';

import './App.css';
import GroceryList from './components/GroceryList';
import GroceryAddAndRemove from './components/GroceryAddAndRemove';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Online Grocery Shop</h1>
      </header>

      <main>
        <GroceryAddAndRemove />
        <GroceryList />  
      </main>
    </div>
  );
}

export default App;
