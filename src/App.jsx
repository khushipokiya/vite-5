import React, { useState } from 'react';
import CrudForm from './componants/Form';
import Header from './componants/Header';
import Sidebar from './componants/Sidebar1';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';
import Footer from './componants/Footer';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<CrudForm
              items={items}
              onAdd={handleAdd}
              onEdit={handleEdit}
              editingIndex={editingIndex}
              onDelete={handleDelete}
            />} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/add" element={<AddPage />} />
            </Routes>
            
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
