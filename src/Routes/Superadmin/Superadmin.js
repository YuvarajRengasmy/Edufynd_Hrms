import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Department from "../../Pages/Superadmin/Department";
import SADashBoard from "../../Pages/Superadmin/SADashBoard";
import Policies from "../../Pages/Superadmin/Policies";
import Attendance from "../../Pages/Superadmin/Attendance";
import ListEmployees from "../../Pages/Superadmin/Employees/ListEmployees";
import AddEmployees from "../../Pages/Superadmin/Employees/AddEmployees";
import EditEmployees from "../../Pages/Superadmin/Employees/EditEmployees";
import ViewEmployees from "../../Pages/Superadmin/Employees/ViewEmployees";
import Payroll from "../../Pages/Superadmin/Payroll";
import SACalendar from "../../Pages/Superadmin/SACalendar";
import PrivateRoute from '../../Pages/Login/PrivateRoute';
export const Superadmin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SADashboard" element={<PrivateRoute><SADashBoard /></PrivateRoute>} />
        <Route path="/SADepartment" element={<PrivateRoute><Department /></PrivateRoute>} />
        <Route path="/SAPolicies" element={<PrivateRoute><Policies /></PrivateRoute>} />
        <Route path="/SAAttendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />

        <Route path="/SAListEmployees" element={<PrivateRoute><ListEmployees /></PrivateRoute>} />
        <Route path="/SAAddEmployees" element={<PrivateRoute><AddEmployees /></PrivateRoute>} />
        <Route path="/SAEditEmployees" element={<PrivateRoute><EditEmployees /></PrivateRoute>} />
        <Route path="/SAViewEmployees" element={<PrivateRoute><ViewEmployees /></PrivateRoute>} />

        <Route path="/SAPayroll" element={<Payroll />} />

        <Route path="/SACalendar" element={<SACalendar />} />
      </Routes>
    </div>
  );
};
export default Superadmin;
