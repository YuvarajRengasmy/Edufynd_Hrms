import React from 'react'
import { Link } from 'react-router-dom'
export const Attendance = () => {
  return (
    <> <div className="col-md-8">
    <div className="card border-0 p-2">
        <div className="card-header border-0 bg-white">
            <h6 className="h6 fw-semibold">Daily Attendace Report</h6>
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
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Clock In</th>
                        <th>Status</th>
                        <th>Status</th>
                        <th>Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '11px' }}>
                    <tr>
                        <td>SuperAdmin</td>
                        <td>Saravanan</td>
                        <td>02-08-2024</td>
                        <td className="text-center">
                            <button className="btn btn-sm btn-link text-decoration-none" data-bs-toggle="modal" data-bs-target="#departmentModaledit" style={{ backgroundColor: '#7267ef', color: '#fff' }}></button>
                            <button className="btn btn-sm btn-link text-decoration-none text-danger" data-bs-toggle="modal" data-bs-target="#departmentModaldelete" style={{ backgroundColor: '#dc3545', color: '#fff' }}></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="card-footer bg-white border-0 d-flex justify-content-between">
            <p>Showing 1 to 10 of 12 entries</p>
            <nav>
                <ul className="pagination pagination-sm">
                    <li className="page-item"><Link to="#" className="page-link" >Previous</Link></li>
                    <li className="page-item"><Link to="#" className="page-link" >1</Link></li>
                    <li className="page-item"><Link to="#" className="page-link" >2</Link></li>
                    <li className="page-item"><Link to="#" className="page-link" >Next</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</div></>
  )
}
export default Attendance