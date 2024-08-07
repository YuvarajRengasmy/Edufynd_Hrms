import React from "react";
import StaffNavbar from "../../Components/StaffNavbar";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export const StaffComplaints = () => {
  return (
    <>
      <StaffNavbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" style={{ fontSize: "12px" }}>
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="container">
              <div className="collapse" id="addComplaintCollapse">
                <div className="card border-0 p-2 mb-4">
                  <div className="card-header bg-white d-flex justify-content-between">
                    <h6 className="h6 fw-semibold">Add New Complaint</h6>
                    <button
                      className="btn btn-sm text-capitalize fw-semibold"
                      style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      data-bs-toggle="collapse"
                      href="#addComplaintCollapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="addComplaintCollapse"
                    >
                      Hide
                    </button>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="row gy-3 gx-4">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">Complaint Title</label>
                          <input
                            type="text"
                            className="form-control rounded-1 text-muted"
                            placeholder="Example Test"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">Complaint Date</label>
                          <input
                            type="date"
                            className="form-control rounded-1 text-uppercase text-muted"
                            placeholder="Example 22/07/2024"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">
                            Complaint Against
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-1 text-muted"
                            placeholder="Example test2"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control rounded-1 text-muted"
                            placeholder="Enter Message here...."
                            rows="5"
                            style={{ fontSize: "12px" }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-white p-4">
                      <div className="d-flex justify-content-end gap-3">
                        <buton
                          className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 btn-light border-0 "
                          style={{ fontSize: "12px" }}
                        >
                          Reset
                        </buton>
                        <buton
                          className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 text-white border-0 "
                          style={{
                            fontSize: "12px",
                            backgroundColor: "#7267ef",
                          }}
                        >
                          Save
                        </buton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card border-0 p-2 mb-4">
                <div className="card-header bg-white d-flex justify-content-between">
                  <h6 className="h6 fw-semibold">List All Complaints</h6>
                  <button
                    className="btn btn-sm text-capitalize fw-semibold"
                    style={{ backgroundColor: "#7267ef", color: "#fff" }}
                    data-bs-toggle="collapse"
                    href="#addComplaintCollapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="addComplaintCollapse"
                  >
                    Add
                  </button>
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
                        <th>Complaint Title</th>
                        <th>Complaint Against</th>
                        <th>Complaint Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: "11px" }}>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center d-flex gap-3 justify-content-center">
                          <Link to="/StaffViewComplaints" target="_blank">
                            <i className="far fa-eye me-1"></i>
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

      {/* Collapse Section for Adding New Complaints */}
    </>
  );
};

export default StaffComplaints;
