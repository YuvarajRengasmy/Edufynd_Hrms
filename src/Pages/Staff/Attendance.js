import React from "react";
import Header from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export const Attendance = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <section className="d-flex justify-content-between align-items-center mb-4">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link
                      to="/SADashboard"
                      className="text-dark text-decoration-none"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Attendace
                  </li>
                </ol>
              </nav>
              <Link
                to="/"
                className="btn"
                style={{ backgroundColor: "#7267ef", color: "#fff" }}
              >
                Log Out
              </Link>
            </section>
            <div className="card border-0 p-2">
              <div className="card-header border-0 bg-white">
                <h6 className="h6 fw-semibold">Daily Attendace Report</h6>
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
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Clock In</th>
                      <th>Clock Out</th>
                      <th>Late</th>
                      <th>Early Leaving</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "11px" }}>
                    <tr>
                      <td>Gopinath</td>
                      <td>03-08-2024</td>
                      <td>Present</td>
                      <td>10.00AM</td>
                      <td>07.00PM</td>
                      <td>Nil</td>
                      <td>Nil</td>
                      <td className=" text-center d-flex gap-3 justify-content-center">
                        <Link
                          to={{
                            pathname: "/ViewAttendance",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#AttendanceModalView"
                        >
                          <i className="far fa-eye  me-1"></i>
                        </Link>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#AttendanceModaldelete"
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
      <div
        class="modal fade"
        id="AttendanceModaldelete"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-6  " id="exampleModalLabel">
                Are you sure you want to delete this record?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="alert alert-danger fw-semibold">
                You won't be able to revert this!
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light  border-0 rounded-1"
                data-bs-dismiss="modal"
                style={{ fontSize: "13px" }}
              >
                Close
              </button>
              <button
                type="button"
                class="btn border-0 rounded-1 "
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
    </>
  );
};
export default Attendance;
