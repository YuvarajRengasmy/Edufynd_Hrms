import React from 'react'
import Navbar from '../../Components/StaffNavbar'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
export const StaffMonthlyReport = () => {
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
                            <label  class="form-label">Employee</label>
                            <select class="form-select rounded-1 text-muted"  style={{fontSize:'12px'}}>
  <option selected style={{fontSize:'12px'}}> Select Employee</option>
  <option value="1" style={{fontSize:'12px'}}>One</option>
  <option value="2" style={{fontSize:'12px'}}>Two</option>
  <option value="3" style={{fontSize:'12px'}}>Three</option>
</select>
                          
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
                            <label  class="form-label">Date</label>
                            <input type="date" class="form-control rounded-1 text-uppercase text-muted" id="exampleFormControlInput1" placeholder="Example 07/08/2024" style={{fontSize:'12px'}}/>
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