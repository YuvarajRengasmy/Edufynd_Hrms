import React from "react";
import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../../Pages/Staff/Dashboard";
import Attendance from "../../Pages/Staff/Attendance";
export const Staff = () => {
  return (
    <div>
      <Routes>
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/StaffAttendance" element={<Attendance />} />
      </Routes>
    </div>
  );
};
export default Staff;
