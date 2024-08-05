import React from "react";
import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../../Pages/Staff/Dashboard";
import Attendance from "../../Pages/Staff/Attendance";
import Demo from "../../Pages/index";
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/StaffAttendance" element={<Attendance />} />
      </Routes>
    </div>
  );
};
export default Staff;
