import React from "react";
import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../../Pages/Staff/Dashboard";
import Attendance from "../../Pages/Staff/Attendance";
import Demo from "../../Pages/index";
import Profile from "../../Pages/Staff/Profile";
import StaffCalendar from "../../Pages/Staff/StaffCalendar";
import StaffComplaints from "../../Pages/Staff/StaffComplaints";
import StaffResignations from "../../Pages/Staff/StaffResignations";
import StaffProjects from "../../Pages/Staff/StaffProjects";
import StaffHelpdesk from "../../Pages/Staff/StaffHelpdesk";
import StaffPolicies from "../../Pages/Staff/StaffPolicies";
import StaffDisciplinary from "../../Pages/Staff/StaffDisciplinary";
import ViewStaffAttendance from "../../Pages/Staff/ViewStaffAttendance";
import PrivateRoute from '../../Pages/Login/PrivateRoute';
import StaffMonthlyReport from "../../Pages/Staff/StaffMonthlyReport";
import ViewStaffMonthlyReports from "../../Pages/Staff/ViewStaffMonthlyReports";
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<PrivateRoute><StaffDashboard /></PrivateRoute>} />
        <Route path="/Demo" element={<PrivateRoute><Demo /></PrivateRoute>} />

        <Route path="/StaffAttendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
        <Route path="/ViewStaffAttendance" element={<PrivateRoute><ViewStaffAttendance /></PrivateRoute>} />
        <Route path="/StaffMonthlyReports" element={<PrivateRoute><StaffMonthlyReport /></PrivateRoute>} />
        <Route path="/ViewStaffMonthlyReports" element={<PrivateRoute><ViewStaffMonthlyReports /></PrivateRoute>} />



        <Route path="/StaffProfile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/StaffCalendar" element={<PrivateRoute><StaffCalendar /></PrivateRoute>} />
        <Route path="/StaffComplaints" element={<PrivateRoute><StaffComplaints /></PrivateRoute>} />
        <Route path="/StaffResignations" element={<PrivateRoute><StaffResignations /></PrivateRoute>} />
        <Route path="/StaffProjects" element={<PrivateRoute><StaffProjects /></PrivateRoute>} />
        <Route path="/StaffHelpdesk" element={<PrivateRoute><StaffHelpdesk /></PrivateRoute>} />
        <Route path="/Staffpolicies" element={<PrivateRoute><StaffPolicies /></PrivateRoute>} />
        <Route path="/StaffDisciplinary" element={<PrivateRoute><StaffDisciplinary /></PrivateRoute>} />
      </Routes>
    </div>
  );
};
export default Staff;
