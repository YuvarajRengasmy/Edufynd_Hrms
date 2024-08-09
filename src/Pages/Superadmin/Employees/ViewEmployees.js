import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/SuperadminSidebar";
import Navbar from "../../../Components/Navbar";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleStaff } from "../../../Api/SuperAdmin/Employees";
import { savePayroll,getViewStaffPayRoll } from "../../../Api/SuperAdmin/Payroll";
import { Link } from "react-router-dom";

export const ViewStaff = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const initialState = {
    basicAllowance: "",
    hra: "",
    conveyance: "",
    performanceDeduction:"",
    taxDeduction: "",
    pf: "",

    allowance: [{ name: "", amount:"" }],
    deduction: [{ title: "", amount:""}],
  };

  const initialStateErrors = {
    basicAllowance: { required: false},
    hra: { required: false},
    conveyance: { required: false},
    performanceDeduction:{ required: false},
    taxDeduction:{ required: false},
    pf: { required: false},
    allowance:{ required: false},
    deduction:{ required: false},
   
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [payroll, setPayroll] = useState(initialState);
  const [staff, setStaff] = useState({});
  const [pay,setPay]=useState({})
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    getStaffDetails();
    getViewStaffPayRollDetails();
  }, [id]);

  const getStaffDetails = () => {
    getSingleStaff(id)
      .then((res) => {
        setStaff(res?.data?.result || {});
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const   getViewStaffPayRollDetails = () => {
    getViewStaffPayRoll(id)
      .then((res) => {
        console.log("pay" ,res);
        setPay(res?.data?.result || {});
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleValidatePayroll = (data) => {
    let error = { ...initialStateErrors };

    if (data.basicAllowance === "") error.basicAllowance.required = true;
    if (data.hra === "") error.hra.required = true;
    if (data.conveyance === "") error.conveyance.required = true;
    if (data.taxDeduction === "") error.taxDeduction.required = true;
    if (data.pf === "") error.pf.required = true;
    return error;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayroll({ ...payroll, [name]: value });
  };

  const handleListInputChange = (e, index, listName) => {
    const { name, value } = e.target;
    const updatedList = [...payroll[listName]];
    updatedList[index][name] = value;
    setPayroll({ ...payroll, [listName]: updatedList });
  };
 
  
  const addEntry = (listName) => {
    const newEntry = listName === "allowance"
      ? { name: "", amount: null}
      : { title: "", amount: null };
    setPayroll({ ...payroll, [listName]: [...payroll[listName], newEntry] });
  };

  const removeEntry = (index, listName) => {
    const updatedList = payroll[listName].filter((_, i) => i !== index);
    setPayroll({ ...payroll, [listName]: updatedList });
  };

  const handleErrors = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const prop = obj[key];
        if (prop.required === true || prop.valid === true) {
          return false;
        }
      }
    }
    return true;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidatePayroll(payroll);
    setErrors(newError);
    setSubmitted(true);
 
  if (handleErrors(newError)) {
    const staffinData = {
      ...payroll,
      
      empName: staff.empName,
      staffId: staff._id,
      employeeId: staff?.employeeID,
      reportingManager: staff?.reportingManager,
      photo: staff?.photo,
      mobileNumber:staff?.mobileNumber,
      designation:staff?.designation,

    };
    savePayroll(staffinData)
      .then((res) => {  
        toast.success(res?.data?.message);
        setPayroll(initialState);
        getStaffDetails();

      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
    }
  };
  
  
  

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
            <Sidebar />
          </div>
          <div className="col-lg-9" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
            <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                <div className='col-md-6'>
                  <div className="card border-null  mb-3">
                    <div className="card-body text-center">
                      <img
                        src={
                          staff?.photo
                            ? staff?.photo
                            : "https://via.placeholder.com/15null"
                        }
                        alt="Profile Photo"
                        className="img-fluid rounded-circle img-thumbnail  mb-3"
                        style={{ width: "15nullpx", height: "15nullpx" }}
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
                    <div className="card border-null mb-3">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-null">Personal Information</h5>
                      </div>
                      <div className="card-body">
                        <p><i className="fas fa-birthday-cake me-2"></i><strong>DOB:</strong> {staff?.dob}</p>
                        <p><i className="fas fa-calendar-day me-2"></i><strong>DOJ:</strong> {staff?.doj}</p>
                        <p><i className="fas fa-user me-2"></i><strong>Gender:</strong> {staff?.gender}</p>
                        <p><i className="fas fa-phone me-2"></i><strong>Phone:</strong> {staff?.phone}</p>
                        <p><i className="fas fa-envelope me-2"></i><strong>Email:</strong> {staff?.email}</p>
                        <p><i className="fas fa-map-marker-alt me-2"></i><strong>Address:</strong> {staff?.address}</p>
                        <p><i className="fas fa-briefcase me-2"></i><strong>Department:</strong> {staff?.department}</p>
                        <p><i className="fas fa-calendar-alt me-2"></i><strong>Joining Date:</strong> {staff?.joiningDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                <div className="card mb-3 border-null">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-null">Professional Information</h5>
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
                              <div className="col-6">{pay?.grossSalary}</div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-6 fw-bold">
                                <i className="fas fa-id-badge"></i> Total Deductions:
                              </div>
                              <div className="col-6">{pay?.totalDeduction}</div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-6 fw-bold">
                                <i className="fas fa-id-badge"></i> Net Salary:
                              </div>
                              <div className="col-6">{pay?.netSalary}</div>
                            </div>
                           
                          </form>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <h2 className="mb-4 text-center">Staff Details</h2>
                <form onSubmit={handleSubmit}>
                <div className="row">
                 
                    <div className="col-md-6">
                      <div className="card border-null mb-3">
                        <div className="card-header bg-white">
                          <h6 className="h6 fw-semibold text-capitalize float-start">Allowances</h6>
                        </div>
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <label className="form-label">Basic Allowance</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="basicAllowance"
                              value={payroll.basicAllowance}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                          {errors.basicAllowance.required && (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              )}
                          </div>

                          <div className="mb-3">
                            <label className="form-label">HRA Allowance</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="hra"
                              value={payroll.hra}
                              onChange={handleInputChange}
                              placeholder="Example 2500 Basic Allowance"
                              style={{ fontSize: "12px" }}
                            />
                           {errors.hra.required && (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              )}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Conveyance</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="conveyance"
                              value={payroll.conveyance}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                           {errors.conveyance.required && (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              )}
                          </div>
                         
                          {payroll.allowance.map((allowance, index) => (
                            <div key={index} className="mb-3">
                              <input
                                type="text"
                                name="name"
                                value={allowance.name}
                                onChange={(e) => handleListInputChange(e, index, "allowance")}
                                className="form-label rounded-1"
                                style={{ fontSize: "12px" }}
                                placeholder="Allowance title"
                              />
                              <input
                                type="number"
                                name="amount"
                                value={allowance.amount}
                                onChange={(e) => handleListInputChange(e, index, "allowance")}
                                className="form-control rounded-1 mt-2"
                                style={{ fontSize: "12px" }}
                                placeholder="Amount"
                              />
                              <button
                                type="button"
                                onClick={() => removeEntry(index, "allowance")}
                                className="btn mt-2"
                              >
                                <i className="far fa-trash-alt text-danger me-1"></i>
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addEntry("allowance")}
                            className="btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1"
                            style={{ backgroundColor: "#7267ef" }}
                          >
                            <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border-null mb-3">
                        <div className="card-header bg-white">
                          <h6 className="h6 fw-semibold text-capitalize float-start">Deductions</h6>
                        </div>
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <label className="form-label"> Provident Fund</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="pf"
                              value={payroll.pf}
                              onChange={handleInputChange}
                              placeholder="Pf Ammount if type is not set, then set the value to 0"
                              style={{ fontSize: "12px" }}
                            />
                               {errors.pf.required && (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              )}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Professional Tax</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="taxDeduction"
                              value={payroll.taxDeduction}
                              onChange={handleInputChange}
                              placeholder="Example Basic Ammount 200"
                              style={{ fontSize: "12px" }}
                            />
                           {errors.taxDeduction.required && (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              )}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Performance Deduction</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="performanceDeduction"
                              value={payroll.performanceDeduction}
                              onChange={handleInputChange}
                              placeholder="Performance Deduction type is not set, then set the value to 0"
                              style={{ fontSize: "12px" }}
                            />
                          </div>
                          {payroll.deduction.map((deduction, index) => (
                            <div key={index} className="mb-3">
                              <input
                                type="text"
                                name="title"
                                value={deduction.title}
                                onChange={(e) => handleListInputChange(e, index, "deduction")}
                                className="form-label rounded-1"
                                style={{ fontSize: "12px" }}
                                placeholder="Deduction title"
                              />
                              <input
                                type="number"
                                name="amount"
                                value={deduction.amount}
                                onChange={(e) => handleListInputChange(e, index, "deduction")}
                                className="form-control rounded-1 mt-2"
                                style={{ fontSize: "12px" }}
                                placeholder="Amount"
                              />
                              <button
                                type="button"
                                onClick={() => removeEntry(index, "deduction")}
                                className="btn mt-2"
                              >
                                <i className="far fa-trash-alt text-danger me-1"></i>
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addEntry("deduction")}
                            className="btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1"
                            style={{ backgroundColor: "#7267ef" }}
                          >
                            <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add
                          </button>
                        </div>
                      </div>
                    
                    </div>
                    {/* <div className="col-md-6">
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
                                name="uploadDocument"
                                onChange={handleInputChange}
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
                      </div> */}
                     <div className="col-md-7">
                   
                      <button
                       type="submit"
                              className="btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end ms-3"
                              style={{ backgroundColor: "#7267ef", color: "#fff" }}
                            >
                              Update
                            </button>
                            <Link
                            to="/SAListEmployees"
                              className="btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end"
                              style={{ backgroundColor: "#231f20", color: "#fff" }}
                            >
                              Cancel
                            </Link>
                           
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

export default ViewStaff;
