import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "./Sidebar.css"; // Import custom CSS file

const SuperadminSidebar = () => {
  const [isCoreHrCollapsed, setCoreHrCollapsed] = useState(true);
  const [isAttendanceCollapsed, setAttendanceCollapsed] = useState(true);
  const [isInventoryCollapsed, setInventoryCollapsed] = useState(true);

  const handleCoreHrToggle = () => setCoreHrCollapsed(!isCoreHrCollapsed);
  const handleAttendanceToggle = () => setAttendanceCollapsed(!isAttendanceCollapsed);
  const handleInventoryToggle = () => setInventoryCollapsed(!isInventoryCollapsed);

  return (
    <>
      {/* Off-Canvas Sidebar for smaller screens */}
      <div className="offcanvas offcanvas-start bg-white text-dark" tabIndex="-1" id="offcanvasSidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Sidebar</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column mb-auto">
            <li className="nav-item mb-2">
              <Link to="/SADashboard" className="nav-link d-flex align-items-center">
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/SAListEmployees" className="nav-link d-flex align-items-center">
                <i className="fas fa-users me-2"></i>
                Employees
              </Link>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link d-flex align-items-center justify-content-between"
                type="button"
                onClick={handleCoreHrToggle}
                aria-expanded={!isCoreHrCollapsed}
              >
                <span>
                  <i className="fas fa-briefcase me-2"></i>
                  Core HR
                </span>
                <i className={`fas ${isCoreHrCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
              </button>
              <div className={`collapse ${!isCoreHrCollapsed ? "show" : ""}`} id="coreHrCollapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/SAdepartment" className="nav-link d-flex align-items-center">
                      <i className="fas fa-building me-2"></i>
                      Department
                    </Link>
                  </li>
                  <li>
                    <Link to="/SAdesignation" className="nav-link d-flex align-items-center">
                      <i className="fas fa-tag me-2"></i>
                      Designation
                    </Link>
                  </li>
                  <li>
                    <Link to="/SApolicies" className="nav-link d-flex align-items-center">
                      <i className="fas fa-file-contract me-2"></i>
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link to="/SAannouncement" className="nav-link d-flex align-items-center">
                      <i className="fas fa-bullhorn me-2"></i>
                      Announcement
                    </Link>
                  </li>
                  <li>
                    <Link to="/SAorganization-chart" className="nav-link d-flex align-items-center">
                      <i className="fas fa-sitemap me-2"></i>
                      Organisation Chart
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link d-flex align-items-center justify-content-between"
                type="button"
                onClick={handleAttendanceToggle}
                aria-expanded={!isAttendanceCollapsed}
              >
                <span>
                  <i className="fas fa-calendar-check me-2"></i>
                  Attendance
                </span>
                <i className={`fas ${isAttendanceCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
              </button>
              <div className={`collapse ${!isAttendanceCollapsed ? "show" : ""}`} id="attendanceCollapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/SAattendance" className="nav-link d-flex align-items-center">
                      <i className="fas fa-calendar-alt me-2"></i>
                      Attendance Records
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2">
              <Link to="/SAprojects" className="nav-link d-flex align-items-center">
                <i className="fas fa-project-diagram me-2"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/SAPayroll" className="nav-link d-flex align-items-center">
                <i className="fas fa-money-check me-2"></i>
                Payroll
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/SAhelpdesk" className="nav-link d-flex align-items-center">
                <i className="fas fa-headset me-2"></i>
                Helpdesk
              </Link>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link d-flex align-items-center justify-content-between"
                type="button"
                onClick={handleInventoryToggle}
                aria-expanded={!isInventoryCollapsed}
              >
                <span>
                  <i className="fas fa-boxes me-2"></i>
                  Inventory Control
                </span>
                <i className={`fas ${isInventoryCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
              </button>
              <div className={`collapse ${!isInventoryCollapsed ? "show" : ""}`} id="inventoryCollapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/SAinventory" className="nav-link d-flex align-items-center">
                      <i className="fas fa-warehouse me-2"></i>
                      Inventory Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Button to toggle the off-canvas sidebar on smaller screens */}
      <button
        className="btn btn-primary position-fixed  start-0 m-3 d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        aria-expanded="false"
        aria-label="Toggle sidebar"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Fixed Sidebar for larger screens */}
      <div className="d-none d-md-block position-fixed h-100 bg-white" style={{width:'250px'}}>

      <div className="d-flex flex-column h-100">
        <ul className="nav flex-column flex-grow-1 p-3">
          <li className="nav-item mb-2">
            <Link to="/SADashboard" className="nav-link d-flex align-items-center">
              <i className="fas fa-home me-2"></i>
              Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/SAListEmployees" className="nav-link d-flex align-items-center">
              <i className="fas fa-users me-2"></i>
              Employees
            </Link>
          </li>
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex align-items-center justify-content-between"
              type="button"
              onClick={handleCoreHrToggle}
              aria-expanded={!isCoreHrCollapsed}
            >
              <span>
                <i className="fas fa-briefcase me-2"></i>
                Core HR
              </span>
              &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <i className={`fas ${isCoreHrCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
            </button>
            <div className={`collapse ${!isCoreHrCollapsed ? "show" : ""}`} id="coreHrCollapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/SAdepartment" className="nav-link d-flex align-items-center">
                    <i className="fas fa-building me-2"></i>
                    Department
                  </Link>
                </li>
                <li>
                  <Link to="/SAdesignation" className="nav-link d-flex align-items-center">
                    <i className="fas fa-tag me-2"></i>
                    Designation
                  </Link>
                </li>
                <li>
                  <Link to="/SApolicies" className="nav-link d-flex align-items-center">
                    <i className="fas fa-file-contract me-2"></i>
                    Policies
                  </Link>
                </li>
                <li>
                  <Link to="/SAannouncement" className="nav-link d-flex align-items-center">
                    <i className="fas fa-bullhorn me-2"></i>
                    Announcement
                  </Link>
                </li>
                <li>
                  <Link to="/SAorganization-chart" className="nav-link d-flex align-items-center">
                    <i className="fas fa-sitemap me-2"></i>
                    Organisation Chart
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex align-items-center justify-content-between"
              type="button"
              onClick={handleAttendanceToggle}
              aria-expanded={!isAttendanceCollapsed}
            >
              <span>
                <i className="fas fa-calendar-check me-2"></i>
                Attendance
              </span>
              &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     <i className={`fas ${isAttendanceCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
            </button>
            <div className={`collapse ${!isAttendanceCollapsed ? "show" : ""}`} id="attendanceCollapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/SAattendance" className="nav-link d-flex align-items-center">
                    <i className="fas fa-calendar-alt me-2"></i>
                    Attendance Records
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mb-2">
            <Link to="/SAprojects" className="nav-link d-flex align-items-center">
              <i className="fas fa-project-diagram me-2"></i>
              Projects
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/SAPayroll" className="nav-link d-flex align-items-center">
              <i className="fas fa-money-check me-2"></i>
              Payroll
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/SAhelpdesk" className="nav-link d-flex align-items-center">
              <i className="fas fa-headset me-2"></i>
              Helpdesk
            </Link>
          </li>
          <li className="nav-item mb-2">
            <button
              className="nav-link d-flex align-items-center justify-content-between"
              type="button"
              onClick={handleInventoryToggle}
              aria-expanded={!isInventoryCollapsed}
            >
              <span>
                <i className="fas fa-boxes me-2"></i>
                     Inventory Control
              </span>
              &nbsp;  &nbsp;  &nbsp;&nbsp;   <i className={`fas ${isInventoryCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
            </button>
            <div className={`collapse ${!isInventoryCollapsed ? "show" : ""}`} id="inventoryCollapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/SAinventory" className="nav-link d-flex align-items-center">
                    <i className="fas fa-warehouse me-2"></i>
                    Inventory Management
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default SuperadminSidebar;
