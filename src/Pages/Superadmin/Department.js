import React from "react";
import Sidebar from "../../Components/SuperadminSidebar";
import Header from "../../Components/Navbar";
import { Link } from "react-router-dom";
const Department = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div
        className="container-fluid"
        style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}
      >
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
                      <h6 className="h6 fw-semibold">Add New Department</h6>
                    </div>
                    <form>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control rounded-1"
                            placeholder="Example James Lee"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Department Head</label>
                          <select
                            className="form-select rounded-1"
                            aria-label="Default select example"
                            style={{ fontSize: "12px" }}
                          >
                            <option selected>Select Department</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="card-footer bg-white border-0 text-end">
                        <button
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
                            style={{
                              width: "auto",
                              display: "inline-block",
                              fontSize: "12px",
                            }}
                          >
                            <option selected>Show Entries</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
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
                        <thead
                          className="table-light text-uppercase"
                          style={{ fontSize: "13px" }}
                        >
                          <tr>
                            <th>Department Name</th>
                            <th>Department Head</th>
                            <th>Created At</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: "11px" }}>
                          <tr>
                            <td>SuperAdmin</td>
                            <td>Saravanan</td>
                            <td>02-08-2024</td>
                            <td className=" text-center d-flex gap-3 justify-content-center">
                              <Link
                                data-bs-toggle="modal"
                                data-bs-target="#departmentModaledit"
                              >
                                <i className="far fa-edit  me-1"></i>
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                data-bs-target="#departmentModaldelete"
                              >
                                <i className="far fa-trash-alt text-danger me-1"></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer bg-white border-0 d-flex justify-content-between">
                      <p>Showing 1 to 10 of 12 entries</p>
                      <nav>
                        <ul className="pagination pagination-sm">
                          <li className="page-item">
                            <Link to="#" className="page-link">
                              Previous
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link to="#" className="page-link">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link to="#" className="page-link">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link to="#" className="page-link">
                              Next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="departmentModaldelete"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">
                Are you sure you want to delete this record?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-danger fw-semibold">
                You won't be able to revert this!
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light border-0 rounded-1"
                data-bs-dismiss="modal"
                style={{ fontSize: "13px" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn border-0 rounded-1"
                style={{
                  backgroundColor: "#7267ef",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="departmentModaledit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Department Information
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-1"
                    placeholder="Example James Lee"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department Head</label>
                  <select
                    className="form-select rounded-1"
                    aria-label="Default select example"
                    style={{ fontSize: "12px" }}
                  >
                    <option selected>Select Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light border-0 rounded-1"
                data-bs-dismiss="modal"
                style={{ fontSize: "13px" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn border-0 rounded-1"
                style={{
                  backgroundColor: "#7267ef",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
