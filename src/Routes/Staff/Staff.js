import React from "react";
import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../../Pages/Staff/Dashboard";
import Attendance from "../../Pages/Staff/Attendance";
import Demo from "../../Pages/index";
import Profile from "../../Pages/Staff/Profile";
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/StaffAttendance" element={<Attendance />} />
        <Route path="/StaffProfile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default Staff;
