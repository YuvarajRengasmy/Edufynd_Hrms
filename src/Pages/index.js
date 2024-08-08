import React, { useState } from 'react';
import axios from 'axios';

const AllowanceForm = () => {
  const [allowances, setAllowances] = useState([{ name: '', value: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newAllowances = [...allowances];
    newAllowances[index][name] = value;
    setAllowances(newAllowances);
  };

  const handleAddClick = () => {
    setAllowances([...allowances, { name: '', value: '' }]);
  };

  const handleSaveClick = async () => {
    try {
      // Replace this URL with your backend endpoint
      const response = await axios.post('https://your-backend-api-url/allowances', allowances);
      console.log('Saved Data:', response.data); // Handle response as needed
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
    }
  };

  return (
    <div className='card-body p-4'>
      <form>
        {allowances.map((allowance, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">Allowance {index + 1} Name</label>
            <input
              type="text"
              name="name"
              value={allowance.name}
              onChange={(event) => handleInputChange(index, event)}
              className="form-control rounded-1"
              placeholder="Example House Rent Allowances"
              style={{ fontSize: '12px' }}
            />
            <label className="form-label">Allowance {index + 1} Value</label>
            <input
              type="text"
              name="value"
              value={allowance.value}
              onChange={(event) => handleInputChange(index, event)}
              className="form-control rounded-1"
              placeholder="Example 2500"
              style={{ fontSize: '12px' }}
            />
          </div>
        ))}
        <button
          type="button"
          className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1'
          style={{ backgroundColor: '#7267ef' }}
          onClick={handleAddClick}
        >
          <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add
        </button>
        <button
          type="button"
          className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1 me-2'
          style={{ backgroundColor: '#28a745' }}
          onClick={handleSaveClick}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AllowanceForm;
