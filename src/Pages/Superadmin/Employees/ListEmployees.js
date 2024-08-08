import React, { useEffect, useState, useRef } from "react";
import Sortable from 'sortablejs';
import { getallStaff, deleteStaff } from "../../../Api/SuperAdmin/Employees";
import { Link } from "react-router-dom";
import SuperAdminSidebar from "../../../Components/SuperadminSidebar";
import Navbar from "../../../Components/Navbar";
import { Pagination } from "@mui/material";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@mui/material";

export const ListEmployees = () => {
  const [staff, setStaff] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 1,
    pageSize: 5,
  });

  useEffect(() => {
    getAllStaffDetails();
  }, [pagination.page]);

  const getAllStaffDetails = () => {
    const data = {
      limit: pagination.pageSize,
      page: pagination.page,
    };

    getallStaff(data)
      .then((res) => {
        setStaff(res?.data?.result || []);
        setPagination((prev) => ({
          ...prev,
          count: res?.data?.totalCount || 0,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const openPopup = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handlePageChange = (event, page) => {
    setPagination((prev) => ({
      ...prev,
      page,
    }));
  };

  const deleteStaffData = () => {
    if (!deleteId) return;
    deleteStaff(deleteId)
      .then((res) => {
        toast.success(res?.data?.message || "Deleted successfully!");
        closePopup();
        getAllStaffDetails();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;

    // Apply SortableJS to the table headers
    const sortable = new Sortable(table.querySelector('thead tr'), {
      animation: 150,
      swapThreshold: 0.5,
      handle: '.sortable-handle',
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;

        // Move the columns in the tbody
        table.querySelectorAll('tbody tr').forEach((row) => {
          const cells = Array.from(row.children);
          row.insertBefore(cells[oldIndex], cells[newIndex]);
        });
      }
    });

    return () => {
      sortable.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <SuperAdminSidebar />
          </div>
          <div className="col-lg-9">
            <div className="container">
              <div className="card border-0 p-2">
                <div className="card-header bg-white">
                  <h6 className="h6 fw-semibold float-start">Employees Report</h6>
                  <Link
                    to="/SAAddEmployees"
                    className="btn btn-sm text-white text-capitalize float-end fw-semibold"
                    style={{ backgroundColor: "#7267ef" }}
                  >
                    <i className="fa fa-plus-circle me-1"></i> Add Employees
                  </Link>
                </div>
                <div className="content-body">
                  <div className="card rounded-0 mt-2 border-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-hover card-table dataTable table-responsive-sm text-center"
                          style={{ color: '#9265cc', fontSize: '13px' }}
                          ref={tableRef}
                        >
                          <thead className="table-light">
                            <tr style={{ fontFamily: "Plus Jakarta Sans", fontSize: "12px" }}>
                              <th className="text-capitalize text-start sortable-handle">S.No.</th>
                              <th className="text-capitalize text-start sortable-handle">Emp_ID</th>
                              <th className="text-capitalize text-start sortable-handle">DOJ</th>
                              <th className="text-capitalize text-start sortable-handle">Name</th>
                              <th className="text-capitalize text-start sortable-handle">Designation</th>
                              <th className="text-capitalize text-start sortable-handle">Reporting_Manager</th>
                              <th className="text-capitalize text-start sortable-handle">Contact No</th>
                              <th className="text-capitalize text-start sortable-handle">Status</th>
                              <th className="text-capitalize text-start sortable-handle">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {staff.length > 0 ? (
                              staff.map((data, index) => (
                                <tr key={data._id} style={{ fontFamily: "Plus Jakarta Sans", fontSize: "11px" }}>
                                  <td className="text-capitalize text-start">{pagination.pageSize * (pagination.page - 1) + index + 1}</td>
                                  <td className="text-capitalize text-start">{data.employeeID}</td>
                                  <td className="text-capitalize text-start">{data.doj}</td>
                                  <td className="text-capitalize text-start">{data.empName}</td>
                                  <td className="text-capitalize text-start">{data.designation}</td>
                                  <td className="text-capitalize text-start">{data.reportingManager}</td>
                                  <td className="text-capitalize text-start">{data.mobileNumber}</td>
                                  <td className="text-capitalize text-start">{data.status}</td>
                                  <td>
                                    <div className="d-flex">
                                      <Link
                                        className="dropdown-item"
                                        to={{
                                          pathname: "/SAViewEmployees",
                                          search: `?id=${data._id}`,
                                        }}
                                      >
                                        <i className="far fa-eye text-primary me-1"></i>
                                      </Link>
                                      <Link
                                        className="dropdown-item"
                                        to={{
                                          pathname: "/SAEditEmployees",
                                          search: `?id=${data._id}`,
                                        }}
                                      >
                                        <i className="far fa-edit text-warning me-1"></i>
                                      </Link>
                                      <Link
                                        className="dropdown-item"
                                        onClick={() => openPopup(data._id)}
                                      >
                                        <i className="far fa-trash-alt text-danger me-1"></i>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="form-text text-danger" colSpan="9">
                                  No data in Staff
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "10px" }} id="pagination">
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
        </div>
      </div>
      <Dialog open={open} onClose={closePopup}>
        <DialogContent>
          <div className="text-center m-4">
            <h5 className="mb-4 text-capitalize">
              Are you sure you want to delete the selected staff?
            </h5>
            <button
              type="button"
              className="btn btn-save btn-danger fw-semibold text-uppercase rounded-pill px-4 py-2 mx-3"
              onClick={deleteStaffData}
              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-cancel btn-success fw-semibold text-uppercase rounded-pill px-4 py-2"
              onClick={closePopup}
              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
            >
              No
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListEmployees;
