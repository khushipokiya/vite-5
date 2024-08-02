import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-72 h-full bg-gray-800 text-white p-4 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:w-80 md:translate-x-0 md:relative`}
        aria-labelledby="sidebar-heading"
      >
        <h2 id="sidebar-heading" className="text-2xl font-semibold mb-6">
          Sidebar
        </h2>
        <ul>
          <li className="mb-4 hover:underline"><a href="/">Home</a></li>
          <li className="mb-4 hover:underline"><a href="/about">About</a></li>
          <li className="hover:underline"><a href="/contact">Contact</a></li>
        </ul>
        <button
          className="md:hidden mt-4 text-gray-400 hover:text-white focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          Close
        </button>
      </aside>
    </>
  );
};

export default Sidebar;