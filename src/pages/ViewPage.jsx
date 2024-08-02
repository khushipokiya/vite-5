// src/pages/ViewPage.jsx
import React from 'react';
import { useAppContext } from '../Appcontext';
import { useNavigate } from 'react-router-dom';

const ViewPage = () => {
  const { items, selectItem, deleteItem } = useAppContext();
  const navigate = useNavigate();

  const handleEdit = (item) => {
    selectItem(item);
    navigate('/add'); 
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-4">Items List</h2>
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map(item => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.contact}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPage;
