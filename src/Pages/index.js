// import React, { useState, useEffect } from "react";
// import Sidebar from "../../../Components/SuperadminSidebar";
// import Navbar from "../../../Components/Navbar";
// import { useLocation } from "react-router-dom";
// import { getSingleStaff } from "../../../Api/SuperAdmin/Employees";
// import { savePayroll, getallPayroll, deletePayroll, updatePayroll } from '../../../Api/SuperAdmin/Payroll';

// export const ViewStaff = () => {
//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get("id");

//   const [payroll, setPayroll] = useState({
//     allowances: [{ type: "", amount: null}],
//     deductions: [{ type: "", amount: null }],
//     uploadDocument: "",
//   });

//   const [staff, setStaff] = useState([]);

//   useEffect(() => {
//     getStaffDetails();
//   }, []);

//   const getStaffDetails = () => {
//     getSingleStaff(id)
//       .then((res) => {
//         console.log(res);
//         setStaff(res?.data?.result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleInputChange = (e, index, type) => {
//     const { name, value } = e.target;
//     const updatedList = [...payroll[type]];
//     updatedList[index][name] = value;
//     setPayroll({ ...payroll, [type]: updatedList });
//   };

//   const addEntry = (type) => {
//     setPayroll({
//       ...payroll,
//       [type]: [...payroll[type], { type: "", amount: "" }]
//     });
//   };

//   const removeEntry = (index, type) => {
//     const updatedList = payroll[type].filter((_, i) => i !== index);
//     setPayroll({ ...payroll, [type]: updatedList });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     savePayroll(payroll, id)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-3" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
//             <Sidebar />
//           </div>

//           <div className="col-lg-9" style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}>
//             <div className="content-header">
//               <div className="container-fluid">
//                 <h2 className="mb-4 text-center">Staff Details</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className='card border-0 mb-3'>
//                         <div className='card-header bg-white'>
//                           <h6 className='h6 fw-semibold text-capitalize float-start'>Allowances</h6>
//                         </div>
//                         <div className='card-body p-4'>
//                           {payroll.allowances.map((allowance, index) => (
//                             <div key={index} className="mb-3">
//                               <input
//                                 type="text"
//                                 name="type"
//                                 value={allowance.type}
//                                 onChange={(e) => handleInputChange(e, index, "allowances")}
//                                 className="form-control rounded-1"
//                                 placeholder="Allowance Type"
//                               />
//                               <input
//                                 type="text"
//                                 name="amount"
//                                 value={allowance.amount}
//                                 onChange={(e) => handleInputChange(e, index, "allowances")}
//                                 className="form-control rounded-1 mt-2"
//                                 placeholder="Amount"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeEntry(index, "allowances")}
//                                 className="btn btn-danger mt-2"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           ))}
//                           <button
//                             type="button"
//                             onClick={() => addEntry("allowances")}
//                             className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1'
//                             style={{ backgroundColor: '#7267ef' }}
//                           >
//                             <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add Allowance
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='col-md-6'>
//                       <div className='card border-0 mb-3'>
//                         <div className='card-header bg-white'>
//                           <h6 className='h6 fw-semibold text-capitalize float-start'>Deductions</h6>
//                         </div>
//                         <div className='card-body p-4'>
//                           {payroll.deductions.map((deduction, index) => (
//                             <div key={index} className="mb-3">
//                               <input
//                                 type="text"
//                                 name="type"
//                                 value={deduction.type}
//                                 onChange={(e) => handleInputChange(e, index, "deductions")}
//                                 className="form-control rounded-1"
//                                 placeholder="Deduction Type"
//                               />
//                               <input
//                                 type="text"
//                                 name="amount"
//                                 value={deduction.amount}
//                                 onChange={(e) => handleInputChange(e, index, "deductions")}
//                                 className="form-control rounded-1 mt-2"
//                                 placeholder="Amount"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeEntry(index, "deductions")}
//                                 className="btn btn-danger mt-2"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           ))}
//                           <button
//                             type="button"
//                             onClick={() => addEntry("deductions")}
//                             className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1'
//                             style={{ backgroundColor: '#7267ef' }}
//                           >
//                             <i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add Deduction
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className='card border-0 mb-3'>
//                         <div className='card-header bg-white'>
//                           <h6 className='h6 fw-semibold text-capitalize float-start'>Upload Documents</h6>
//                         </div>
//                         <div className='card-body p-4'>
//                           <input
//                             type="file"
//                             className="form-control rounded-1"
//                             onChange={(e) => setPayroll({ ...payroll, uploadDocument: e.target.files[0] })}
//                             placeholder="Example file.jpg"
//                           />
//                           <button
//                             type="button"
//                             className="btn btn-sm text-uppercase px-4 py-2 border-0 fw-semibold float-end text-white"
//                             style={{ backgroundColor: '#231f20' }}
//                           >
//                             Submit Document
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <button
//                         type="submit"
//                         className="btn btn-sm text-uppercase px-4 py-2 border-0 fw-semibold float-end text-white"
//                         style={{ backgroundColor: '#231f20' }}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//                 {/* Staff Details Section */}
//                 <div className="col-md-6 mb-3">
//                   <div className="card border-0 mb-3">
//                     <div className="card-body text-center">
//                       <img
//                         src={
//                           staff?.photo
//                             ? staff?.photo
//                             : "https://via.placeholder.com/150"
//                         }
//                         alt="Profile Photo"
//                         className="img-fluid rounded-circle img-thumbnail mb-3"
//                         style={{ width: "150px", height: "150px" }}
//                       />
//                       <h5 className="staff-name">{staff?.empName}</h5>
//                       <p className="card-text text-muted">{staff?.designation}</p>
//                       <div className="d-flex justify-content-center">
//                         <a href={`mailto:${staff?.email}`} className="btn btn-primary btn-sm me-2">
//                           <i className="fas fa-envelope"></i> Email {staff?.email}
//                         </a>
//                         <a href={`tel:${staff?.mobileNumber}`} className="btn btn-secondary btn-sm">
//                           <i className="fas fa-phone-alt"></i> Call {staff?.mobileNumber}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Personal and Professional Information Sections */}
//                 {/* ... other details here ... */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewStaff;
