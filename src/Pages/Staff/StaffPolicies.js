import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { Link } from 'react-router-dom';

export const StaffPolicies = () => {
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
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="container">
              <div className="card border-0 p-2">
                <div className="card-header border-0 bg-white d-flex justify-content-between">
                  <h6 className="h6 fw-semibold">List All Policies</h6>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <p>
                      Show
                      <select
                        className="form-select form-select-sm rounded-1 d-inline mx-2"
                        aria-label="Default select example"
                        style={{
                          width: 'auto',
                          display: 'inline-block',
                          fontSize: '12px',
                        }}
                      >
                        <option selected>Show Entries</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                      </select>{' '}
                      Entries
                    </p>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-1"
                        placeholder="Search...."
                        style={{ fontSize: '12px' }}
                      />
                    </div>
                  </div>

                  <table className="table table-responsive-sm table-hover">
                    <thead
                      className="table-light text-uppercase"
                      style={{ fontSize: '13px' }}
                    >
                      <tr>
                        <th>Title</th>
                        <th>Created At</th>
                        <th>Added By</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: '11px' }}>
                      <tr>
                        <td>Policy 1</td>
                        <td>02-08-2024</td>
                        <td>Saravanan</td>
                        <td className="text-center d-flex gap-3 justify-content-center">
                          <Link data-bs-target="#policyModal" data-bs-toggle="modal">
                            <i className="far fa-edit me-1"></i>
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
                        <Link to="" className="page-link">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="" className="page-link">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Modal for policy details */}
            <div
              className="modal fade"
              id="policyModal"
              aria-hidden="true"
              aria-labelledby="policyModalLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="policyModalLabel">
                      Policy Details
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
                      <div className="d-flex gap-4">
                        <p className="fw-semibold">Title:</p>
                        <p className="">Policy 1</p>
                      </div>
                      <div className="d-flex gap-4">
                        <p className="fw-semibold">Description:</p>
                        <p className="">This is a dummy description for Policy 1.</p>
                      </div>
                      <div className="d-flex gap-4">
                        <p className="fw-semibold">Department Head:</p>
                        <p className="">John Doe</p>
                      </div>
                      <div className="d-flex gap-4">
                        <p className="fw-semibold">File:</p>
                        <p className="">
                          file_name.pdf
                        
                           
                          
                        </p>
                       
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light border-0 rounded-1"
                      data-bs-dismiss="modal"
                      style={{ fontSize: '13px' }}
                    >
                      Close
                    </button>
                    <button
                              className="btn btn-sm btn-primary"
                              data-bs-target="#documentModal"
                              data-bs-toggle="modal"
                            >
                              <i className="fas fa-eye nav-icon"></i> View Document
                            </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for document view */}
            <div
              className="modal fade"
              id="documentModal"
              aria-hidden="true"
              aria-labelledby="documentModalLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="documentModalLabel">
                      Document View
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>This is where the document content will be displayed.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-target="#policyModal"
                      data-bs-toggle="modal"
                    >
                      Back to Policy Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPolicies;
