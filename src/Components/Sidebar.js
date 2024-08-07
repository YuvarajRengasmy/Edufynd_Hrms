import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css"; // Optional if you have custom styles

const SuperadminSidebar = () => {
  return (
    <div className="sidebar card card-body border-0 rounded-1 d-flex flex-column vh-100 bg-white  text-dark position-fixed overflow-auto" style={{scrollbarWidth:'none'}}>
     
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link to="/StaffDashboard" className="nav-link d-flex align-items-center">
            <i className="fas fa-home me-2"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/StaffAttendance" className="nav-link d-flex align-items-center">
            <i className="fas fa-clipboard-list me-2"></i>
           Attendance
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/StaffProjects" className="nav-link d-flex align-items-center">
            <i className="fas fa-clipboard-list me-2"></i>
          Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/StaffHelpdesk" className="nav-link d-flex align-items-center">
            <i className="fas fa-clipboard-list me-2"></i>
          Helpdesk
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
                <Link to="/Staffpolicies" className="nav-link d-flex align-items-center">
                  <i className="fas fa-gavel me-2"></i>
                  Policies
                </Link>
              </li>
            
            </ul>
          </div>
        </li>
      
      
        <li className="nav-item">
          <Link to="/StaffDisciplinary" className="nav-link d-flex align-items-center">
            <i className="fas fa-money-check-alt me-2"></i>
           Disciplinary Cases
          </Link>
        </li>
       
      </ul>
     
      
    </div>
  );
};

export default SuperadminSidebar;