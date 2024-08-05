import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css"; // Optional if you have custom styles

const SuperadminSidebar = () => {
  return (
    <div className="sidebar card card-body border-0 rounded-1 d-flex flex-column vh-100 bg-white text-dark position-fixed overflow-auto" style={{scrollbarWidth:'none'}}>
      <div class="accordion" id="accordionExample">
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link to="/SADashboard" className="nav-link d-flex align-items-center">
            <i className="fas fa-home me-2"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAListEmployees" className="nav-link d-flex align-items-center">
            <i className="fas fa-clipboard-list me-2"></i>
            Employees
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="nav-link d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#coreHrCollapse"
            aria-expanded="false"
            aria-controls="coreHrCollapse"
            data-bs-parent="#accordionExample"
          >
            <i className="fas fa-users me-2"></i>
            Core HR
          </button>
          <div className="collapse" id="coreHrCollapse">
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/SAdepartment" className="nav-link d-flex align-items-center">
                  <i className="fas fa-gavel me-2"></i>
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SAdesignation" className="nav-link d-flex align-items-center">
                  <i className="fas fa-briefcase me-2"></i>
                  Designation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SApolicies" className="nav-link d-flex align-items-center">
                  <i className="fas fa-gavel me-2"></i>
                  Policies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SAannouncement" className="nav-link d-flex align-items-center">
                  <i className="fas fa-bullhorn me-2"></i>
                  Announcement
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SAorganization-chart" className="nav-link d-flex align-items-center">
                  <i className="fas fa-sitemap me-2"></i>
                  Organisation Chart
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <button
            className="nav-link d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#attendanceCollapse"
            aria-expanded="false"
            aria-controls="attendanceCollapse"
            data-bs-parent="#accordionExample"
          >
            <i className="fas fa-clipboard-list me-2"></i>
            Attendance
          </button>
          <div className="collapse" id="attendanceCollapse">
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/SAattendance" className="nav-link d-flex align-items-center">
                  <i className="fas fa-calendar-check me-2"></i>
                  Attendance Records
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/SAprojects" className="nav-link d-flex align-items-center">
            <i className="fas fa-project-diagram me-2"></i>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAPayroll" className="nav-link d-flex align-items-center">
            <i className="fas fa-money-check-alt me-2"></i>
            Payroll
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAhelpdesk" className="nav-link d-flex align-items-center">
            <i className="fas fa-question-circle me-2"></i>
            Helpdesk
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="nav-link d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#inventoryCollapse"
            aria-expanded="false"
            aria-controls="inventoryCollapse"
          >
            <i className="fas fa-boxes me-2"></i>
            Inventory Control
          </button>
          <div className="collapse" id="inventoryCollapse">
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
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
  );
};

export default SuperadminSidebar;