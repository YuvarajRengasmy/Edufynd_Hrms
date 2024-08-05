import { Link } from "react-router-dom";
import "./Sidebar.css";

const SuperadminSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-start justify-content-start vh-100 p-1 bg-white text-dark position-fixed overflow-auto">
      
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link to="/SADashboard" className="nav-link">
            <i className="fas fa-home me-2 nav-icon"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAListEmployees" className="nav-link">
            <i className="fas fa-clipboard-list me-2 nav-icon"></i>
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
            <i className="fas fa-users me-2 nav-icon"></i>
            Core HR
          </div>
          <div className="collapse" id="coreHrCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAdepartment" className="nav-link">
                  <i className="fas fa-gavel me-2 nav-icon"></i>
                  Department
                </Link>
              </li>
              <li>
                <Link to="/SAdesignation" className="nav-link">
                  <i className="fas fa-briefcase me-2 nav-icon"></i>
                  Designation
                </Link>
              </li>
              <li>
                <Link to="/SApolicies" className="nav-link">
                  <i className="fas fa-gavel me-2 nav-icon"></i>
                  Policies
                </Link>
              </li>
              <li>
                <Link to="/SAannouncement" className="nav-link">
                  <i className="fas fa-bullhorn me-2 nav-icon"></i>
                  Announcement
                </Link>
              </li>
              <li>
                <Link to="/SAorganization-chart" className="nav-link">
                  <i className="fas fa-sitemap me-2 nav-icon"></i>
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
            <i className="fas fa-clipboard-list me-2 nav-icon"></i>
            Attendance
          </div>
          <div className="collapse" id="attendanceCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAattendance" className="nav-link">
                  <i className="fas fa-calendar-check me-2 nav-icon"></i>
                  Attendance Records
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/SAprojects" className="nav-link">
            <i className="fas fa-project-diagram me-2 nav-icon"></i>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAPayroll" className="nav-link">
            <i className="fas fa-money-check-alt me-2 nav-icon"></i>
            Payroll
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SAhelpdesk" className="nav-link">
            <i className="fas fa-question-circle me-2 nav-icon"></i>
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
            <i className="fas fa-boxes me-2 nav-icon"></i>
            Inventory Control
          </div>
          <div className="collapse" id="inventoryCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/SAinventory" className="nav-link">
                  <i className="fas fa-warehouse me-2 nav-icon"></i>
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