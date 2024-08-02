// src/App.jsx
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Appcontext';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';


import Sidebar from './componants/Sidebar1';
import Form from './componants/Form';
import Header1 from './componants/Header';
import Footer from './componants/Footer';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         
          <div className="flex-1 flex flex-col">
          <Header1 toggleSidebar={toggleSidebar} />
              <main className="flex-1 p-6 bg-gray-100">
                <Routes>
                  <Route path="/" element={<Form />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route path="/view" element={<ViewPage />} />
                 
                </Routes>
              </main>
          <Footer />
            </div>
       <div/>
          </div>
      </Router>
    </AppProvider>
  );
};

export default App;