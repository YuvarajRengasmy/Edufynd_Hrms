import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/SuperadminSidebar";
import Navbar from "../../../Components/Navbar";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleStaff } from "../../../Api/SuperAdmin/Employees";
import { savePayroll } from "../../../Api/SuperAdmin/Payroll";

export const ViewStaff = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const initialState = {
    houseRent: 0,
    conveyance: 0,
    otherAllowance: 0,
    taxDeduction: 0,
    totalDeduction: 0,
    uploadDocument: 0,
    allowance: [{ name: "", amount:0 }],
    deduction: [{ title: "", amount: 0}],
  };

  const initialStateError = {
    houseRentError: "",
    conveyanceError: "",
    otherAllowanceError: "",
    taxDeductionError: "",
    totalDeductionError: "",
    uploadDocumentError: "",
    additionalComponentsError: "",
  };

  const [payrollError, setPayrollError] = useState(initialStateError);
  const [payroll, setPayroll] = useState(initialState);
  const [staff, setStaff] = useState({});

  useEffect(() => {
    getStaffDetails();
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
  const handleValidatePayroll = (data) => {
    const errors = {};

    if (!data.houseRent) {
      errors.houseRentError = "House Rent Allowance is required";
    }

    if (!data.conveyance) {
      errors.conveyanceError = "Conveyance Allowance is required";
    }

    if (!data.otherAllowance) {
      errors.otherAllowanceError = "Other Allowance is required";
    }

    if (!data.taxDeduction) {
      errors.taxDeductionError = "Tax Deduction is required";
    }

    if (!data.totalDeduction) {
      errors.totalDeductionError = "Total Deduction is required";
    }
    return errors;
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
      ? { name: "", amount: 0}
      : { title: "", amount: 0 };
    setPayroll({ ...payroll, [listName]: [...payroll[listName], newEntry] });
  };

  const removeEntry = (index, listName) => {
    const updatedList = payroll[listName].filter((_, i) => i !== index);
    setPayroll({ ...payroll, [listName]: updatedList });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayrollError({ ...payrollError, ...handleValidatePayroll(payroll) });

    savePayroll(payroll, id)
      .then((res) => {  
        toast.success(res?.data?.message);
        getStaffDetails();

      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
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
        <div className="row">
          <div className="col-lg-3" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
            <Sidebar />
          </div>
          <div className="col-lg-9" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
            <div className="content-header">
              <div className="container-fluid">
                <h2 className="mb-4 text-center">Staff Details</h2>
                <form onSubmit={handleSubmit}>
                <div className="row">
                 
                    <div className="col-md-6">
                      <div className="card border-0 mb-3">
                        <div className="card-header bg-white">
                          <h6 className="h6 fw-semibold text-capitalize float-start">Allowances</h6>
                        </div>
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <label className="form-label">House Rent Allowance</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="houseRent"
                              value={payroll.houseRent}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                            {payrollError.houseRentError && (
                              <span className="text-danger">{payrollError.houseRentError}</span>
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
                            {payrollError.conveyanceError && (
                              <span className="text-danger">{payrollError.conveyanceError}</span>
                            )}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Other Allowances</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="otherAllowance"
                              value={payroll.otherAllowance}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                            {payrollError.otherAllowanceError && (
                              <span className="text-danger">{payrollError.otherAllowanceError}</span>
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
                      <div className="card border-0 mb-3">
                        <div className="card-header bg-white">
                          <h6 className="h6 fw-semibold text-capitalize float-start">Deductions</h6>
                        </div>
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <label className="form-label">Total Deduction</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="totalDeduction"
                              value={payroll.totalDeduction}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                            {payrollError.totalDeduction && <span className="text-danger">{payrollError.totalDeduction}</span>}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Tax Deductions</label>
                            <input
                              type="number"
                              className="form-control rounded-1"
                              name="taxDeduction"
                              value={payroll.taxDeduction}
                              onChange={handleInputChange}
                              placeholder="Example 25nullnull"
                              style={{ fontSize: "12px" }}
                            />
                            {payrollError.taxDeduction && (
                              <span className="text-danger">{payrollError.taxDeduction}</span>
                            )}
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
                      <button
                        type="submit"
                        className="btn btn-sm text-uppercase px-4 py-2 border-0 fw-semibold float-end text-white"
                        style={{ backgroundColor: "#231f20" }}
                      >
                        Submit
                      </button>
                    </div>
                 
                </div>
                </form>
              </div>
              <div className="container-fluid">
                <div className="row">
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
                    <div className="card border-0 mb-3">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Personal Information</h5>
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
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 mb-3">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0">Bank Details</h5>
                      </div>
                      <div className="card-body">
                        <p><i className="fas fa-bank me-2"></i><strong>Bank Name:</strong> {staff?.bankName}</p>
                        <p><i className="fas fa-credit-card me-2"></i><strong>Account Number:</strong> {staff?.accountNumber}</p>
                        <p><i className="fas fa-sort-numeric-up me-2"></i><strong>IFSC Code:</strong> {staff?.ifscCode}</p>
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
