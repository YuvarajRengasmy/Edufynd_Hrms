import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Sidebar.css"; // Import custom CSS file

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Off-Canvas Sidebar for smaller and medium screens */}
      <div className="offcanvas offcanvas-start bg-white" tabIndex="-1" id="sidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Sidebar</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/StaffDashboard" className="nav-link d-flex align-items-center">
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffAttendance" className="nav-link d-flex align-items-center">
                <i className="fas fa-clipboard-list me-2"></i>
                Attendance
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffProjects" className="nav-link d-flex align-items-center">
                <i className="fas fa-project-diagram me-2"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffHelpdesk" className="nav-link d-flex align-items-center">
                <i className="fas fa-headset me-2"></i>
                Helpdesk
              </Link>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link d-flex align-items-center"
                type="button"
                onClick={handleToggle}
                aria-expanded={!isCollapsed}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>
                  <i className="fas fa-users me-2"></i>
                  Core HR
                </span>
                <i className={`fas ${isCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
              </button>
              <div className={`collapse ${!isCollapsed ? "show" : ""}`} id="coreHrCollapse">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item mb-2">
                    <Link to="/Staffpolicies" className="nav-link d-flex align-items-center">
                      <i className="fas fa-gavel me-2"></i>
                      Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffDisciplinary" className="nav-link d-flex align-items-center">
                <i className="fas fa-money-check-alt me-2"></i>
                Disciplinary Cases
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Fixed Sidebar for larger screens */}
      <div className="d-none d-md-block position-fixed h-100 bg-white" style={{ width: '250px' }}>
        <div className="d-flex flex-column h-100">
          <ul className="nav flex-column flex-grow-1 p-3">
            <li className="nav-item mb-2">
              <Link to="/StaffDashboard" className="nav-link d-flex align-items-center">
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffAttendance" className="nav-link d-flex align-items-center">
                <i className="fas fa-clipboard-list me-2"></i>
                Attendance
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffProjects" className="nav-link d-flex align-items-center">
                <i className="fas fa-project-diagram me-2"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffHelpdesk" className="nav-link d-flex align-items-center">
                <i className="fas fa-headset me-2"></i>
                Helpdesk
              </Link>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link d-flex align-items-center"
                type="button"
                onClick={handleToggle}
                aria-expanded={!isCollapsed}

              >
                <span>
                  <i className="fas fa-users me-2"></i>
                  Core HR
                </span>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <i className={`fas ${isCollapsed ? "fa-chevron-right" : "fa-chevron-down"}`}></i>
              </button>
              <div className={`collapse ${!isCollapsed ? "show" : ""}`} id="coreHrCollapse">
                <ul className="nav flex-column ms-3">
                  <li className="nav-item mb-2">
                    <Link to="/Staffpolicies" className="nav-link d-flex align-items-center">
                      <i className="fas fa-gavel me-2"></i>
                      Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2">
              <Link to="/StaffDisciplinary" className="nav-link d-flex align-items-center">
                <i className="fas fa-money-check-alt me-2"></i>
                Disciplinary Cases
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Button to toggle the sidebar on smaller screens */}
      <button
        className="btn btn-primary position-fixed start-0 m-3 d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle sidebar"
        style={{ zIndex: 1 }} // Ensure the button is on top of other elements
      >
        <i className="fas fa-bars"></i>
      </button>
    </>
  );
};

export default Sidebar;
