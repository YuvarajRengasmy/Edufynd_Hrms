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
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/Demo" element={<Demo />} />

        <Route path="/StaffAttendance" element={<Attendance />} />
        <Route path="/ViewStaffAttendance" element={<ViewStaffAttendance />} />



        <Route path="/StaffProfile" element={<Profile />} />
        <Route path="/StaffCalendar" element={<StaffCalendar />} />
        <Route path="/StaffComplaints" element={<StaffComplaints />} />
        <Route path="/StaffResignations" element={<StaffResignations />} />
        <Route path="/StaffProjects" element={<StaffProjects />} />
        <Route path="/StaffHelpdesk" element={<StaffHelpdesk />} />
        <Route path="/Staffpolicies" element={<StaffPolicies />} />
        <Route path="/StaffDisciplinary" element={<StaffDisciplinary />} />
      </Routes>
    </div>
  );
};
export default Staff;
