import React from 'react'
import Sidebar from '../../Components/SuperadminSidebar';
import Header from '../../Components/Navbar';
import { Link } from 'react-router-dom';
export const Policies = () => {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="container-fluid" style={{ fontFamily: "Inter, sans-serif", fontSize: '14px' }}>
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
                                        <form>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example Test" style={{ fontSize: '12px' }} />
                                                </div>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                                    <textarea class="form-control rounded-1" id="exampleFormControlTextarea1" rows="2"></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Department Head</label>
                                                    <select className="form-select rounded-1" aria-label="Default select example" style={{ fontSize: '12px' }}>
                                                        <option selected>Select Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Upload File</label>
                                                    <input type="file" className="form-control rounded-1" placeholder="Example Test" style={{ fontSize: '12px' }} />
                                                    <p><small style={{ fontSize: '9px' }}>Upload Files Only :gif,png,jpg,jpeg</small></p>
                                                </div>

                                            </div>
                                            <div className="card-footer bg-white border-0 text-end">
                                                <button className="btn btn-sm text-capitalize fw-semibold px-3 py-1" style={{ backgroundColor: '#7267ef', color: '#fff' }}>Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card border-0 p-2">
                                        <div className="card-header border-0 bg-white d-flex justify-content-between">
                                            <h6 className="h6 fw-semibold">List All Policies</h6>
                                            <Link to='#' className="btn btn-sm text-capitalize fw-semibold" style={{ backgroundColor: '#7267ef', color: '#fff' }} >View Policies</Link>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between mb-3">
                                                <p>Show
                                                    <select className="form-select form-select-sm rounded-1 d-inline mx-2" aria-label="Default select example" style={{ width: 'auto', display: 'inline-block', fontSize: '12px' }}>
                                                        <option selected>Show Entries</option>
                                                        <option value="10">10</option>
                                                        <option value="20">20</option>
                                                        <option value="50">50</option>
                                                    </select> Entries
                                                </p>
                                                <div className="mb-3">
                                                    <input type="text" className="form-control form-control-sm rounded-1" placeholder="Search...." style={{ fontSize: '12px' }} />
                                                </div>
                                            </div>



                                           




                                            <table className="table table-responsive-sm table-hover">
                                                <thead className="table-light text-uppercase" style={{ fontSize: '13px' }}>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Created At</th>
                                                        <th>Added By</th>

                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ fontSize: '11px' }}>
                                                    <tr>
                                                        <td>SuperAdmin</td>
                                                        <td>Saravanan</td>
                                                        <td>02-08-2024</td>
                                                        <td className="text-center d-flex gap-3 justify-content-center">
                                                        <Link
                                                        data-bs-toggle="modal" data-bs-target="#policiesModaledit"
                                     
                                    >
                                      <i className="far fa-edit me-1"></i>

                                    </Link>

                                                        <Link
                                    
                                  
                                    data-bs-toggle="modal" data-bs-target="#policiesModaldelete"
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
                                                    <li className="page-item"><Link to="" className="page-link" >Previous</Link></li>
                                                    <li className="page-item"><Link to="" className="page-link" >1</Link></li>
                                                    <li className="page-item"><Link to="" className="page-link" >2</Link></li>
                                                    <li className="page-item"><Link to="" className="page-link" >Next</Link></li>
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
            <div class="modal fade" id="policiesModaldelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-6  " id="exampleModalLabel">Are you sure you want to delete this record?</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div className='alert alert-danger fw-semibold'>
                                                                You won't be able to revert this!
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-light  border-0 rounded-1" data-bs-dismiss="modal" style={{ fontSize: '13px' }}>Close</button>
                                                            <button type="button" class="btn border-0 rounded-1 " style={{ backgroundColor: '#7267ef', color: '#fff', fontSize: '13px' }}>Confirm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="modal fade" id="policiesModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Policy Information</h1>
                                                           

                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                                        </div>
                                                        <div class="modal-body">
                                                            <form>

                                                                <div className="mb-3">
                                                                    <label className="form-label">Title</label>
                                                                    <input type="text" className="form-control rounded-1" placeholder="Example Test" style={{ fontSize: '12px' }} />
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                                                    <textarea class="form-control rounded-1" id="exampleFormControlTextarea1" rows="2"></textarea>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label className="form-label">Department Head</label>
                                                                    <select className="form-select rounded-1" aria-label="Default select example" style={{ fontSize: '12px' }}>
                                                                        <option selected>Select Department</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label className="form-label">Upload File</label>
                                                                    <input type="file" className="form-control rounded-1" placeholder="Example Test" style={{ fontSize: '12px' }} />
                                                                    <p><small style={{ fontSize: '9px' }}>Upload Files Only :gif,png,jpg,jpeg</small></p>
                                                                </div>



                                                            </form>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-light  border-0 rounded-1" data-bs-dismiss="modal" style={{ fontSize: '13px' }}>Close</button>
                                                            <button type="button" class="btn border-0 rounded-1 " style={{ backgroundColor: '#7267ef', color: '#fff', fontSize: '13px' }}>Update</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
        </>
    )
}
export default Policies