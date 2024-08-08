import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFilteredDataForPDF } from "../../Api/Staff/Attendence";
import jsPDF from "jspdf";
import LOGO from '../../Assests/Images/logo.png';
import { Link } from 'react-router-dom';
import Profile from '../../Assests/Images/Profile.jpg'
export const ViewStaffMonthlyReports = () => {

  
  return (
    <div className='container-fluid mt-4' style={{ fontSize: '14px' }}>
    <div className='row justify-content-center'>
      <div className='col-xl-5 col-lg-6 col-md-8 col-sm-12 align-self-center'>
        <div className='card rounded-1 border-0'>
          <div className='card-header bg-white'>
            <div className='float-start'>
            <img src={LOGO} alt='company_logo' className='img-fluid' style={{ width: '11rem', height: '3rem' }} />
            </div>
            <div className='float-end pt-2'>
                <h6 className='fw-semibold mb-1' style={{color:'#7627ef'}}>Attendance Month</h6>
                <p className='fw-semibold' style={{color:'#7627ef'}}>August, 2024</p>
            </div>
           
          </div>
          <div className='card-body' id='contentToPrint'>
            <div className="profile">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={Profile} className="img-fluid rounded-circle" style={{ width: '5rem', height: '5rem' }} alt="..." />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <p className="card-title mb-0">Gopinath</p>
                    <p className="card-text"><small className="text-body-secondary">Web Developer</small></p>
                  </div>
                </div>
              </div>
            </div>

           

            <table className="table table-responsive-sm ">
              <thead className="table-light">
                <tr>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
           

            <div className='d-flex justify-content-center align-items-center gap-3'>
              <button  className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}>Print</button>
              <button  className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#FFC107', color: '#FFFFFF' }}>Download PDF</button>
              <Link to='/StaffMonthlyReports' className='btn btn-sm text-capitalize fw-semibold border-0 px-4 py-2' style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}>View Attendance</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default ViewStaffMonthlyReports