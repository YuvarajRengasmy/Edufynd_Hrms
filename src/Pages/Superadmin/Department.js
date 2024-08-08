import React, { useEffect, useState, useRef } from "react";
import { saveDepartment, getallDepartments, deleteDepartment, updateDepartment } from '../../Api/SuperAdmin/Department';
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { formatDate } from "../../Utils/DateFormat";

import { getallDepartment } from "../../Api/SuperAdmin/departmenthead";
import Sidebar from "../../Components/SuperadminSidebar";
import Header from "../../Components/Navbar";

const Department = () => {
  const initialStateInputs = {
    name: "",
    departmentHead: "",
  };

  const initialStateErrors = {
    departmentHead: { required: false },
    name: { required: false },
  };

  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [inputs, setInputs] = useState(initialStateInputs);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState(initialStateErrors);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: 5,
  });
  const [moduleList, setModuleList] = useState([]);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleValidation = (data) => {
    let error = { ...initialStateErrors };
    if (!data.name) {
      error.name.required = true;
    }
    if (!data.departmentHead) {
      error.departmentHead.required = true;
    }
    return error;
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

  const openPopup = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const openFilterPopup = () => {
    setOpenFilter(true);
  };

  const closeFilterPopup = () => {
    setOpenFilter(false);
  };

  useEffect(() => {
    getAllDepartment();
    getallDepartmentData();
  }, []);

  const handlePageChange = (event, value) => {
    setPagination({
      ...pagination,
      from: (value - 1) * pagination.to,
      to: value * pagination.to,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const getallDepartmentData = () => {
    getallDepartment()
      .then((res) => {
        setDepartment(res?.data?.result || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllDepartment = () => {
    getallDepartments()
      .then((res) => {
        setModuleList(res?.data?.result || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDepartmentData = () => {
    deleteDepartment(deleteId)
      .then((res) => {
        toast.success(res?.data?.message);
        closePopup();
        getAllDepartment();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidation(inputs);
    setErrors(newError);
    if (handleErrors(newError)) {
      const data = {
        ...inputs,
        _id: editId,
      };
      const action = isEditing ? updateDepartment : saveDepartment;
      action(data)
        .then((res) => {
          toast.success(res?.data?.message);
          setInputs(initialStateInputs);
          setErrors(initialStateErrors);
          setIsEditing(false);
          setEditId(null);
          getAllDepartment();
          closePopup();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0 p-2">
                    <div className="card-header border-0 bg-white">
                      <h6 className="h6 fw-semibold">Add New Department</h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control rounded-1"
                            placeholder="Example James Lee"
                            style={{ fontSize: "12px" }}
                            onChange={handleInputChange}
                            name="name"
                            value={inputs.name}
                          />
                          {errors?.name.required && (
                            <p className="text-danger">Name is required</p>
                          )}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Department Head</label>
                          <select
                            className="form-select rounded-1"
                            aria-label="Default select example"
                            style={{ fontSize: "12px" }}
                            onChange={handleInputChange}
                            name="departmentHead"
                            value={inputs.departmentHead}
                          >
                            <option value="">Select Department Head</option>
                            {department?.map((data, index) => (
                              <option key={index} value={data?.departmentHead}>
                                {data?.departmentHead}
                              </option>
                            ))}
                          </select>
                          {errors?.departmentHead.required && (
                            <p className="text-danger">Department Head is required</p>
                          )}
                        </div>
                      </div>
                      <div className="card-footer bg-white border-0 text-end">
                        <button
                          type="submit"
                          className="btn btn-sm text-capitalize fw-semibold px-3 py-1"
                          style={{ backgroundColor: "#7267ef", color: "#fff" }}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card border-0 p-2">
                    <div className="card-header border-0 bg-white">
                      <h6 className="h6 fw-semibold">List All Departments</h6>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <p>
                          Show
                          <select
                            className="form-select form-select-sm rounded-1 d-inline mx-2"
                            aria-label="Default select example"
                            style={{ width: "auto", display: "inline-block", fontSize: "12px" }}
                          >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                          </select>{" "}
                          Entries
                        </p>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control form-control-sm rounded-1"
                            placeholder="Search...."
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                      </div>

                      <table className="table table-responsive-sm table-hover">
                        <thead className="table-light text-uppercase" style={{ fontSize: "13px" }}>
                          <tr>
                          <th>Department Head</th>
                            <th>Department Name</th>
                           
                            <th>Created At</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: "11px" }}>
                          {moduleList.slice(pagination.from, pagination.to).map((item, index) => (
                            <tr key={index}>
                              <td>{item?.name}</td>
                              <td>{item?.departmentHead}</td>
                              <td>{formatDate(item?.createdOn)}</td>
                              <td className="text-center">
                                <Link
                                  onClick={() => {
                                    setInputs({
                                      name: item?.name,
                                      departmentHead: item?.departmentHead,
                                    });
                                    setEditId(item?._id);
                                    setIsEditing(true);
                                    // setOpen(true);
                                    
                                  }}
                                  style={{ fontSize: "14px" }}
                                >
                                 <i className="far fa-edit text-warning me-1"></i>
                                </Link>
                                <IconButton
                                  onClick={() => openPopup(item?._id)}
                                  style={{ fontSize: "14px" }}
                                >
                                  <i className="far fa-trash-alt text-danger me-1"></i>
                                </IconButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
                        <Pagination
                          count={Math.ceil(moduleList.length / pagination.to)}
                          page={Math.ceil(pagination.from / pagination.to) + 1}
                          onChange={handlePageChange}
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

      <Dialog open={open} onClose={closePopup}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this department?</p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger me-2" onClick={deleteDepartmentData}>
              Delete
            </button>
            <button className="btn btn-secondary" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Department;
