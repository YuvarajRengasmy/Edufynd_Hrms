import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { getSingleStaff } from "../Api/Staff/Dashboard";
import { getStaffId, clearStorage } from "../Utils/storage";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css"; // Custom CSS file for additional styles

export const StaffNavbar = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

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

  const logout = () => {
    clearStorage(); 
    toast.success("You have been logged out successfully.");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/StaffDashboard">
            <img
              src="https://hrms.afynd.com/public/uploads/logo/Afynd_Tlogo.png"
              className="d-inline-block align-top img-fluid"
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-tooltip-id="tooltip-apps"
                  data-tooltip-content="Apps"
                >
                  Apps
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/StaffComplaints">
                      Complaints
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/StaffResignations">
                      Resignations
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/StaffCalendar"
                  data-tooltip-id="tooltip-calendar"
                  data-tooltip-content="System Calendar"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={staff?.photo ? staff?.photo : "https://via.placeholder.com/30"}
                    className="img-fluid rounded-circle me-2"
                    alt="Profile"
                    style={{ width: "2.5rem", height: "2.5rem", objectFit: "cover" }}
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/StaffProfile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={logout}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white">
                <span>{staff?.empName}</span>
              </li>
            </ul>
          </div>
        </div>
        <Tooltip id="tooltip-apps" />
        <Tooltip id="tooltip-calendar" />
      </nav>
    </>
  );
};

export default StaffNavbar;
