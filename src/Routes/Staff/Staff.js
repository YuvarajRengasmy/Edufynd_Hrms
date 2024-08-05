import React from "react";
import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../../Pages/Staff/Dashboard";
import Attendance from "../../Pages/Staff/Attendance";
import Demo from "../../Pages/index";
import Profile from "../../Pages/Staff/Profile";
import StaffCalendar from "../../Pages/Staff/StaffCalendar";
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/StaffAttendance" element={<Attendance />} />
        <Route path="/StaffProfile" element={<Profile />} />
        <Route path="/StaffCalendar" element={<StaffCalendar />} />
      </Routes>
    </div>
  );
};
export default Staff;
