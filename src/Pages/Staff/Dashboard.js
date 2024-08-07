import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/StaffNavbar";
import { Link } from "react-router-dom";
import { workingHours } from "../../Utils/DateFormat";

import { toast } from 'react-toastify';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getSingleStaff } from "../../Api/Staff/Dashboard";
import { Checkin,CheckOut, getSingleAttendence } from "../../Api/Staff/Attendence";
import { getStaffId } from "../../Utils/storage";
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {
  const [checkedInId, setCheckedInId] = useState(null);
  const [checkInTimestamp, setCheckInTimestamp] = useState(null);

  const [staffId, setStaffId] = useState('');
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);
  const [att, setAtt] = useState([]);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  useEffect(() => {
    getStaffDetails();
   
  }, []);

  const getStaffDetails = () => {
    const id = getStaffId();
    getSingleStaff(id)
      .then((res) => {
        console.log(res);
        setStaff(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  


  const handleCheckin = (data) => {
    const checkinData = {
      staffId: getStaffId(),
      empName: staff.empName,
      timestamp: new Date(),
      employeeId: staff?._id,
    };
  
    // Check if the staff ID and timestamp combination is unique
    Checkin(checkinData)
      .then((res) => {
        console.log("yui",res);
        console.log(res);
        setCheckInTimestamp(Date.now().toString());
        setHasCheckedIn(true); // Optionally, you can keep track of check-in status
        setCheckedInId(checkinData.id);
        toast.success('Check-in successful.');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Check-in failed.');
      });
  };

  const handleCheckOut = () => {
    const checkinData = {
      id: staffId,
      timestamp: new Date(), 
    };
  
    // Check if the staff ID and timestamp combination is unique
    CheckOut(checkinData)
      .then((res) => {
        console.log(res);
        setCheckInTimestamp(null);
        setHasCheckedIn(false);
        // setHasCheckedIn(false); // Optionally, you can keep track of check-in status
        setCheckedInId(null);
        toast.success('Check-Out successful.');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Check-in failed.');
      });
  };
  
  // const handleCheckOut = () => {
  //   if (!staffId) {
  //     toast.error('You must check in first');
  //     return;
  //   }
  
  //   const data = {
  //     id: staffId ,
  //      // Use the saved check-in ID
  //   };
  
  //   CheckOut(data).then((res) => {
  //     console.log(res);
  //     setHasCheckedIn(false);
  //     setCheckedInId(null); // Clear the ID after checkout
  //     toast.success(res?.data?.message || 'Checked out successfully');
  //   }).catch((err) => {
  //     console.error(err);
  //     toast.error('Error checking out');
  //   });
  // };
  
  

  
 
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4000 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 7000 },
  ];

  const revenueData = [
    { day: "Mon", revenue: 1000 },
    { day: "Tue", revenue: 2000 },
    { day: "Wed", revenue: 1500 },
    { day: "Thu", revenue: 3000 },
    { day: "Fri", revenue: 2500 },
    { day: "Sat", revenue: 4000 },
    { day: "Sun", revenue: 3500 },
  ];

  const taskCompletionData = [
    { task: "Task 1", completion: 80 },
    { task: "Task 2", completion: 90 },
    { task: "Task 3", completion: 70 },
    { task: "Task 4", completion: 85 },
  ];

  const taskStatusData = [
    { name: "Not Started", value: 5 },
    { name: "In Progress", value: 3 },
    { name: "Completed", value: 8 },
    { name: "Canceled", value: 1 },
    { name: "On Hold", value: 2 },
  ];

  const COLORS = ["#7267ef", "#00C49F", "#FFBB28", "#FF8042"]; // Updated colors

 

  return (
    <>
      <Header />
      <br />
      <br />
      <br /> <br />
      <div
        className="container-fluid "
        style={{ fontFamily: "Inter sans-serif", fontSize: "14px" }}
      >
        <div className="row ">
          <div className="col-lg-3 ">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <section className="d-flex justify-content-end align-items-center mb-4">
              
              <Link
                to="/"
                className="btn"
                style={{ backgroundColor: "#7267ef", color: "#fff" }}
              >
               Switch to 
              </Link>
            </section>
            <section>
              <div className="row mb-4">
                <div className="col-lg-6 mb-3">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title mb-2 text-dark">
                        Welcome {staff?.empName}
                          
                      </h6>
                      <h6
                        className="card-title mb-2"
                        style={{ color: "#7267ef" }}
                      >
                        My Shift:{staff?.shiftTiming} 
                      </h6>
                      <div className="row text-center my-3">

      <div className="col">
     
        <button
          className={`btn btn-sm rounded-1 ${hasCheckedIn ? 'btn-dark' : 'text-white'}`}
          style={{
            backgroundColor: hasCheckedIn ? '#e8e115' : '#17c666', // Dark color if checked in, original color otherwise
            color: '#fff',
          }}
          onClick={handleCheckin}
          disabled={hasCheckedIn} // Disable button if already checked in
        >
          Clock IN
        </button>
      </div>
      <div className="col">
        <button
          className="btn btn-secondary btn-sm text-white rounded-1"
          style={{
            backgroundColor: '#007bff', // Blue color for check-out
          }}
          onClick={handleCheckOut}
          //  disabled={!hasCheckedIn} // Disable button if not checked in
        >
          Clock OUT
        </button>
      </div>
    </div>
                     
                    </div>
                    <Link
                      to="/StaffAttendance"
                      className="text-decoration-none"
                    >
                      <div
                        className="card-footer text-center"
                        style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      >
                        <p className="fw-semibold mb-0">My Attendance</p>
                      </div>
                    </Link>
                  </div>
                  <div className="d-flex justify-content-around align-items-center gap-5">
                    <div className="col my-3">
                      <div className="card card-body border-0 ">
                        <h6 className="card-title mb-2 fw-normal">
                          Overtime Request
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col my-3">
                      <div
                        className="card card-body border-0"
                        style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      >
                        <h6 className="card-title mb-2 fw-normal">
                          Travel Request
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="card border-0">
                      <div className="card-header bg-white p-3 fw-semibold">
                        Tasks Status
                      </div>
                      <div className="card-body p-3">
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="sales"
                              stroke="#7267ef"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                        <div className="mt-3 d-flex flex-wrap">
                          {salesData.map((item) => (
                            <p key={item.month} className="me-3">
                              {item.month}: {item.sales}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="col-5 my-3">
                      <div className="card card-body border-0">
                        <h6 className="card-title mb-2 fw-normal">My Awards</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 my-3">
                      <div
                        className="card card-body border-0"
                        style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      >
                        <h6 className="card-title mb-2 fw-normal">
                          Total Assets
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="card border-0">
                      <div className="card-header bg-white p-3 fw-semibold">
                        Ticket Priority
                      </div>
                      <div className="card-body p-3">
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#17c666" />
                          </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-3 d-flex flex-wrap">
                          {revenueData.map((item) => (
                            <p key={item.day} className="me-3">
                              {item.day}: {item.revenue}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="col-5 mb-4">
                      <div
                        className="card card-body border-0"
                        style={{ backgroundColor: "#17c666", color: "#fff" }}
                      >
                        <h6 className="card-title mb-2 fw-normal">
                          Expense Claim
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">$0.00</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 mb-4">
                      <div className="card card-body border-0 ">
                        <h6 className="card-title mb-2 fw-normal">My Leave</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="card-title mb-0">0</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="card border-0">
                      <div className="card-header bg-white p-3 fw-semibold">
                        Task Completion
                      </div>
                      <div className="card-body p-3">
                        <ResponsiveContainer width="100%" height={200}>
                          <AreaChart data={taskCompletionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="task" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                              type="monotone"
                              dataKey="completion"
                              stroke="#7267ef"
                              fill="#7267ef"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                        <div className="mt-3 d-flex flex-wrap">
                          {taskCompletionData.map((item) => (
                            <p key={item.task} className="me-3">
                              {item.task}: {item.completion}%
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="card border-0">
                      <div className="card-header bg-white p-3 fw-semibold">
                        Project Status
                      </div>
                      <div className="card-body p-3">
                        <ResponsiveContainer width="100%" height={200}>
                          <PieChart>
                            <Pie
                              data={taskStatusData}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#7267ef"
                            >
                              {taskStatusData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
