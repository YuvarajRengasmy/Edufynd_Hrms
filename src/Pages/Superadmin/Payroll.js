import React from 'react';
import Navbar from '../../Components/Navbar';
import SuperadminSidebar from '../../Components/SuperadminSidebar';
import Profile from '../../Assests/Images/Profile.jpg';
import { Link } from 'react-router-dom';
import { FaCameraRotate } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Payroll = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='container-fluid' style={{ fontSize: '14px' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <SuperadminSidebar />
                    </div>
                    <div className='col-lg-9'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-5'>

                                    <div className='card mb-4 border-0'>
                                        <div className='card-body p-4'>
                                            <div className="card border-0 mb-0">
                                                <div className="row g-0">
                                                    <div className="col-md-3">
                                                        <div className='position-relative'>
                                                            <img src={Profile} className="img-fluid rounded-circle" style={{ width: '5rem', height: '5rem' }} alt="profile_image" />
                                                            <div className='position-absolute bottom-0 end-0'><FaCameraRotate /></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body ms-4">
                                                            <h5 className="card-title mb-0">John Doe</h5>
                                                            <p className="card-text mb-1">Developer</p>
                                                            <p className="text-bg-success d-inline px-3 py-1 text-capitalize fw-semibold rounded-1"><small>Active</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group list-group-flush">
                                                <Link to="#" className="list-group-item list-group-item-action">Manager</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Email</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Employee Information</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Documents</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Change Password</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card border-0 mb-3'>
                                        <div className='card-header bg-white'>
                                            <h6 className='h6 fw-semibold text-capitalize float-start'>Total Salary Details</h6>
                                        </div>
                                        <div className='card-body p-4'>
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-6 fw-bold"><i className="fas fa-id-badge"></i> Gross Salary:</div>
                                                    <div className="col-6">18,000</div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6 fw-bold"><i className="fas fa-id-badge"></i> Total Deductions:</div>
                                                    <div className="col-6">500</div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6 fw-bold"><i className="fas fa-id-badge"></i> Net Salary:</div>
                                                    <div className="col-6">17,500</div>
                                                </div>
                                                <button className='btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end ms-3' style={{ backgroundColor: '#7267ef', color: '#fff' }}>Update</button>
                                                <button className='btn btn-sm text-capitalize fw-semibold px-3 py-1 float-end' style={{ backgroundColor: '#231f20', color: '#fff' }}>Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <div className='card border-0 mb-3'>
                                        <div className='card-header bg-white'>
                                            <h6 className='h6 fw-semibold text-capitalize float-start'>Allowances</h6>
                                        </div>
                                        <div className='card-body p-4'>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">House Rent Allowances</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Conveyance</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Other Allowances</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <button className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1' style={{ backgroundColor: '#7267ef' }}><i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='card border-0 mb-3'>
                                        <div className='card-header bg-white'>
                                            <h6 className='h6 fw-semibold text-capitalize float-start'>Deductions</h6>
                                        </div>
                                        <div className='card-body p-4'>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Provident Fund</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Tax Deductions</label>
                                                    <input type="text" className="form-control rounded-1" placeholder="Example 2500" style={{ fontSize: '12px' }} />
                                                </div>
                                                <button className='btn btn-sm fw-semibold text-capitalize text-white float-end px-4 py-1' style={{ backgroundColor: '#7267ef' }}><i className="fas fa-plus-circle"></i>&nbsp;&nbsp;Add</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payroll;
