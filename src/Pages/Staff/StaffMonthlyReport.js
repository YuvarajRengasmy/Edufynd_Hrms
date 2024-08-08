import React, { useState, useEffect } from "react";
import  Navbar  from '../../Components/StaffNavbar'
import  Sidebar  from '../../Components/Sidebar'
import { toast } from 'react-toastify';
import { getSingleStaff } from "../../Api/Staff/Dashboard";
import { getStaffId } from "../../Utils/storage";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const StaffMonthlyReport = () => {

    const [staff, setStaff] = useState([]);
    const [startDate, setStartDate] = useState(new Date());


    useEffect(() => {
      getStaffDetails();
    }, []);
  
    const getStaffDetails = () => {
      const id = getStaffId();
      getSingleStaff(id)
        .then((res) => {
          console.log(res);
          setStaff(res?.data?.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-3'>
                <Sidebar/>

            </div>
            <div className='col-lg-9'>
                <div className='container'>
                    <div className='card border-0 rounded-1'>
                        <div className='card-header border-0 bg-white'>
                            <h5 className='fw-semibold float-start'>Employee Monthly Report</h5>
                        </div>
                        <div className='card-body '>
                        <form>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                           
                            <input type="text" class="form-control rounded-1 text-uppercase text-muted mt-4" id="exampleFormControlInput1" value={staff?.empName} placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                          
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                            <label  class="form-label">Date</label>
                            <DatePicker
                           
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        className="form-control rounded-1 text-uppercase text-muted mt-4"
        placeholderText="MM/YYYY"
        style={{ fontSize: '12px' }}
      />
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                           
                         <Link to='/ViewStaffMonthlyReports' target='_blank' className='btn fw-semibold mt-4 px-3 py-2 border-0' style={{backgroundColor:'#7627ef',color:'#fff',fontSize:'12px'}}><i class="fa fa-search" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </form>
                        </div>
                   
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default StaffMonthlyReport