import React from 'react';
import LOGO from '../../Assests/Images/logo.png';
import Profile from '../../Assests/Images/Profile.jpg';
import { Link } from 'react-router-dom';

export const ViewStaffAttendance = () => {
  return (
    <div className='container-fluid mt-4' style={{ fontSize: '14px' }}>
      <div className='row justify-content-center'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-12 align-self-center'>
          <div className='card rounded-1 border-0'>
            <div className='card-header bg-white'>
              <img src={LOGO} alt='company_logo' className='img-fluid' style={{ width: '30%', height: '40px' }} />
            </div>
            <div className='card-body'>
              <div className="profile">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={Profile} className="img-fluid rounded-circle" style={{ width: '5rem', height: '5rem' }} alt="..." />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-title mb-0">Gopinath Velmurugan</p>
                      <p className="card-text"><small className="text-body-secondary">Web Designer</small></p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><div className='mb-0' style={{ color: '#007BFF' }}><p className='mb-0'>Employee Information</p></div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Office Shift :</p>
                  <p className='mb-0'>General Shift</p>
                </div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Account Email :</p>
                  <p className='mb-0'>gopinath.v@afynd.com</p>
                </div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Attendance Date :</p>
                  <p className='mb-0'>06-08-2024</p>
                </div></li>
              </ul>

              <table className="table table-responsive-sm ">
                <thead className="table-light">
                  <tr>
                    <th>In Time</th>
                    <th>Out Time</th>
                    <th>Total Work</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09:38 am</td>
                    <td>05:30 pm</td>
                    <td>00:00</td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex flex-column justify-content-end align-items-end mb-0'>
                <p className='mb-1'>Total Work : 00:00</p>
                <p>Late : 0h 8m</p>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-3'>
                <button className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}>Print</button>
                <Link to='/StaffAttendance' className='btn btn-sm text-capitalize fw-semibold border-0 px-4 py-2' style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}>View Attendance</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStaffAttendance;
