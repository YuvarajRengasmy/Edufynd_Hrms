import React, { useEffect, useState, useRef } from "react";
import Sortable from 'sortablejs';
import {getallAttendence} from "../../Api/Staff/Attendence";
import { Link } from "react-router-dom";
import Header from "../../Components/StaffNavbar";
import Sidebar from "../../Components/Sidebar";
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination, backdropClasses, radioClasses, } from "@mui/material";
import {formatDated, formatYears  } from "../../Utils/DateFormat";
import { toast } from "react-toastify";


export const Attendance = () => {
 
  const [staff, setStaff] = useState();
  const [open, setOpen] = useState(false);

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
                              pathname: "/ViewStaffAttendance",
                              search: `?id=${data?._id}`,
                            }}
                           
                          >
                            <i className="far fa-eye  me-1"></i>
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
      
    </>
  );
};
export default Attendance;
