import React, { useEffect, useState, useRef } from "react";
import Sortable from "sortablejs";
import { getallStaff, deleteStaff, updateStaff } from "../../Api/SuperAdmin/Employees";
import { Link } from "react-router-dom";
import SuperAdminSidebar from "../../Components/SuperadminSidebar";
import Navbar from "../../Components/Navbar";
import { FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export const ListEmployees = () => {
  const initialStateInputs = {
    description: "",
  };

  const initialStateErrors = {
    description: { required: false },
  };

  const handleValidation = (data) => {
    let error = { ...initialStateErrors };
    if (!data.description) {
      error.description.required = true;
    }
    return error;
  };

  const [inputs, setInputs] = useState(initialStateInputs);
  const [filter, setFilter] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(initialStateErrors);
  const [staff, setStaff] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const pageSize = 10;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: 0,
  });

  useEffect(() => {
    getAllStaffDetails();
  }, [pagination.from, pagination.to]);

  const getAllStaffDetails = () => {
    const data = {
      limit: 10,
      page: pagination.from,
    };

    getallStaff(data)
      .then((res) => {
        setStaff(res?.data?.result || []);
        setPagination({ ...pagination, count: res?.data?.result?.staffCount || 0 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openPopup = (data) => {
    setOpen(true);
    setDeleteId(data._id); // Assuming 'data' contains the staff ID to delete
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  const deleteStaffData = () => {
    deleteStaff(deleteId)
      .then((res) => {
        toast.success(res?.data?.message);
        closePopup();
        getAllStaffDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleEditModule = (data) => {
    setInputs({ description: data.description || "" }); // Set the form inputs to the data of the item being edited
    setIsEditing(true);
    setEditId(data._id);
    setSubmitted(false);
    setErrors(initialStateErrors);
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
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Validate inputs and get errors
    const newError = handleValidation(inputs);
    setErrors(newError);
    setSubmitted(true);
  
    // If there are no validation errors
    if (handleErrors(newError)) {
      const data = {
        ...inputs,
        _id: editId, // Include the staff ID for editing
      };
  
      // Check if we are in edit mode
      if (isEditing) {
        // Update staff data
        updateStaff(data)
          .then((res) => {
            toast.success(res?.data?.message); // Display success message
            event.target.reset(); // Reset the form
            setInputs(initialStateInputs); // Reset inputs
            setErrors(initialStateErrors); // Reset errors
            setSubmitted(false); // Reset submission state
            closePopup(); // Close the dialog
            getAllStaffDetails(); // Refresh the staff list
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message); // Display error message
          });
      } else {
        // Handle case where isEditing is false (if necessary)
      }
    }
  };

  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;

    const sortable = new Sortable(table.querySelector("thead tr"), {
      animation: 150,
      swapThreshold: 0.5,
      handle: ".sortable-handle",
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;

        table.querySelectorAll("tbody tr").forEach((row) => {
          const cells = Array.from(row.children);
          row.insertBefore(cells[oldIndex], cells[newIndex]);
        });
      },
    });

    return () => {
      sortable.destroy();
    };
  }, []);

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
            <SuperAdminSidebar />
          </div>
          <div className="col-lg-9">
            <div className="card border-0 p-2">
              <div className="card-header border-0 bg-white">
                <h6 className="h6 fw-semibold float-start">PayRoll Report</h6>
              </div>
              <div className="content-body">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="col-md-12">
                        <div className="card rounded-0 mt-2 border-0">
                          <div className="card-body">
                            <div className="card-table">
                              <div className="table-responsive">
                                <table
                                  className="table table-hover card-table dataTable table-responsive-sm text-center"
                                  style={{ color: "#9265cc", fontSize: "13px" }}
                                  ref={tableRef}
                                >
                                  <thead className="table-light">
                                    <tr
                                      style={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <th className="text-capitalize text-start sortable-handle">
                                        S.No.
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Emp_ID
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        DOJ
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Name
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Designation
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Reporting_Manager
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Contact No
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Status
                                      </th>
                                      <th className="text-capitalize text-start sortable-handle">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {staff?.map((data, index) => (
                                      <tr
                                        key={index}
                                        style={{
                                          fontFamily: "Plus Jakarta Sans",
                                          fontSize: "11px",
                                        }}
                                      >
                                        <td className="text-capitalize text-start">
                                          {pagination.from + index + 1}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.employeeID}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.doj}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.empName}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.designation}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.reportingManager}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.mobileNumber}
                                        </td>
                                        <td className="text-capitalize text-start">
                                          {data?.description}
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                           
                                            <button
                                              className="btn  btn-sm me-2"
                                              onClick={() => handleEditModule(data)}
                                            >
                                              <i className="fa fa-wallet"></i>
                                            </button>
                                           
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <Pagination
                            count={Math.ceil(pagination.count / pageSize)}
                            onChange={handlePageChange}
                            shape="rounded"
                          />
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

     

      <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
        <form  onSubmit={handleSubmit}>
            <div className="form-group mb-3">

            <div className="row mb-3">
                                                        <div className="col-6 fw-bold">
                                                          <i class="fas fa-dollar-sign nav-icon"></i>
                                                          &nbsp;&nbsp;Gross
                                                          Salary:
                                                        </div>
                                                        <div className="col-6">
                                                          18,000
                                                        </div>
                                                      </div>
                                                      <div className="row mb-3">
                                                        <div className="col-6 fw-bold">
                                                          <i class="fas fa-minus nav-icon"></i>
                                                          &nbsp;&nbsp;Total
                                                          Deductions:
                                                        </div>
                                                        <div className="col-6">
                                                          500
                                                        </div>
                                                      </div>
                                                      <div className="row mb-3">
                                                        <div className="col-6 fw-bold">
                                                          <i class="fas fa-wallet nav-icon"></i>
                                                          &nbsp;&nbsp;Net
                                                          Salary:
                                                        </div>
                                                        <div className="col-6">
                                                          17,500
                                                        </div>
                                                      </div>
                                                      <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleInputs}
              />
              {submitted && errors.description.required && (
                <div className="text-danger">Description is required</div>
              )}
            </div>
            
            </div>
            <div className="text-center">
            <button 
            type="submit"
            className="btn btn-cancel border-0 fw-semibold text-uppercase py-1 px-3 rounded-pill text-white float-end bg"
            
           style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
           >
              Save
            </button>
            <button     
              onClick={() => setIsEditing(false)}   
            className="btn btn-cancel border-0 fw-semibold text-uppercase py-1 px-3 rounded-pill text-white float-end bg"
            style={{ backgroundColor: "#0f2239", fontSize: "12px" }}
         >
              Cencel
            </button>
           
         
          </div>
            
        
          </form>
          
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListEmployees;