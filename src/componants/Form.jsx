  // src/components/Form.jsx
  import React, { useContext, useEffect } from 'react';
  import { useFormik } from 'formik';
  import { AppContext } from '../Appcontext';  // Ensure this path is correct

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.contact) {
      errors.contact = 'Contact number is required';
    } else if (!/^\d+$/.test(values.contact)) {
      errors.contact = 'Contact number must be numeric';
    } else if (values.contact.length !==10) {
      errors.contact = 'Contact number must be 10 digits';
    }

    return errors;
  };

  const Form = () => {
    const { addItem, updateItem, currentItem, setCurrentItem } = useContext(AppContext);

    const formik = useFormik({
      initialValues: {
        name: currentItem ? currentItem.name : '',
        description: currentItem ? currentItem.description : '',
        email: currentItem ? currentItem.email : '',
        contact: currentItem ? currentItem.contact : '',
      },
      validate,
      onSubmit: (values) => {
        if (currentItem) {
          updateItem(currentItem.id, values);
        } else {
          addItem(values);
        }
        setCurrentItem(null);
        formik.resetForm();
      }
    });

    useEffect(() => {
      if (currentItem) {
        formik.setValues({
          name: currentItem.name,
          description: currentItem.description,
          email: currentItem.email,
          contact: currentItem.contact,
        });
      }
    }, [currentItem, formik]);

    return (
      <div className="flex-1 p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{currentItem ? 'Edit Item' : 'Add Item'}</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              id="contact"
              name="contact"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formik.errors.contact && formik.touched.contact && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.contact}</div>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.description}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {currentItem ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    );
  };

  export default Form;
