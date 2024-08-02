// src/AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create context
const AppContext = createContext();

// Context provider component
const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  
  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };
  

  const updateItem = (id, updatedItem) => {
    setItems(items.map(item => (item.id === id ? { ...updatedItem, id } : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const selectItem = (item) => {
    setCurrentItem(item);
  };

  const clearCurrentItem = () => {
    setCurrentItem(null);
  };

  return (
    <AppContext.Provider value={{ items, addItem, updateItem, deleteItem, currentItem, setCurrentItem, selectItem, clearCurrentItem }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext , AppContext};
