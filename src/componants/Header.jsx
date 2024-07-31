import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">CRUD App</h1>
        <div className="flex space-x-4">
          <Link to="/view" className="hover:text-gray-300">View Page</Link>
          <Link to="/add" className="hover:text-gray-300">Add Page</Link>
        </div>
        <button className="md:hidden p-2" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
