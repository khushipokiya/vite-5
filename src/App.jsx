import React, { useState } from 'react';
import CrudForm from './componants/Form';
import Header from './componants/Header';
import Sidebar from './componants/Sidebar1';
import Footer from './componants/Footer';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAdd = (item) => {
    setItems([...items, item]);
  };

  const handleEdit = (item, index) => {
    const updatedItems = [...items];
    updatedItems[index] = item;
    setItems(updatedItems);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <CrudForm
            items={items}
            onAdd={handleAdd}
            onEdit={handleEdit}
            editingIndex={editingIndex}
            onDelete={handleDelete}
          />
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
