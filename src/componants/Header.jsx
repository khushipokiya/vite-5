import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          CRUD App
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/view"
            className="px-4 py-2 text-lg rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            View Page
          </Link>
          <Link
            to="/add"
            className="px-4 py-2 text-lg rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            Add Page
          </Link>
        </div>
        <button
          className="md:hidden p-3 text-3xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
