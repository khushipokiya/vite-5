import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">CRUD App</h1>
        <button className="md:hidden p-2" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
