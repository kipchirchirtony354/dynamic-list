import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(['.First Item']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="app">
      <h1>Dynamic List Manager</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      
      <div class="home">
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;