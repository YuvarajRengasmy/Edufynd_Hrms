import React from 'react';
import Logo from '../../Assests/Images/logo.png';

export const SAPaySlip = () => {
    return (
        <div className="container my-4" style={{ fontSize: '14px', fontFamily: "Inter sans-serif", }}>
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card border-0 rounded-3 shadow-sm">
                        <div className="card-header bg-white  border-bottom" style={{ fontSize: '12px' }}>
                            <div className="row align-items-center">
                                <div className="col-md-9">
                                    <h3 className="mb-1 fw-semibold" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Afynd</h3>
                                    <p className="mb-0" style={{ fontSize: '12px' }}>17/3A2, Gandhi Road, AlwarThiru Nagar, Chennai - 600087, India</p>
                                    <p className="mb-0" style={{ fontSize: '12px' }}>
                                        <i className="fas fa-phone "></i> +91-123-4567890 | <i className="fas fa-envelope "></i> info@afynd.com | <i className="fas fa-globe "></i> AFYND LLC - USA
                                    </p>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src={Logo} alt="Company Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="card-body p-4">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="row mb-4">
                                        <h5 className="fw-bold">Payslip for the month of August, 2024</h5>
                                        <div className="col-md-6">
                                            <h6 style={{ color: '#7627ef' }}>Employee Pay Summary</h6>
                                            <div className="row">
                                                <div className="col-6 mb-1"><strong><i class="fas fa-user "></i>&nbsp;&nbsp;Employee Name</strong></div>
                                                <div className="col-6 mb-1">:  Ravi Sharma</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-id-badge "></i>&nbsp;&nbsp;Designation</strong></div>
                                                <div className="col-6 mb-1">:  Senior Developer</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-building-columns "></i>&nbsp;&nbsp;Bank Name</strong></div>
                                                <div className="col-6 mb-1">:  15-04-2024</div>
                                                <div className="col-6 mb-1"><strong><i class="fas fa-credit-card "></i>&nbsp;&nbsp;Bank Account No</strong></div>
                                                <div className="col-6 mb-1">:  15-04-2024</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-passport "></i>&nbsp;&nbsp;Provident Fund No</strong></div>
                                                <div className="col-6 mb-1">:  August, 2024</div>


                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="text-center">Employee Net Pay</h6>
                                            <h2 className="mb-1 text-center fw-bold" style={{ color: '#28A745' }}>&#8377;45,000.00</h2>
                                            <p className="mb-1 text-center fw-normal"><strong>Pay Days: 30 | LOP Days: 0 </strong></p>
                                        </div>
                                    </div>



                                    <div className="container my-4">
                                        <div className="row mb-4" style={{ borderTop: '3px solid #7627ef', backgroundColor: '#f8f9fa' }}>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>Earnings</strong>
                                            </div>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>Amount</strong>
                                            </div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Basic</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;25,000</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>House Rent Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;5,000</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Conveyances Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;2,000</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Children Education Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;2,000</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Other Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;2,000</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Gross Earnings</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;36,000</div>
                                        </div>
                                    </div>


                                    <div className="container my-4">
                                        <div className="row mb-4" style={{ borderTop: '3px solid #7627ef', backgroundColor: '#f8f9fa' }}>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>Deductions</strong>
                                            </div>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>( - ) Amount</strong>
                                            </div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Income Tax</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;4,000</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>PA</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;500</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Total Deductions</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;4,500</div>
                                        </div>
                                    </div>


                                    <div className="container my-4">
                                        <div className="row mb-4" style={{ borderTop: '3px solid #7627ef', backgroundColor: '#f8f9fa' }}>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>Net Salary</strong>
                                            </div>
                                            <div className="col-md-6" style={{ backgroundColor: '#7627ef', color: '#fff', padding: '10px' }}>
                                                <strong>Amount</strong>
                                            </div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Gross Salary</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;36,000</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Deductions</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;4,500</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Total Net Salary</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;31,500</div>
                                        </div>
                                    </div>


                                    <div className="alert alert-primary border-0 rounded-1 mb-4" role="alert">
                                        <div className="row">
                                            <div className="col-8">
                                                Net Pay (Total Net Salary = Total Gross Salary - Total Deductions)
                                            </div>
                                            <div className="col-4 text-end">
                                                &#8377;31,500.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center fw-semibold mb-3 '>Total Net Payable &#8377;31,500.00 <small>(Thirty One Thousand Five Hundred Only)</small> </div>


                                </div>
                            </div>
                            <div className="card-footer bg-white p-3 text-center">
                                <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                                    -This is a computer-generated payslip and does not require a signature-
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SAPaySlip;
