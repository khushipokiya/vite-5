import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.contactNumber) {
    errors.contactNumber = 'Contact number is required';
  } else if (!/^\d{10}$/.test(values.contactNumber)) {
    errors.contactNumber = 'Contact number must be 10 digits';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  }
  return errors;
};

const CrudForm = ({ items, onAdd, onEdit, editingIndex, onDelete }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      contactNumber: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      if (editingIndex !== null) {
        onEdit(values, editingIndex);
      } else {
        onAdd(values);
      }
      formik.resetForm();
    },
  });

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">CRUD Form</h2>

      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-large text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your full name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-lg">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your email address"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-lg">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNumber}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your contact number"
          />
          {formik.touched.contactNumber && formik.errors.contactNumber ? (
            <div className="text-red-500 text-lg">{formik.errors.contactNumber}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            rows="4"
            placeholder="Enter a description"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-lg">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <div className="mr-4">
              <strong>{item.name}:</strong> {item.description} | {item.email} | {item.contactNumber}
            </div>
            <button
              onClick={() => onEdit(item, index)}
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-lg px-4 py-2 transition-colors duration-300 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudForm;
