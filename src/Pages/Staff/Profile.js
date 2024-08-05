import React, { useState, useEffect } from "react";
import  Navbar  from '../../Components/Navbar'
import  Sidebar  from '../../Components/Sidebar'
import { toast } from 'react-toastify';
import { getSingleStaff } from "../../Api/Staff/Dashboard";
import { getStaffId } from "../../Utils/storage";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Profile_image from "../../Assests/Images/Profile.jpg";
import { FaCameraRotate } from "react-icons/fa6";
export const Profile = () => {

  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

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
                                src={staff?.photo?staff?.photo:"https://via.placeholder.com/30"}
                                className="img-fluid rounded-circle"
                                style={{ width: "4rem", height: "4rem" }}
                                alt="profile_image"
                              />
                              <div className="position-absolute bottom-0 end-0">
                                <FaCameraRotate />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body ms-4">
                              <h5 className="card-title mb-0">{staff?.empName}</h5>
                              <p className="card-text mb-1">{staff?.designation}</p>
                              <p className="text-bg-success d-inline px-3 py-1 text-capitalize fw-semibold rounded-1">
                                <small>{staff?.status}</small>
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