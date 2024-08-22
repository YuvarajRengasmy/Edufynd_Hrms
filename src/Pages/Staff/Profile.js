import React, { useState, useEffect } from "react";
import  Navbar  from '../../Components/StaffNavbar'
import  Sidebar  from '../../Components/Sidebar'
import { toast } from 'react-toastify';
import { getSingleStaff } from "../../Api/Staff/Dashboard";
import { getStaffId } from "../../Utils/storage";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Profile_image from "../../Assests/Images/Profile.jpg";
import { FaCameraRotate } from "react-icons/fa6";
import Select from "react-select";




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

  // const staffOption = staff.map((data) => ({
  //   value: data.empName,
  //   label: data.empName,
  // }));
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1.4783px solid rgba(11, 70, 84, 0.25)",
      borderRadius: "4.91319px",
      fontSize: "11px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#3B0051" : "#F2CCFF",
      ":hover": {
        color: "black",
      },
    }),
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
                  <div className="card mb-4 border-0 position-fixed">
                    <div className="card-body">
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
                                <small>{staff?.active}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group list-group-flush" id="myTab" role="tablist">
                        <div className='list-group-item list-group-item-action'>
                        <div className="row ">
                          <div className="col-6 fw-bold">
                         
                          Manager
                        
                          </div>
                          <div className="col-6">{staff?.reportingManager}</div>
                          
                        </div>
                        
                        </div>
                        <div className='list-group-item list-group-item-action'>
                        <div className="row ">
                          <div className="col-4 fw-bold">
                         
                          Email
                        
                          </div>
                          <div className="col-8" style={{ fontSize: "11px" }}>{staff?.email}</div>
                          
                        </div>
                        
                        </div>
                     
                       
                       
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
                  <div className="row">
                    <div className="col-xl-12 ">
                     
                       

                        
                          <div className="row gy-3 gx-5 ">
                           

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Full Name<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control rounded-1  "
                                placeholder="Example John Doe "
                                value={staff?.empName}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="empName"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                DOB<span className="text-danger">*</span>
                              </label>

                              <input
                                type="date"
                                className="form-control rounded-1 text-uppercase "
                                placeholder="Enter  DOB "
                                value={staff?.dob}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "11px",
                                }}
                                name="dob"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Role/Designation
                                <span className="text-danger">*</span>
                              </label>

                              <input
                                type="text"
                                value={staff?.designation}
                                className="form-control rounded-1  "
                                placeholder="Example Student Counsellor "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="designation"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                DOJ <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                value={staff?.doj}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "11px",
                                }}
                                className="form-control text-uppercase rounded-1"
                                placeholder="Enter  DOJ "
                                name="doj"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
                              <label style={{ color: "#231F20" }}>
                                Reporting Manager
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.reportingManager}
                                className="form-control rounded-1 "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                placeholder="Example Jane Doe"
                                name="reportingManager"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Shift Timing
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.shiftTiming}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 10.00 AM - 07.00 PM"
                                name="shiftTiming"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Probation Duration
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.probationDuration}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 6 Months"
                                name="probationDuration"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Official Mail
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.email}
                                className="form-control rounded-1 "
                                placeholder="Example jay.j@afynd.com "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="email"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Team <span className="text-danger">*</span>
                              </label>
                              <select
                                name="team"
                                value={staff?.team}
                                className="form-select  text-muted  rounded-1"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                              >
                                <option value={""}> Select Team</option>
                                <option value="team">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>

                            {staff.team === "team" && (
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <label style={{ color: "#231F20" }}>
                                  Staff List{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <Select
                                  isMulti
                                  placeholder="Select Staff"
                                  name="staffList"
                                  value={
                                    staff?.staffList
                                      ? staff?.staffList.map((staffList) => ({
                                          value: staffList,
                                          label: staffList,
                                        }))
                                      : null
                                  }
                                  styles={customStyles}
                                 
                                ></Select>
                              </div>
                            )}

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }} className="">
                                Personal Mail ID
                              </label>
                              <input
                                type="text"
                                name="personalMail"
                                value={staff?.personalMail}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example johndoe123@gmail.com"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Personal Contact No
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                value={staff?.mobileNumber}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 123-456-789"
                                name="mobileNumber"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }} className="">
                                Emergency Contact
                              </label>
                              <input
                                type="number"
                               value={staff?.emergencyContact} 
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 123-456-789"
                                name="emergencyContactNo"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Address 1 <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.address}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 17/3A2, Gandhi St,"
                                name="address"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Address 2 <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.address2}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Alwartirunagar, Chennai"
                                name="address2"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Pincode <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.pin}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 632001"
                                name="pin"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Country <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.country}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example India"
                                name="country"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                State <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.state}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Tamil Nadu"
                                name="state"
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                City <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.city}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Chennai"
                                name="city"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                ID Card <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-select   rounded-1"
                                name="idCard"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                value={staff?.idCard}
                              >
                                <option value="">Select Id Apporval</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Status <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-select   rounded-1"
                                name="status"
                                value={staff?.status}
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                              >
                                <option value="">Select Status Type</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Privileges/Rights
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={staff?.privileges}
                                className="form-control rounded-1"
                                placeholder="Example Employment..."
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="privileges"
                              />
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Company Assets
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                name="companyAssests"
                                className="form-select   rounded-1"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                value={staff?.companyAssests}
                              >
                                <option>Select Company Assets</option>
                                <option value="companyAssests">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>

                          
                            {staff.companyAssests === "companyAssests" && (
                              <>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                  <label style={{ color: "#231F20" }}>
                                    Laptop Assets{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    name="laptopName"
                                    value={staff?.laptopName}
                                   
                                    className="form-select form-select-lg rounded-2"
                                    style={{
                                      backgroundColor: "#fff",
                                      fontFamily: "Plus Jakarta Sans",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <option value={""}>
                                      {" "}
                                      Select Laptop Assets
                                    </option>
                                    <option value="labtopAssessts">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                                {staff.laptopName === "labtopAssessts" && (
                                  <div className="row g-3">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        Brand Name
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        value={staff?.brand}
                                        className="form-control rounded-2"
                                        placeholder="Example Apple"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="brand"
                                       
                                      />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        Model
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control rounded-2"
                                        placeholder="Example MacBook Air"
                                        value={staff?.modelName}
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="modelName"
                                       
                                      />
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        IP Address
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control rounded-2"
                                        placeholder="Example IPv4 192.168.1.1"
                                        value={staff?.ipAddress}
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="ipAddress"
                                       
                                      />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        UserName
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control rounded-2"
                                        value={staff?.userName}
                                        placeholder="Example Afynd01"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="userName"
                                        
                                      />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        Password
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control rounded-2"
                                        value={staff?.loginPassword}
                                        placeholder="Example G7$kL!8mQz@1wXp^"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="loginPassword"
                                       
                                      />
                                    </div>
                                  </div>
                                )}

                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                  <label style={{ color: "#231F20" }}>
                                    Mobile Assets
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    name="mobileName"
                                   
                                    value={staff?.mobileName}
                                    className="form-select form-select-lg rounded-2"
                                    style={{
                                      backgroundColor: "#fff",
                                      fontFamily: "Plus Jakarta Sans",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <option value={""}>
                                   
                                      Select Mobile Assets
                                    </option>
                                    <option value="mobileName">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                                {staff.mobileName === "mobileName" && (
                                  <div className="row g-3">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        Brand Name
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        value={staff?.brandName}
                                        className="form-control rounded-2"
                                        placeholder="Example  Samsung"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="brandName"
                                       
                                      />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        IMEI
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        value={staff?.imei}
                                        className="form-control rounded-2"
                                        placeholder="Example 356938035643209"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="imei"
                                       
                                      />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label style={{ color: "#231F20" }}>
                                        Phone Number
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="number"
                                        value={staff?.phoneNumber}
                                        className="form-control rounded-2"
                                        placeholder="Example 123-456-789"
                                        style={{
                                          backgroundColor: "#fff",
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "12px",
                                        }}
                                        name="phoneNumber"
                                       
                                      />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                           

                            
                             
                          </div>
                        
                     
                    </div>
                  </div>
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