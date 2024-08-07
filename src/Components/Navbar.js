import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faLanguage,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { getSingleStaff } from "../Api/Staff/Dashboard";
import { getStaffId } from "../Utils/storage";
import { useNavigate } from 'react-router-dom';
import { clearStorage } from "../Utils/storage";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css"; // Custom CSS file for additional styles

export const Navbar = () => {


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
    clearStorage(); // Assuming clearStorage is defined elsewhere
    toast.success("You have been logged out successfully.");
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#161c25" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/SADashboard">
            <img
              src="https://hrms.afynd.com/public/uploads/logo/Afynd_Tlogo.png"
              className="d-inline-block align-top img-fluid"
              style={{ width: "100%", height: "50px" }}
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
             
              <li className="nav-item px-2 dropdown">
                <a
                  className="nav-link "
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
                    <Link className="dropdown-item" to="/SAComplaints">
                      Complaints
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SAResignations">
                      Resignations
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <Link
                  className="nav-link"
                  to="/SACalendar"
                  data-tooltip-id="tooltip-calendar"
                  data-tooltip-content="System Calendar"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center">
             
              <li className="nav-item px-2 dropdown">
                <a
                  className="nav-link d-flex align-items-center "
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={staff?.photo?staff?.photo:"https://via.placeholder.com/30"}
                    
                    style={{ objectFit: "cover",width: "3rem", height: "3rem", borderRadius: "50%" }}
                    className="img-fluid rounded-pill me-2"
                    alt="Profile"
                  />
                   <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  <li>
                    <Link className="dropdown-item" to="/StaffProfile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/"
                    onClick={logout}>
                      Log Out
                    </Link>
                  </li>
                </ul>
                  
                </a>
               
              </li>
              <li className="nav-item px-2 dropdown text-white"><span>{staff?.empName}</span></li>
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
};

export default Navbar;
