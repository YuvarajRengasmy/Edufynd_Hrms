import { Link } from "react-router-dom";
import "./Sidebar.css";

const SuperadminSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-start justify-content-start vh-100 p-1 bg-white text-dark position-fixed overflow-auto">
      
      <ul className="nav flex-column mb-auto">
       
        <li className="nav-item">
          <Link to="/SADashboard" className="nav-link">
          <i class="fas fa-home nav-icon"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAListEmployees" className="nav-link">
          <i class="fas fa-users nav-icon"></i>
            Employees
          </Link>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            data-bs-toggle="collapse"
            href="#coreHrCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="coreHrCollapse"
          >
            <i class="fas fa-briefcase nav-icon"></i>
            Core HR
          </div>
          <div className="collapse" id="coreHrCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAdepartment" className="nav-link">
                <i class="fas fa-building nav-icon"></i>
                  Department
                </Link>
              </li>
              <li>
                <Link to="/SAdesignation" className="nav-link">
                <i class="fas fa-tag nav-icon"></i>
                  Designation
                </Link>
              </li>
              <li>
                <Link to="/SApolicies" className="nav-link">
                <i class="fas fa-file-contract nav-icon"></i>
                  Policies
                </Link>
              </li>
              <li>
                <Link to="/SAannouncement" className="nav-link">
                <i class="fas fa-bullhorn nav-icon"></i>
                  Announcement
                </Link>
              </li>
              <li>
                <Link to="/SAorganization-chart" className="nav-link">
                <i class="fas fa-sitemap nav-icon"></i>
                  Organisation Chart
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            data-bs-toggle="collapse"
            href="#attendanceCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="attendanceCollapse"
          >
           <i class="fas fa-calendar-check nav-icon"></i>
            Attendance
          </div>
          <div className="collapse" id="attendanceCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAattendance" className="nav-link">
                <i class="fas fa-calendar-alt nav-icon"></i>
                  Attendance Records
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/SAprojects" className="nav-link">
          <i class="fas fa-project-diagram nav-icon"></i>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAPayroll" className="nav-link">
          <i class="fas fa-money-check nav-icon"></i>
            Payroll
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAhelpdesk" className="nav-link">
          <i class="fas fa-headset nav-icon"></i>
            Helpdesk
          </Link>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            data-bs-toggle="collapse"
            href="#inventoryCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="inventoryCollapse"
          >
           <i class="fas fa-boxes nav-icon"></i>
            Inventory Control
          </div>
          <div className="collapse" id="inventoryCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAinventory" className="nav-link">
                <i class="fas fa-warehouse nav-icon"></i>
                  Inventory Management
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