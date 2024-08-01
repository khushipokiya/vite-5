import React from 'react';
import CrudForm from '../componants/Form'; // Update path if necessary

const AddPage = ({ onAdd, editingIndex, onEdit }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Entry</h1>
      <CrudForm
        items={[]}
        onAdd={onAdd}
        onEdit={onEdit}
        editingIndex={editingIndex}
        onDelete={() => {}} // onDelete is not needed here
      />
    </div>
  );
};

export default AddPage;
