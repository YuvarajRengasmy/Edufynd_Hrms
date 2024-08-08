import React, { useEffect, useState } from "react";
import { getallAttendence } from "../../Api/Staff/Attendence";
import { Link } from "react-router-dom";
import SuperAdminSidebar from "../../Components/SuperadminSidebar";
import Navbar from "../../Components/Navbar";
import { Pagination } from "@mui/material";
import { formatDated, formatYears } from "../../Utils/DateFormat";

export const Attendance = () => {
  const [staff, setStaff] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 1,
    pageSize: 5,
  });

  useEffect(() => {
    getAllStaffDetails();
  }, [pagination.page]);

  const getAllStaffDetails = () => {
    const { page, pageSize } = pagination;

    getallAttendence({
      limit: pageSize,
      page: page,
    })
      .then((res) => {
        setStaff(res?.data?.result || []);
        setPagination((prev) => ({
          ...prev,
          count: res?.data?.totalCount || 0,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageChange = (event, page) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid" style={{ fontSize: '14px' }}>
        <div className="row">
          <div className="col-lg-3">
            <SuperAdminSidebar />
          </div>
          <div className="col-lg-9">
            <div className="collapse" id="SAAttendanceCollapse">
              <div className="card border-0 p-2 mb-4">
                <div className="card-header bg-white d-flex justify-content-between">
                  <h6 className="h6 fw-semibold">Edit Attendance</h6>
                  <button
                    className="btn btn-sm text-capitalize fw-semibold"
                    style={{ backgroundColor: "#7267ef", color: "#fff" }}
                    data-bs-toggle="collapse"
                    href="#SAAttendanceCollapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SAAttendanceCollapse"
                  >
                    Hide
                  </button>
                </div>
                <form>
                  <div className="card-body">
                    <div className="row gy-3 gx-4">
                      {/* Form inputs here */}
                    </div>
                  </div>
                  <div className="card-footer bg-white p-4">
                    <div className="d-flex justify-content-end gap-3">
                      <button
                        type="button"
                        className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 btn-light border-0"
                        style={{ fontSize: "12px" }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 text-white border-0"
                        style={{ fontSize: "12px", backgroundColor: "#7267ef" }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card border-0 p-2">
              <div className="card-header border-0 bg-white d-flex justify-content-between">
                <h6 className="h6 fw-semibold">Daily Attendance Report</h6>
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
                      <option value="50">50</option>
                    </select>{" "}
                    Entries
                  </p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-1"
                      placeholder="Search..."
                      style={{ fontSize: "12px" }}
                    />
                  </div>
                </div>

                <table className="table table-responsive-sm table-hover">
                  <thead className="table-light text-uppercase" style={{ fontSize: "13px" }}>
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
                    {staff.map((data) => (
                      <tr key={data._id}>
                        <td>{data?.empName}</td>
                        <td>{formatYears(data?.clockIn)}</td>
                        <td>{data?.status}</td>
                        <td>{formatDated(data?.clockIn)}</td>
                        <td>{formatDated(data?.clockOut)}</td>
                        <td>{data?.late}</td>
                        <td>{data?.earlyLeaving}</td>
                        <td className="text-center d-flex gap-3 justify-content-center">
                          <Link to={{ pathname: "/SAViewAttendance", search: `?id=${data?._id}` }}>
                            <i className="far fa-eye me-1"></i>
                          </Link>
                          <button
                            className="btn border-0 p-0"
                            data-bs-toggle="collapse"
                            href="#SAAttendanceCollapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="SAAttendanceCollapse"
                            style={{ fontSize: '12px' }}
                          >
                            <i className="fas fa-edit text-success me-1"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="float-end my-2">
                  <Pagination
                    count={Math.ceil(pagination.count / pagination.pageSize)}
                    page={pagination.page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="AttendanceModaldelete"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ fontSize: '14px' }}
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">
                Are you sure you want to edit this record?
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
                <div className="row gy-3">
                  {/* Modal form inputs here */}
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
