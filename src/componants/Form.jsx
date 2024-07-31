import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
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
              <strong>{item.name}:</strong> {item.description}
            </div>
            <button
              onClick={() => onEdit(item, index)}
              className="mr-2 text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 hover:text-red-700"
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
