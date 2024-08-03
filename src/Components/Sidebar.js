import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faProjectDiagram, faQuestionCircle, faUsers, faGavel } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-start justify-content-start vh-100 p-4 bg-white text-dark position-fixed">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/StaffDashboard" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/attendance" className="nav-link">
            <FontAwesomeIcon icon={faClipboardList} className="me-2" />
            Attendance
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/helpdesk" className="nav-link">
            <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
            Helpdesk
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link" data-bs-toggle="collapse" href="#coreHrCollapse" role="button" aria-expanded="false" aria-controls="coreHrCollapse">
            <FontAwesomeIcon icon={faUsers} className="me-2" />
            Core HR
          </div>
          <div className="collapse" id="coreHrCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/policies" className="nav-link">
                  Policies
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/disciplinary" className="nav-link">
            <FontAwesomeIcon icon={faGavel} className="me-2" />
            Disciplinary Cases
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
