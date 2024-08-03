import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login/Login'
import Department from '../../Pages/Superadmin/Department'
import SADashBoard from '../../Pages/Superadmin/SADashBoard';
import Policies from '../../Pages/Superadmin/Policies';
import Attendance from '../../Pages/Superadmin/Attendance';
import ListEmployees from '../../Pages/Superadmin/Employees/ListEmployees';
import AddEmployees from '../../Pages/Superadmin/Employees/AddEmployees';
import EditEmployees from '../../Pages/Superadmin/Employees/EditEmployees';
import ViewEmployees from '../../Pages/Superadmin/Employees/ViewEmployees';
import Payroll from '../../Pages/Superadmin/Payroll';
export const Superadmin = () => {
  return (
    <div>
       
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/SADashboard' element={<SADashBoard/>}/>
            <Route path='/SADepartment' element={<Department/>}/>
            <Route path='/SAPolicies' element={<Policies/>}/>
            <Route path='/SAAttendance' element={<Attendance/>}/>

            <Route path='/SAListEmployees' element={<ListEmployees/>}/>
            <Route path='/SAAddEmployees' element={<AddEmployees/>}/>
            <Route path='/SAEditEmployees' element={<EditEmployees/>}/>
            <Route path='/SAViewEmployees' element={<ViewEmployees/>}/>

            <Route path='/SAPayroll' element={<Payroll/>}/>
        </Routes>
       
    </div>
  )
}
export default Superadmin