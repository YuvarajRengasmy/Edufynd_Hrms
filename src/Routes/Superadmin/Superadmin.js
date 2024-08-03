import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login/Login'
import Department from '../../Pages/Superadmin/Department'
import SADashBoard from '../../Pages/Superadmin/SADashBoard';
import Policies from '../../Pages/Superadmin/Policies';
import Attendance from '../../Pages/Superadmin/Attendance';
export const Superadmin = () => {
  return (
    <div>
       
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/SADashboard' element={<SADashBoard/>}/>
            <Route path='/Department' element={<Department/>}/>
            <Route path='/Policies' element={<Policies/>}/>
            <Route path='/Attendance' element={<Attendance/>}/>
        </Routes>
       
    </div>
  )
}
export default Superadmin