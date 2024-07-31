import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`w-64 bg-gray-800 text-white p-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2 className="text-2xl font-semibold mb-6">Sidebar</h2>
      <ul>
        <li className="mb-4 hover:underline"><a href="/">Home</a></li>
        <li className="mb-4"><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="md:hidden mt-4 text-gray-400 hover:text-white" onClick={toggleSidebar}>
        Close
      </button>
    </aside>
  );
};

export default Sidebar;
