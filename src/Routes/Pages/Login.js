import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
export const Superadmin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        
      </Routes>
    </div>
  );
};
export default Superadmin;
