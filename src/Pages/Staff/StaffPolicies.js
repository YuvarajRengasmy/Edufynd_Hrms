import React, { useEffect, useState } from "react";
import { getPoliciesDepartment, getallPolicies } from "../../Api/SuperAdmin/Policies";
import Navbar from '../../Components/StaffNavbar';
import Sidebar from '../../Components/Sidebar';
import { Link } from 'react-router-dom';

export const StaffPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  useEffect(() => {
    getAllDepartment();
  }, []);

  const getAllDepartment = () => {
    getallPolicies()
      .then((res) => {
        setPolicies(res?.data?.result || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
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
                        value={searchQuery}
                        onChange={handleSearch}
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
                        <th>Department</th>
                        <th>Created At</th>
                   
                        <th>Description</th>
                        <th>File</th>
                        
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: '11px' }}>
                      {policies.map((data) => (
                        <tr key={data._id}>
                          <td>{data.title}</td>
                          <td>{data.department}</td>
                          <td>{data.createdBy}</td>
                         
                         
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
                         
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer bg-white border-0 d-flex justify-content-between">
                  <nav>
                    <ul className="pagination pagination-sm">
                      <li className="page-item">
                        <Link
                          to="#"
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                          aria-disabled={currentPage === 1}
                        >
                          Previous
                        </Link>
                      </li>
                     
                    
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Modal for data details */}
            <div
              className="modal fade"
              id="dataModal"
              aria-hidden="true"
              aria-labelledby="dataModalLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="dataModalLabel">
                      data Details
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
                        <p className="">data 1</p>
                      </div>
                      <div className="d-flex gap-4">
                        <p className="fw-semibold">Description:</p>
                        <p className="">This is a dummy description for data 1.</p>
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
                      data-bs-target="#dataModal"
                      data-bs-toggle="modal"
                    >
                      Back to data Details
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
