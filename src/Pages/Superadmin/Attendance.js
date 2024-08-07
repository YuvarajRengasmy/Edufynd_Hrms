import React, { useEffect, useState, useRef } from "react";
import Sortable from 'sortablejs';
import {getallAttendence} from "../../Api/Staff/Attendence";
import { Link } from "react-router-dom";
import SuperAdminSidebar from "../../Components/SuperadminSidebar";
import Navbar from "../../Components/Navbar";
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination, backdropClasses, radioClasses, } from "@mui/material";
import {formatDated, formatYears  } from "../../Utils/DateFormat";

export const Attendance = () => {
  const [staff, setStaff] = useState();


  const pageSize = 5;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    getAllStaffDetails();
  }, [pagination.from, pagination.to]);

  const getAllStaffDetails = () => {
    const data = {
      limit: 10,
      page: pagination.from,
    };

    getallAttendence(data)
      .then((res) => {
       
        setStaff(res?.data?.result);
        setPagination({ ...pagination, count: res?.data?.result?.staffCount });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };
  

  // const tableRef = useRef(null);

  // useEffect(() => {
  //   const table = tableRef.current;

  //   // Apply SortableJS to the table headers
  //   const sortable = new Sortable(table.querySelector('thead tr'), {
  //     animation: 150,
  //     swapThreshold: 0.5,
  //     handle: '.sortable-handle',
  //     onEnd: (evt) => {
  //       const oldIndex = evt.oldIndex;
  //       const newIndex = evt.newIndex;

  //       // Move the columns in the tbody
  //       table.querySelectorAll('tbody tr').forEach((row) => {
  //         const cells = Array.from(row.children);
  //         row.insertBefore(cells[oldIndex], cells[newIndex]);
  //       });
  //     }
  //   });

  //   return () => {
  //     sortable.destroy();
  //   };
  // }, []);




  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SuperAdminSidebar />
          </div>
          <div className="col-lg-10">
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
                  {staff?.map((data) => (
                      <tr>
                        <td>{data?.empName}</td>
                        <td>{formatYears (data?.clockIn)}</td>
                        <td>{data?.status}</td>
                        <td>{formatDated (data?.clockIn)}</td> 
                        <td>{formatDated (data?.clockOut)}</td>
                        <td>{data?.late}</td>
                        <td>{data?.earlyLeaving}</td>
                        <td className=" text-center d-flex gap-3 justify-content-center">
                          <Link
                            to={{
                              pathname: "/ViewSAAttendance",
                              search: `?id=${data?._id}`,
                            }}
                           
                          >
                            <i className="far fa-eye  me-1"></i>
                          </Link>
                          <Link
                            to={{
                              pathname: "/EditSAAttendance",
                              search: `?id=${data?._id}`,
                            }}
                           
                          >
                            <i className="fas fa-edit me-1"></i>
                          </Link>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="float-right my-2">
                        <Pagination
                          count={Math.ceil(pagination.count / pageSize)}
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
      <div
        class="modal fade"
        id="AttendanceModaldelete"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{fontSize:'14px'}}
      >
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-6  " id="exampleModalLabel">
                Are you sure you want to edit this record?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              
               <form>
                <div className="row gy-3 ">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Employee Name</label>
                    <select class="form-select rounded-1 text-muted"  style={{fontSize:'12px'}}>
  <option selected>Select Employee Name</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                   
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Date</label>
                    <input name="date" type="date" className='form-control text-uppercase rounded-1 text-muted' placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Status</label>
                    <select class="form-select rounded-1 text-muted"  style={{fontSize:'12px'}}>
  <option >Select Status</option>
  <option value="Present" selected>Present</option>
  <option value="Absent">Absent</option>
 
</select>
                   
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Clock In</label>
                    <input name="clockIn" type="datetime-local" className='form-control text-uppercase text-muted rounded-1' placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Clock Out</label>
                    <input name="clockOut" type="datetime-local" className='form-control text-uppercase text-muted rounded-1' placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Late</label>
                    <input name="late" type="datetime-local" className='form-control text-uppercase rounded-1 text-muted' placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <label>Early Leaving</label>
                    <input name="earlyLeaving" type="datetime-local" className='form-control text-uppercase rounded-1 text-muted' placeholder="Example John Doe" style={{fontSize:'12px'}}/>
                  </div>
                </div>
               </form>
              
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
