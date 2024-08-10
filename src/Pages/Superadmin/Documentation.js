import React from 'react'
import SuperadminSidebar from '../../Components/SuperadminSidebar'
import Navbar from '../../Components/Navbar'

export const Documentation = () => {
  return (
    <div>
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
                                Documents
                              </h6>
                            </div>
                            <div className="card-body p-4">
                              <form>
                                <div className="mb-3">
                                  <label className="form-label">Document</label>
                                  <input
                                    type="file"
                                    className="form-control rounded-1"
                                    style={{ fontSize: "12px" }}
                                  />
                                </div>
                                <button
                                  className="btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1"
                                  style={{ backgroundColor: "#7267ef" }}
                                >
                                  <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add
                                </button>
                              </form>
                            </div>
                          </div>
                    </div>
               
                </div>
            </div>
        </div>

    
        </div>
  )
}
export default Documentation