import React, { useEffect, useState, useRef } from "react";
import { savePolicies, getallPolicies, deletePolicies, updatePolicies } from '../../Api/SuperAdmin/Policies';
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { getallDepartment } from "../../Api/SuperAdmin/departmenthead";
import Sidebar from "../../Components/SuperadminSidebar";
import Header from "../../Components/Navbar";

export const Policies = () => {
  const initialStateInputs = {
    title: "",
    department: "",
    description: "",
    uploadFile: "",
  };

  const initialStateErrors = {
    title: { required: false },
    department: { required: false },
    description: { required: false },
    uploadFile: { required: false },
  };

  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [inputs, setInputs] = useState(initialStateInputs);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState(initialStateErrors);
  const [submitted, setSubmitted] = useState(false);
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
    if (!data.title) {
      error.title.required = true;
    }
    if (!data.department) {
      error.department.required = true;
    }
    if (!data.description) {
      error.description.required = true;
    }
    if (!data.uploadFile) {
      error.uploadFile.required = true;
    }
    return error;
  };

  const handleErrors = (obj) => {
    return !Object.values(obj).some(prop => prop.required);
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

  const convertToBase64 = (e, name) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: reader.result,
      }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (files && files[0]) {
      convertToBase64(event, name);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
    if (submitted) {
      const newError = handleValidation({
        ...inputs,
        [event.target.name]: event.target.value,
      });
      setErrors(newError);
    }
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
    getallPolicies()
      .then((res) => {
        setModuleList(res?.data?.result || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePolicyData = () => {
    deletePolicies(deleteId)
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
    setSubmitted(true);
    if (handleErrors(newError)) {
      const data = {
        ...inputs,
        _id: editId,
      };
      const action = isEditing ? updatePolicies : savePolicies;
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
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0 p-2">
                    <div className="card-header border-0 bg-white">
                      <h6 className="h6 fw-semibold">Add New Policies</h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control rounded-1"
                            placeholder="Example Test"
                            style={{ fontSize: "12px" }}
                            onChange={handleInputChange}
                            name="title"
                            value={inputs.title}
                          />
                          {errors.title.required && (
                            <p className="text-danger">Title is required</p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control rounded-1"
                            style={{ fontSize: "12px" }}
                            placeholder="Example Test"
                            onChange={handleInputChange}
                            name="description"
                            value={inputs.description}
                            rows="2"
                          ></textarea>
                          {errors.description.required && (
                            <p className="text-danger">Description is required</p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Department Head</label>
                          <select
                            className="form-select rounded-1"
                            style={{ fontSize: "12px" }}
                            onChange={handleInputChange}
                            name="department"
                            value={inputs.department}
                          >
                            <option value="">Select Department Head</option>
                            {department.map((data, index) => (
                              <option key={index} value={data?.departmentHead}>
                                {data?.departmentHead}
                              </option>
                            ))}
                          </select>
                          {errors.department.required && (
                            <p className="text-danger">Department Head is required</p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Upload File</label>
                          <input
                            type="file"
                            name="uploadFile"
                            onChange={handleInputChange}
                            className="form-control rounded-1"
                            style={{ fontSize: "12px" }}
                          />
                          <p>
                            <small style={{ fontSize: "9px" }}>
                              Upload Files Only: gif, png, jpg, jpeg
                            </small>
                          </p>
                          {errors.uploadFile.required && (
                            <p className="text-danger">Upload File is required</p>
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
                      <h6 className="h6 fw-semibold">Policies List</h6>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered table-md table-striped">
                          <thead>
                            <tr>
                            <th>Department</th>
                              <th>Title</th>
                              <th>Description</th>
                             
                              <th>File</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {moduleList.slice(pagination.from, pagination.to).map((data, index) => (
                              <tr key={index}>
                                  <td>{data.department}</td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                              
                                <td>
                                  {data.uploadFile && (
                                    <a
                                      className="text-decoration-none"
                                      href={data.uploadFile}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                    <i className="far fa-eye text-primary me-1"></i>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  <Link
                                    style={{ fontSize: "14px" }}
                                    onClick={() => {
                                      setInputs({
                                        title: data.title,
                                        department: data.department,
                                        description: data.description,
                                        uploadFile: data.uploadFile,
                                      });
                                      setEditId(data._id);
                                      setIsEditing(true);
                                      // setOpen(true);
                                    }}
                                  >
                                   <i className="far fa-edit text-warning me-1"></i>
                                  </Link>
                                  <Link
                                  className="ms-2"
                                  style={{ fontSize: "14px" }}
                                    onClick={() => openPopup(data._id)}
                                  >
                                    <i className="far fa-trash-alt text-danger me-1"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <Pagination
                          count={Math.ceil(moduleList.length / pagination.to)}
                          onChange={handlePageChange}
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Delete Confirmation */}
        <Dialog open={open} onClose={closePopup}>
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this policy?</p>
            <div className="text-end">
              <button
                className="btn btn-secondary"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={deletePolicyData}
              >
                Delete
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Policies;
