import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/SuperadminSidebar";
import Navbar from "../../../Components/Navbar";
import { useLocation } from "react-router-dom";
import { getSingleStaff } from "../../../Api/SuperAdmin/Employees";

export const ViewStaff = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getStaffDetails();
  }, []);

  const getStaffDetails = () => {
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
      <div className="container-fluid">
      <div className="row ">
        <div  className="col-lg-2"
            style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }} >
         
            <Sidebar />
          </div>

          <div
            className="col-lg-10"
            style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}
          >
          <div className="content-header">
            <div className="container-fluid ">
            <h2 className="mb-4 text-center">Staff Details</h2>
              <div className="row">
              <div className='col-md-6'>
                                    <div className='card border-0  mb-3'>
                                        <div className='card-header bg-white'>
                                            <h6 className='h6 fw-semibold text-capitalize float-start'>Allowances</h6>
                                        </div>
                                        <div className='card-body p-4'>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">House Rent Allowances</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Conveyance</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Other Allowances</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <button className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1' style={{ backgroundColor: '#7267ef' }}><i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add</button>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='card border-0   mb-3'>
                                        <div className='card-header bg-white'>
                                            <h6 className='h6 fw-semibold text-capitalize float-start'>Deductions</h6>
                                        </div>
                                        <div className='card-body p-4'>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Provident Fund</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Tax Deductions</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <button className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1' style={{ backgroundColor: '#7267ef' }}><i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add</button>
                                            </form>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm text-uppercase px-4 py-2 border-0 fw-semibold float-end text-white"style={{backgroundColor:'#231f20'}}>Submit</button>
                                </div>
                                <div className="col-md-6 mb-3">
                  <div className="card border-0 mb-3">
                    <div className="card-header bg-white">
                      <h6 className="h6 fw-semibold text-capitalize float-start">
                        Total Salary Details
                      </h6>
                    </div>
                    <div className="card-body p-4">
                      <form>
                        <div className="row mb-3">
                          <div className="col-6 fw-bold">
                            <i className="fas fa-id-badge"></i> Gross Salary:
                          </div>
                          <div className="col-6">18,000</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6 fw-bold">
                            <i className="fas fa-id-badge"></i> Total
                            Deductions:
                          </div>
                          <div className="col-6">500</div>
                </div>
                <div className="row mb-3">
                          <div className="col-6 fw-bold">
                            <i className="fas fa-id-badge"></i> Net Salary:
                          </div>
                          <div className="col-6">17,500</div>
                        </div>
               
                </form>
                </div>
                </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card border-0 mb-3">
                    <div className="card-header bg-white">
                      <h6 className="h6 fw-semibold text-capitalize float-start">
                       Documents
                      </h6>
                    </div>
                    <div className="card-body p-4">
                      <form>
                      <div className="mb-3">
  <label  className="form-label">Upload Documents</label>
  <input type="file" className="form-control rounded-1"  placeholder="Example file.jpg" style={{fontSize:'12px'}}/>
  <div className="my-3"></div>
  <button className="btn btn-sm text-uppercase px-4 py-2 border-0 fw-semibold float-end text-white"style={{backgroundColor:'#231f20'}}>Submit</button>
</div>
                        
               
                </form>
                </div>
                </div>
                </div>
                                <div className='col-md-6'>
                  <div className="card border-0  mb-3">
                    <div className="card-body text-center">
                      <img
                        src={
                          staff?.photo
                            ? staff?.photo
                            : "https://via.placeholder.com/150"
                        }
                        alt="Profile Photo"
                        className="img-fluid rounded-circle img-thumbnail  mb-3"
                        style={{ width: "150px", height: "150px" }}
                      />
                      <h5 className="staff-name">{staff?.empName}</h5>
                      <p className="card-text text-muted">{staff?.designation}</p>
                      <div className="d-flex justify-content-center">
                        <a href="#" className="btn btn-primary btn-sm me-2">
                          <i className="fas fa-envelope"></i> Email {staff?.email}
                        </a>
                        <a href="#" className="btn btn-secondary btn-sm">
                          <i className="fas fa-phone-alt"></i> Call {staff?.mobileNumber}
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
                
                

                <div className="col-md-6 mb-3">
                  <div className="card border-0  mb-3">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-0">Personal Information</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            <i className="fas fa-birthday-cake me-2"></i>
                            <strong>DOB:</strong> {staff?.dob}
                          </p>
                          <p>
                            <i className="fas fa-calendar-day me-2"></i>
                            <strong>DOJ:</strong> {staff?.doj}
                          </p>
                          <p>
                            <i className="fas fa-user-tie me-2"></i>
                            <strong>Reporting Manager:</strong> {staff?.reportingManager}
                          </p>
                          <p>
                            <i className="fas fa-clock me-2"></i>
                            <strong>Shift Timing:</strong> {staff?.shiftTiming}
                          </p>
                          <p>
                            <i className="fas fa-envelope me-2"></i>
                            <strong>Official Mail:</strong> {staff?.email}
                          </p>
                          <p>
                            <i className="fas fa-mobile-alt me-2"></i>
                            <strong>Personal Contact No:</strong> {staff?.mobileNumber}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            <i className="fas fa-home me-2"></i>
                            <strong>Address:</strong> {staff?.address}
                          </p>
                          <p>
                            <i className="fas fa-phone-alt me-2"></i>
                            <strong>Emergency Contact:</strong> {staff?.emergencyContact}
                          </p>
                          <p>
                            <i className="fas fa-id-card me-2"></i>
                            <strong>ID Card:</strong> {staff?.idCard}
                          </p>
                          <p>
                            <i className="fas fa-user-check me-2"></i>
                            <strong>Status:</strong>  {staff?.activeInactive}
                          </p>
                          <p>
                            <i className="fas fa-briefcase me-2"></i>
                            <strong>Job Description:</strong> {staff?.jobDescription}
                          </p>
                          <p>
                            <i className="fas fa-calendar-check me-2"></i>
                            <strong>Eligibility for Casual Leave:</strong> {staff?.areTheyEligibleForCasualLeave}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                </div>

                
                <div className="col-md-6 mb-3">
                <div className="card mb-3 border-0">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-0">Professional Information</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            <i className="fas fa-laptop me-2"></i>
                            <strong>Company Assets:</strong> {staff?.companyAssets}
                          </p>
                          <p>
                            <i className="fas fa-mobile-alt me-2"></i>
                            <strong>Mobile Brand Name:</strong> {staff?.brandName}
                          </p>
                          <p>
                            <i className="fas fa-barcode me-2"></i>
                            <strong>IMEI:</strong> {staff?.imei}
                          </p>
                          <p>
                            <i className="fas fa-phone me-2"></i>
                            <strong>Phone Number:</strong> {staff?.phoneNumber}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            <i className="fas fa-laptop me-2"></i>
                            <strong>Laptop Brand Name:</strong> {staff?.brand}
                          </p>
                          <p>
                            <i className="fas fa-cogs me-2"></i>
                            <strong>Model:</strong> {staff?.modelName}
                          </p>
                          <p>
                            <i className="fas fa-network-wired me-2"></i>
                            <strong>IP Address:</strong> 192.168.1.1
                          </p>
                          <p>
                            <i className="fas fa-user me-2"></i>
                            <strong>Username:</strong> {staff?.userName}
                          </p>
                          <p>
                            <i className="fas fa-key me-2"></i>
                            <strong>Password:</strong> {staff?.loginPassword}
                          </p>
                        </div>
                      </div>
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
  );
};

export default ViewStaff;
