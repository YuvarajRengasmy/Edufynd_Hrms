import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/SuperadminSidebar";
import Header from "../../Components/Navbar";
import { Link } from "react-router-dom";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Switchto from "../../Components/Switchto";
import { getSuperAdminId } from "../../Utils/storage";

import {getSingleSuperAdmin } from "../../Api/SuperAdmin/Dashboard";

export const SADashboard = () => {

const [sa, setSa] = useState({})



  useEffect(() => {
    getStaffDetails();
   
  }, []);

  const getStaffDetails = () => {
    const id = getSuperAdminId();
    getSingleSuperAdmin(id)
      .then((res) => {
        console.log(res);
        setSa(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const invoicePaymentData = [
    { Check: "Paid", Amount: 11800.0 },
    { Check: "Unpaid", Amount: 0.0 },
  ];

  const payrollMonthlyReportData = [
    { Month: "January", Amount: 26000.0 },
    { Month: "February", Amount: 24000.0 },
    { Month: "March", Amount: 28000.0 },
  ];

  const departmentWiseStaffData = [
    { name: "HR", value: 10 },
    { name: "IT", value: 20 },
    { name: "Sales", value: 30 },
    { name: "Marketing", value: 40 },
  ];

  const designationWiseData = [
    { name: "Manager", value: 10 },
    { name: "Developer", value: 20 },
    { name: "Sales Executive", value: 30 },
    { name: "Marketing Executive", value: 40 },
  ];

  const staffAttendanceData = [
    { task: "Present", completion: 95 },
    { task: "Absent", completion: 5 },
  ];

  const projectStatusData = [
    { name: "Completed", value: 10 },
    { name: "Ongoing", value: 20 },
    { name: "Pending", value: 30 },
    { name: "On Hold", value: 40 },
  ];

  const taskStatusData = [
    { name: "Completed", value: 50 },
    { name: "Pending", value: 50 },
  ];

  const COLORS = ["#7267ef", "#00C49F", "#FFBB28", "#FF8042"];

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
        <div className="row  ">
          <div className="col-lg-3 ">
            <Sidebar />
          </div>
          <div className="col-lg-9 ">
            <div className="container-fluid">
              <div className="row">
                <section className=" mb-4">
                  <div className="profile-details d-flex align-items-center">
                    <img
                      src={sa?.photo?sa?.photo:"https://via.placeholder.com/50"}
                      style={{ height: "4rem", width: "4rem" }}
                      className="img-fluid rounded-circle me-3"
                      alt="profile"
                    />
                    <div>
                     
                      <p className="mb-0">{sa?.name}</p>
                    </div>
                  </div>
                 <Switchto/>
                </section>
                <div className="container-fluid my-4">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="card card-body border-0"
                        style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      >
                        <h6 className="card-title mb-2 fw-normal">
                          Total Deposit
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">$0.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="card card-body border-0">
                        <h6 className="card-title mb-2 fw-normal">
                          Total Projects
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">0</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="card card-body border-0">
                        <h6 className="card-title mb-2 fw-normal">
                          Total Employee
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">0</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="card card-body border-0"
                        style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      >
                        <h6 className="card-title mb-2 fw-normal">
                          Total Expenses
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">$0.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="card border-0">
                        <div className="card-header bg-white p-3 fw-semibold">
                          Invoice Payment
                        </div>
                        <div className="card-body p-3">
                          <div className="d-flex gap-4">
                            <div className="d-flex flex-column">
                              <h5 className="fw-semibold mb-0">$11,800.00</h5>
                              <p className="fw-norml">Total Paid</p>
                            </div>
                            <div className="d-flex flex-column">
                              <h5 className="fw-semibold mb-0">$0.00</h5>
                              <p className="fw-norml">Total UnPaid</p>
                            </div>
                          </div>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={invoicePaymentData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="Check" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="Amount" fill="#7267ef" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="card border-0">
                        <div className="card-header bg-white p-3 fw-semibold">
                          Payroll Monthly Report
                        </div>
                        <div className="card-body p-3">
                          <div className="d-flex gap-4">
                            <div className="d-flex flex-column">
                              <h5 className="fw-semibold mb-0">$26,000.00</h5>
                              <p className="fw-norml">Total </p>
                            </div>
                            <div className="d-flex flex-column">
                              <h5 className="fw-semibold mb-0">$0.00</h5>
                              <p className="fw-norml">This Month</p>
                            </div>
                          </div>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={payrollMonthlyReportData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="Month" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="Amount" fill="#17c666" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="card border-0">
                        <div className="card-header bg-white p-3 fw-semibold">
                          Department Wise Staff
                        </div>
                        <div className="card-body p-3">
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={departmentWiseStaffData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                              >
                                {departmentWiseStaffData.map((entry, index) => (
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
                    <div className="col-md-6 mb-3">
                      <div className="card border-0">
                        <div className="card-header bg-white p-3 fw-semibold">
                          Designation Wise
                        </div>
                        <div className="card-body p-3">
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={designationWiseData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                              >
                                {designationWiseData.map((entry, index) => (
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
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="col-md-12 mb-3">
                            <div className="card border-0">
                              <div className="card-header bg-white p-3 fw-semibold">
                                <h6 className="float-start">
                                  {" "}
                                  Staff Attendance
                                </h6>
                                <p className="float-end fw-normal">
                                  {" "}
                                  03 August 2024
                                </p>
                              </div>
                              <div className="card-body p-3">
                                <div className="d-flex ">
                                  <div className="d-flex flex-column">
                                    <p className="mb-1">Total Staff</p>
                                    <p className="mb-1">Present</p>
                                    <p className="mb-1">Absent</p>
                                  </div>
                                  <ResponsiveContainer
                                    width="100%"
                                    height={200}
                                  >
                                    <PieChart>
                                      <Pie
                                        data={staffAttendanceData}
                                        dataKey="completion"
                                        nameKey="task"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                      >
                                        {staffAttendanceData.map(
                                          (entry, index) => (
                                            <Cell
                                              key={`cell-${index}`}
                                              fill={
                                                COLORS[index % COLORS.length]
                                              }
                                            />
                                          )
                                        )}
                                      </Pie>
                                      <Tooltip />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-group border-0">
                            <div class="card border-0 border-end ">
                              <div class="card-body ">
                                <div className="d-flex justify-content-between">
                                  <h6 class="card-icon">Icon</h6>
                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h6 class="card-icon">0</h6>
                                    <p class="card-text">
                                      <small class="text-body-secondary">
                                        Tickets
                                      </small>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card border-0 border-end">
                              <div class="card-body">
                                <div className="d-flex justify-content-between">
                                  <h6 class="card-icon">Icon</h6>
                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h6 class="card-icon">0</h6>
                                    <p class="card-text">
                                      <small class="text-body-secondary">
                                        Open
                                      </small>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card border-0 ">
                              <div class="card-body">
                                <div className="d-flex justify-content-between">
                                  <h6 class="card-icon">Icon</h6>
                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h6 class="card-icon">0</h6>
                                    <p class="card-text">
                                      <small class="text-body-secondary">
                                        Closed
                                      </small>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="col">
                              <div className="card border-0">
                                <div className="card-header bg-white p-3 fw-semibold">
                                  Project Sy
                                </div>
                                <div className="card-body p-3">
                                  <ResponsiveContainer
                                    width="100%"
                                    height={200}
                                  >
                                    <PieChart>
                                      <Pie
                                        data={projectStatusData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                      >
                                        {projectStatusData.map(
                                          (entry, index) => (
                                            <Cell
                                              key={`cell-${index}`}
                                              fill={
                                                COLORS[index % COLORS.length]
                                              }
                                            />
                                          )
                                        )}
                                      </Pie>
                                      <Tooltip />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <div className="card-header bg-white p-3 fw-semibold">
                                  Designation Wise
                                </div>
                                <div className="card-body p-3">
                                  <ResponsiveContainer
                                    width="100%"
                                    height={200}
                                  >
                                    <PieChart>
                                      <Pie
                                        data={taskStatusData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
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
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SADashboard;
