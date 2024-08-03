import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faLanguage, faList } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'; // Custom CSS file for additional styles

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{ backgroundColor: '#161c25' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://hrms.afynd.com/public/uploads/logo/Afynd_Tlogo.png"
              className="d-inline-block align-top img-fluid"
              style={{ width: '100%', height: '50px' }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item px-2">
                <Link
                  className="nav-link"
                  to="#accounts"
                  data-tooltip-id="tooltip-accounts"
                  data-tooltip-content="Accounts Settings"
                >
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                </Link>
              </li>
              <li className="nav-item px-2 dropdown">
                <Link
                  className="nav-link "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-tooltip-id="tooltip-apps"
                  data-tooltip-content="Apps"
                >
                  Apps
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#app1">Complaints</Link></li>
                  <li><Link className="dropdown-item" to="#app2">Resignations</Link></li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link"
                  to="#calendar"
                  data-tooltip-id="tooltip-calendar"
                  data-tooltip-content="System Calendar"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item px-2">
                <Link
                  className="nav-link"
                  to="#language"
                  data-tooltip-id="tooltip-language"
                  data-tooltip-content="Language"
                >
                  <FontAwesomeIcon icon={faLanguage} className="nav-icon" />
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link"
                  to="#todolist"
                  data-tooltip-id="tooltip-todolist"
                  data-tooltip-content="Todo List"
                >
                  <FontAwesomeIcon icon={faList} className="nav-icon" />
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link d-flex align-items-center" to="#profile">
                  <img
                    src="https://via.placeholder.com/30"
                    width="50"
                    height="50"
                    className="img-fluid rounded-circle me-2"
                    alt="Profile"
                  />
                  <span>Profile Name</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Tooltip id="tooltip-accounts" />
        <Tooltip id="tooltip-apps" />
        <Tooltip id="tooltip-calendar" />
        <Tooltip id="tooltip-language" />
        <Tooltip id="tooltip-todolist" />
      </nav>
    </>
  );
}

export default Navbar;
