import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Optional: for notifications

const Clock = () => {
  const [userId, setUserId] = useState('');

  const handleClockIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/clock-in', { userId });
      toast.success(response.data); // Notify on successful clock-in
    } catch (error) {
      toast.error('Failed to clock in.'); // Notify on error
    }
  };

  const handleClockOut = async () => {
    try {
      const response = await axios.post('http://localhost:3000/clock-out', { userId });
      toast.success(response.data); // Notify on successful clock-out
    } catch (error) {
      toast.error('Failed to clock out.'); // Notify on error
    }
  };

  return (
    <div className="card-body">
      <h6 className="card-title mb-2 text-dark">Welcome Gopinath Velmurugan</h6>
      <h6 className="card-title mb-2" style={{ color: '#7267ef' }}>
        My Shift: 09:30 am To 06:30 pm
      </h6>
      <div className="form-group">
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="row text-center my-3">
        <div className="col">
          <button
            className="btn btn-sm text-white rounded-1"
            style={{ backgroundColor: '#17c666', color: '#fff' }}
            onClick={handleClockIn}
          >
            Clock IN
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm text-white rounded-1"
            onClick={handleClockOut}
          >
            Clock OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
