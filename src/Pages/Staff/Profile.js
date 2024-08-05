import React from 'react'
import  Navbar  from '../../Components/Navbar'
import  Sidebar  from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import Profile_image from "../../Assests/Images/Profile.jpg";
import { FaCameraRotate } from "react-icons/fa6";
export const Profile = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={{ fontSize: "14px" }}>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div className="card mb-4 border-0">
                    <div className="card-body p-4">
                      <div className="card border-0 mb-0">
                        <div className="row g-0">
                          <div className="col-md-3">
                            <div className="position-relative">
                              <img
                                src={Profile_image}
                                className="img-fluid rounded-circle"
                                style={{ width: "5rem", height: "5rem" }}
                                alt="profile_image"
                              />
                              <div className="position-absolute bottom-0 end-0">
                                <FaCameraRotate />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body ms-4">
                              <h5 className="card-title mb-0">Gopinath</h5>
                              <p className="card-text mb-1">Full Stack Devloper </p>
                              <p className="text-bg-success d-inline px-3 py-1 text-capitalize fw-semibold rounded-1">
                                <small>Active</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group list-group-flush" id="myTab" role="tablist">
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action"
                        >
                          Manager
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action"
                        >
                          Email
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action  active"
                          id="Employee" data-bs-toggle="tab" href="#Employee" role="tab" aria-controls="Employee" aria-selected="true"
                        >
                          Employee Information
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action"
                        >
                          Documents
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action"
                        >
                          Change Password
                        </Link>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="col-md-7">
                  <div className="tab-pane fade show active" id="Employee" role="tabpanel" aria-labelledby="Employee">
                  <div className="card border-0 mb-3" >
                    <div className="card-header bg-white">
                      <h6 className="h6 fw-semibold text-capitalize float-start">
                        Employee Details
                      </h6>
                    </div>
                    <div className="card-body p-4">
                      <form>
                        
                       
                      </form>
                    </div>
                  </div>
                  </div>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile