import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faProjectDiagram, faQuestionCircle, faUsers, faGavel } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const SuperadminSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-start justify-content-start vh-100 p-4 bg-white text-dark position-fixed">
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link to="/StaffDashboard" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="me-2 nav-icon" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/attendance" className="nav-link">
            <FontAwesomeIcon icon={faClipboardList} className="me-2 nav-icon" />
            Employees
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link" data-bs-toggle="collapse" href="#coreHrCollapse" role="button" aria-expanded="false" aria-controls="coreHrCollapse">
            <FontAwesomeIcon icon={faUsers} className="me-2 nav-icon" />
            Core HR
          </div>
          <div className="collapse" id="coreHrCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/department" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Department
                </Link>
              </li>
              <li>
                <Link to="/designation" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Designation
                </Link>
              </li>
              <li>
                <Link to="/policies" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Policies
                </Link>
              </li>
              <li>
                <Link to="/announcement" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Make Announcement
                </Link>
              </li>
              <li>
                <Link to="/organization-chart" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Organisation Chart
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" data-bs-toggle="collapse" href="#attendanceCollapse" role="button" aria-expanded="false" aria-controls="attendanceCollapse">
            <FontAwesomeIcon icon={faClipboardList} className="me-2 nav-icon" />
            Attendance
          </div>
          <div className="collapse" id="attendanceCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/attendance/departments" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Department
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <FontAwesomeIcon icon={faProjectDiagram} className="me-2 nav-icon" />
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/helpdesk" className="nav-link">
            <FontAwesomeIcon icon={faQuestionCircle} className="me-2 nav-icon" />
            Helpdesk
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link" data-bs-toggle="collapse" href="#inventoryCollapse" role="button" aria-expanded="false" aria-controls="inventoryCollapse">
            <FontAwesomeIcon icon={faUsers} className="me-2 nav-icon" />
            Inventory Control
          </div>
          <div className="collapse" id="inventoryCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/inventory/departments" className="nav-link">
                  <FontAwesomeIcon icon={faGavel} className="me-2 nav-icon" />
                  Departments
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SuperadminSidebar;
