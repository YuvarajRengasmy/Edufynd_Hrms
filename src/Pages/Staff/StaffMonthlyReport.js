import React, { useEffect, useState } from "react";
import { getFilterAttendence,} from "../../Api/Staff/Attendence";
import { getSingleStaff } from "../../Api/Staff/Dashboard";

import Header from "../../Components/StaffNavbar";
import Sidebar from "../../Components/Sidebar";
import { Link } from 'react-router-dom';
import LOGO from '../../Assests/Images/logo.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Profile from '../../Assests/Images/Profile.jpg';
import { getStaffId } from "../../Utils/storage";
import { formatDated, formatYears } from "../../Utils/DateFormat";

export const StaffMonthlyReport = () => {
  const [staff, setStaff] = useState([]);
  const [att, setAtt] = useState([]);
  const [startDate, setStartDate] = useState(""); // State for start date
  const [endDate, setEndDate] = useState(""); // State for end date
  const pageSize = 5;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    getStaffDetails();
    if (startDate && endDate) {
      getAllStaffDetails(); // Fetch staff details and attendance data when dates are selected
    }
  }, [pagination.from, pagination.to, startDate, endDate]); // Add startDate and endDate to dependencies

  const getStaffDetails = () => {
    const id = getStaffId();
    getSingleStaff(id)
      .then((res) => {
        setAtt(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllStaffDetails = () => {
    if (new Date(startDate) > new Date(endDate)) {
      // Handle invalid date range
      alert("End date must be later than start date.");
      return;
    }

    const data = {
      limit: pageSize,
      page: pagination.from,
      employeeId: getStaffId(),
      startDate, // Pass start date for filtering
      endDate, // Pass end date for filtering
    };

    getFilterAttendence(data)
      .then((res) => {
        setStaff(res?.data?.result?.attendencetList || []);
        setPagination({
          ...pagination,
          count: res?.data?.result?.attendencetCount,
        });
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

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value); // Update start date
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value); // Update end date
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9'>
            <div className='container'>
              <div className='card border-0 rounded-1'>
                <div className='card-header border-0 bg-white'>
                  <h5 className='fw-semibold float-start'>Employee Monthly Report</h5>
                </div>
                <div className='card-body'>
                  <form>
                    <div className='row'>
                      <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                        <label className="form-label">Start Date</label>
                        <input
                          type="date"
                          className="form-control rounded-1 text-uppercase text-muted"
                          id="startDate"
                          placeholder="Example 07/08/2024"
                          style={{ fontSize: '12px' }}
                          onChange={handleStartDateChange} // Handle start date change
                        />
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                        <label className="form-label">End Date</label>
                        <input
                          type="date"
                          className="form-control rounded-1 text-uppercase text-muted"
                          id="endDate"
                          placeholder="Example 07/08/2024"
                          style={{ fontSize: '12px' }}
                          onChange={handleEndDateChange} // Handle end date change
                        />
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                        <button 
                          type="button" 
                          className='btn fw-semibold mt-4 px-3 py-2 border-0' 
                          style={{ backgroundColor: '#7627ef', color: '#fff', fontSize: '12px' }}
                          onClick={getAllStaffDetails} // Fetch data based on selected dates
                        >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-xl-12 col-lg-6 col-md-8 col-sm-12 align-self-center'>
                  <div className='card rounded-1 border-0'>
                    <div className='card-header bg-white'>
                      <div className='float-start'>
                        <img src={LOGO} alt='company_logo' className='img-fluid' style={{ width: '11rem', height: '3rem' }} />
                      </div>
                    </div>
                    <div className='card-body' id='contentToPrint'>
                      <div className="profile">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img src={att?.photo ? att?.photo : Profile} className="img-fluid rounded-circle" style={{ width: '5rem', height: '5rem' }} alt="Profile" />
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p className="card-title mb-0">{att?.empName}</p>
                              <p className="card-text"><small className="text-body-secondary">{att?.designation}</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {staff.length > 0 ? (
                        <table className="table table-responsive-sm table-hover">
                          <thead className="table-light text-uppercase" style={{ fontSize: "13px" }}>
                            <tr>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Clock In</th>
                              <th>Clock Out</th>
                              <th>Late</th>
                              <th>Early Leaving</th>
                              <th>Total Work</th>
                            </tr>
                          </thead>
                          <tbody style={{ fontSize: "11px" }}>
                            {staff.map((data) => (
                              <tr key={data.id}>
                                <td>{formatYears(data?.clockIn)}</td>
                                <td>{data?.status}</td>
                                <td>{formatDated(data?.clockIn)}</td>
                                <td>{formatDated(data?.clockOut)}</td>
                                <td>{data?.late}</td>
                                <td>{data?.earlyLeaving}</td>
                                <td>{data?.totalWork}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No data available for the selected date range.</p>
                      )}
                      <div className='d-flex justify-content-center align-items-center gap-3'>
                        <button onClick={handlePrint} className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}>Print</button>
                        <button onClick={handleDownloadPDF} className='btn btn-sm text-capitalize fw-semibold px-4 py-2 border-0' style={{ backgroundColor: '#FFC107', color: '#FFFFFF' }}>Download PDF</button>
                        <Link to='/StaffMonthlyReports' className='btn btn-sm text-capitalize fw-semibold border-0 px-4 py-2' style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}>View Attendance</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffMonthlyReport;
