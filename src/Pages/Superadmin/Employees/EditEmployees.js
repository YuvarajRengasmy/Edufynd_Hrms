import React from "react";
import Navbar from "../../../Components/Navbar";
import SuperadminSidebar from "../../../Components/SuperadminSidebar";
import { Link } from "react-router-dom";
import Select from "react-select";
export const EditEmployees = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div
        className="container-fluid"
        style={{ fontFamily: "Inter sans-serif", fontSize: "14px" }}
      >
        <div className="row">
          <div className="col-lg-3">
            <SuperadminSidebar />
          </div>
          <div className="col-lg-9">
            <div className="content-header ">
              <div className=" container-fluid">
                <form>
                  <div className="row">
                    <div className="col-xl-12 ">
                      <div className="card my-4 border-0 rounded-0 shadow-sm p-3 position-relative">
                        <div
                          className="card-header mt-3 border-0 rounded-0 position-absolute top-0 start-0"
                          style={{ background: "#7267ef", color: "#fff" }}
                        >
                          <h5 className="text-center text-capitalize p-1">
                            Edit Employee Details
                          </h5>
                        </div>

                        <div className="card-body mt-2 ">
                          <div className="row gy-3 gx-5 ">
                            <div className="position-relative d-inline-block">
                              <img
                                className="img-fluid rounded-circle img-thumbnail mx-auto d-block"
                                src={"https://via.placeholder.com/128"}
                                alt="student-image"
                                style={{ width: "8rem", height: "8rem" }}
                              />
                              <label
                                htmlFor="fileInputImage"
                                className="position-absolute fs-6 rounded-circle "
                                style={{
                                  cursor: "pointer",
                                  bottom: "5%",
                                  left: "53.5%",
                                  transform: "translate(-20%, 20%)",
                                  color: "#0f2239",
                                }}
                              >
                                <i className="fas fa-camera"></i>
                              </label>
                              <input
                                name="photo"
                                id="fileInputImage"
                                type="file"
                                accept="image/*"
                                className="form-control border-0 text-dark bg-transparent"
                                style={{
                                  display: "none",

                                  fontSize: "12px",
                                }}
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Full Name<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control rounded-1  "
                                placeholder="Example John Doe "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="empName"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                DOB<span className="text-danger">*</span>
                              </label>

                              <input
                                type="date"
                                className="form-control rounded-1 text-uppercase "
                                placeholder="Enter  DOB "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "11px",
                                }}
                                name="dob"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Role/Designation
                                <span className="text-danger">*</span>
                              </label>

                              <input
                                type="text"
                                className="form-control rounded-1  "
                                placeholder="Example Student Counsellor "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="designation"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                DOJ <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "11px",
                                }}
                                className="form-control text-uppercase rounded-1"
                                placeholder="Enter  DOJ "
                                name="doj"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 ">
                              <label style={{ color: "#231F20" }}>
                                Reporting Manager
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control rounded-1 "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                placeholder="Example Jane Doe"
                                name="reportingManager"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Shift Timing
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 10.00 AM - 07.00 PM"
                                name="shiftTiming"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Probation Duration
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 6 Months"
                                name="probationDuration"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Official Mail
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control rounded-1 "
                                placeholder="Example jay.j@afynd.com "
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="email"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Team <span className="text-danger">*</span>
                              </label>
                              <select
                                name="team"
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

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Staff List
                                <span className="text-danger">*</span>
                              </label>
                              <Select
                                isMulti
                                placeholder="Select Staff"
                                name="staffList"
                                
                                styles={{
                                  fontSize: "10px",
                                }}
                              ></Select>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }} className="">
                                Personal Mail ID
                              </label>
                              <input
                                type="text"
                                name="personalMail"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example johndoe123@gmail.com"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Personal Contact No
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 123-456-789"
                                name="mobileNumber"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }} className="">
                                Emergency Contact
                              </label>
                              <input
                                type="number"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 123-456-789"
                                name="emergencyContactNo"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Address 1 <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 17/3A2, Gandhi St,"
                                name="address"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Address 2 <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Alwartirunagar, Chennai"
                                name="address2"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Pincode <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example 632001"
                                name="pin"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Country <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example India"
                                name="country"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                State <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Tamil Nadu"
                                name="state"
                              />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                City <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                className="form-control rounded-1"
                                placeholder="Example Chennai"
                                name="city"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
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
                              >
                                <option value="">Select Id Apporval</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Status <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-select   rounded-1"
                                name="status"
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
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                Privileges/Rights
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control rounded-1"
                                placeholder="Example Employment..."
                                style={{
                                  backgroundColor: "#fff",

                                  fontSize: "12px",
                                }}
                                name="privileges"
                              />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
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
                              >
                                <option>Select Company Assets</option>
                                <option value="companyAssests">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>

                          
                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label style={{ color: "#231F20" }}>
                                  Laptop Assets
                                  <span className="text-danger">*</span>
                                </label>
                                <select
                                  name="laptopName"
                                  className="form-select   rounded-1"
                                  style={{
                                    backgroundColor: "#fff",

                                    fontSize: "12px",
                                  }}
                                >
                                  <option>Select Laptop Assets</option>
                                  <option value="labtopAssets">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                             
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                  <label style={{ color: "#231F20" }}>
                                    Brand Name
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control rounded-1"
                                    placeholder="Example Apple"
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example MacBook Air"
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example IPv4 192.168.1.1 "
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example Afynd01"
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example G7$kL!8mQz@1wXp^"
                                    style={{
                                      backgroundColor: "#fff",

                                      fontSize: "12px",
                                    }}
                                    name="loginPassword"
                                  />
                                </div>
                             

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label style={{ color: "#231F20" }}>
                                  Mobile Assets
                                  <span className="text-danger">*</span>
                                </label>
                                <select
                                  name="mobileName"
                                  className="form-select   rounded-1"
                                  style={{
                                    backgroundColor: "#fff",

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

                            
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                  <label style={{ color: "#231F20" }}>
                                    Brand Name
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control rounded-1"
                                    placeholder="Example  Samsung"
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example 356938035643209"
                                    style={{
                                      backgroundColor: "#fff",

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
                                    className="form-control rounded-1"
                                    placeholder="Example 123-456-789"
                                    style={{
                                      backgroundColor: "#fff",

                                      fontSize: "12px",
                                    }}
                                    name="phoneNumber"
                                  />
                                </div>
                              
                           

                            
                              <div className="text-end">
                                <Link
                                  to="/SAListEmployees"
                                  style={{
                                    backgroundColor: "#231F20",

                                    fontSize: "12px",
                                  }}
                                  className="btn btn-cancel border-0 fw-semibold text-uppercase text-white px-4 py-2 m-2"
                                >
                                  Cancel
                                </Link>
                                <button
                                  style={{
                                    backgroundColor: "#7267ef",

                                    fontSize: "12px",
                                  }}
                                  type="submit"
                                  className="btn btn-save border-0 fw-semibold text-uppercase text-white px-4 py-2  m-2"
                                >
                                  Submit
                                </button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditEmployees;
