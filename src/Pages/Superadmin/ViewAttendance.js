import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSingleStaff } from "../../Api/Staff/Dashboard";
import { getSingleAttendence } from "../../Api/Staff/Attendence";
import { getSuperAdminId } from "../../Utils/storage";
import { formatDated, formatYears } from "../../Utils/DateFormat";
import LOGO from '../../Assests/Images/logo.png';
import Profile from '../../Assests/Images/Profile.jpg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const ViewStaffAttendance = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [staff, setStaff] = useState([]);
  const [att, setAtt] = useState([]);

  useEffect(() => {
   
    getSingleAttendenc();
  }, [id]);



  const getSingleAttendenc = () => {
    getSingleAttendence(id)
      .then((res) => {
        console.log(res);
        setAtt(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById('contentToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Staff_Attendance.pdf');
    });
  };

  return (
    <div className='container-fluid mt-4' style={{ fontSize: '14px' }}>
      <div className='row justify-content-center'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-12 align-self-center'>
          <div className='card rounded-1 border-0'>
            <div className='card-header bg-white'>
              <img src={LOGO} alt='company_logo' className='img-fluid' style={{ width: '30%', height: '40px' }} />
            </div>
            <div className='card-body' id='contentToPrint'>
              <div className="profile">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={att?.photo ? att?.photo : Profile} className="img-fluid rounded-circle" style={{ width: '5rem', height: '5rem' }} alt="..." />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-title mb-0">{att?.empName}</p>
                      <p className="card-text"><small className="text-body-secondary">{att?.designation}</small></p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><div className='mb-0' style={{ color: '#007BFF' }}><p className='mb-0'>Employee Information</p></div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Office Shift :</p>
                  <p className='mb-0'>{att?.shiftTiming}</p>
                </div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Account Email :</p>
                  <p className='mb-0'>{att?.email}</p>
                </div></li>
                <li className="list-group-item"><div className='d-flex justify-content-between'>
                  <p className='mb-0 fw-bold'>Attendance Date :</p>
                  <p className='mb-0'>{formatYears(att?.clockIn)}</p>
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
                    <td>{formatDated(att?.clockIn)}</td>
                    <td>{formatDated(att?.clockOut)}</td>
                    <td>{att?.totalWork}</td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex flex-column justify-content-end align-items-end mb-0'>
                <p className='mb-1'>Total Work : {att?.totalWork}</p>
                <p>Late : {att?.late}</p>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-3'>
                <button onClick={handlePrint} className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}>Print</button>
                <button onClick={handleDownloadPDF} className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#FFC107', color: '#FFFFFF' }}>Download PDF</button>
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
