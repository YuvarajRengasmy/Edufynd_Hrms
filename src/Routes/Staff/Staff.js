import React from 'react'
import {Routes,Route } from 'react-router-dom'
import StaffDashboard from '../../Pages/Staff/Dashboard'
export const Staff = () => {
  return (
    <div>
              
        <Routes>
            <Route path='/StaffDashboard' element={<StaffDashboard/>}/>
        </Routes>
        
    </div>
  )
}
export default Staff