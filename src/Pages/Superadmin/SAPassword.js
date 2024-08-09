import React from 'react'
import SuperadminSidebar from '../../Components/SuperadminSidebar'
import Navbar from '../../Components/Navbar'
export const SAPassword = () => {
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
                    <SuperadminSidebar/>
                </div>
                <div className='col-lg-9'>
                    <div className='container'>
                    <div className="card border-0 mb-3">
                        <div className="card-header bg-white">
                          <h6 className="h6 fw-semibold text-capitalize float-start">
                            Change Password
                          </h6>
                        </div>
                        <div className="card-body p-4">
                          <form>
                          <div class=" mb-3">
                          <label  class="form-label">Email address</label>
  
  <input type="text" class="form-control rounded-1 text-muted" placeholder="Example john123@gmail.com"  style={{fontSize:'12px'}}/>
</div>
                            <button
                              className="btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end ms-3"
                              style={{ backgroundColor: "#7267ef", color: "#fff" }}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end"
                              style={{ backgroundColor: "#231f20", color: "#fff" }}
                            >
                              Cancel
                            </button>
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
export default SAPassword

