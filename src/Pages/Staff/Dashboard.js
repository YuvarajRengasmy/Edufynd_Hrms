<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
=======
import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Navbar";
import { Link } from "react-router-dom";
>>>>>>> origin/Gopinath
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

export const Dashboard = () => {
<<<<<<< HEAD
  const [userId, setUserId] = useState(''); // User ID to be used for API calls
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [message, setMessage] = useState('');
  const [salesData, setSalesData] = useState([
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4000 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 7000 },
  ]);
=======
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4000 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 7000 },
  ];
>>>>>>> origin/Gopinath

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

  useEffect(() => {
    // You can fetch the initial state from the backend if needed
  }, []);

  const handleCheckIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkin', { userId });
      setCheckInTime(new Date(response.data.checkIn));
      setMessage('Checked in successfully!');
    } catch (error) {
      setMessage('Error checking in');
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkout', { userId });
      setCheckOutTime(new Date(response.data.checkOut));
      setMessage('Checked out successfully!');
    } catch (error) {
      setMessage('Error checking out');
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
<<<<<<< HEAD
      <br />
      <br />
      <div className="container-fluid" style={{ fontFamily: "Inter sans-serif", fontSize: '14px' }}>
        <div className="row">
          <div className="col-lg-3">
=======
      <br /> <br />
      <div
        className="container-fluid "
        style={{ fontFamily: "Inter sans-serif", fontSize: "14px" }}
      >
        <div className="row ">
          <div className="col-lg-3 ">
>>>>>>> origin/Gopinath
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <section className="d-flex justify-content-between align-items-center mb-4">
              <div className="profile-details d-flex align-items-center">
                <img
                  src="https://via.placeholder.com/50"
                  className="img-fluid rounded-circle me-3"
                  alt="profile"
                />
                <div>
                  <h6 className="fw-semibold text-capitalize mb-0">
                    Profile Name
                  </h6>
                  <p className="mb-0">@profile</p>
                </div>
              </div>
<<<<<<< HEAD
              <Link to='/' className="btn" style={{ backgroundColor: '#7267ef', color: '#fff' }}>Log Out</Link>
=======
              <Link
                to="/"
                className="btn"
                style={{ backgroundColor: "#7267ef", color: "#fff" }}
              >
                Log Out
              </Link>
>>>>>>> origin/Gopinath
            </section>
            <section>
              <div className="row mb-4">
                <div className="col-lg-6 mb-3">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title mb-2 text-dark">
                        Welcome Gopinath Velmurugan
                      </h6>
                      <h6
                        className="card-title mb-2"
                        style={{ color: "#7267ef" }}
                      >
                        My Shift: 09:30 am To 06:30 pm
                      </h6>
                      <div className="row text-center my-3">
<<<<<<< HEAD
                        <div className='col'>
                          <button className="btn btn-sm text-white rounded-1" style={{ backgroundColor: '#17c666', color: '#fff' }} onClick={handleCheckIn}>Clock IN</button>
                        </div>
                        <div className='col'>
                          <button className="btn btn-secondary btn-sm text-white rounded-1" onClick={handleCheckOut}>Clock OUT</button>
=======
                        <div className="col">
                          <button
                            className="btn btn-sm text-white rounded-1"
                            style={{
                              backgroundColor: "#17c666",
                              color: "#fff",
                            }}
                          >
                            Clock IN
                          </button>
                        </div>
                        <div className="col">
                          <button className="btn btn-secondary btn-sm text-white rounded-1">
                            Clock OUT
                          </button>
>>>>>>> origin/Gopinath
                        </div>
                      </div>
                      {checkInTime && <p>Checked In At: {checkInTime.toLocaleTimeString()}</p>}
                      {checkOutTime && <p>Checked Out At: {checkOutTime.toLocaleTimeString()}</p>}
                      <p>{message}</p>
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
<<<<<<< HEAD
                      <div className="card card-body border-0">
                        <h6 className="card-title mb-2 fw-normal">Overtime Request</h6>
=======
                      <div className="card card-body border-0 ">
                        <h6 className="card-title mb-2 fw-normal">
                          Overtime Request
                        </h6>
>>>>>>> origin/Gopinath
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
<<<<<<< HEAD

=======
>>>>>>> origin/Gopinath
export default Dashboard;
