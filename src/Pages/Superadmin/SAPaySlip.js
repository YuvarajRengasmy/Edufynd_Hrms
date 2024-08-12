import React, { useState, useEffect } from "react";
import Logo from '../../Assests/Images/logo.png';
import {getSingleAllPayroll } from "../../Api/SuperAdmin/Payroll";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation } from "react-router-dom";


export const SAPaySlip = () => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id"); 
    const [pay,setPay]=useState({})

    useEffect(() => {
        getStaffDetails();
       
      }, [id]);
    
      const getStaffDetails = () => {
        getSingleAllPayroll(id)
          .then((res) => {
            setPay(res?.data?.result || {});
          })
          .catch((err) => {
            console.error(err);
          });
      };
      const handlePrint = () => {
        window.print();
      };
    
      const handleDownloadPDF = () => {
        const input = document.getElementById('contentToPrint');
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          const imgWidth = 210;
          const imgHeight = canvas.height * imgWidth / canvas.width;
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('Staff_Attendance.pdf');
        });
      };

    return (
        <>
        <div className="container my-4" style={{ fontSize: '14px', fontFamily: "Inter sans-serif", }} >
            <div className="row justify-content-center">
                <div className="col-md-9 " >
                    <div className="card border-0 rounded-3 shadow-sm " id='contentToPrint'>
                        <div className="card-header  bg-white border-bottom" style={{ fontSize: '12px' }}>
                            <div className="row align-items-center">
                                <div className="col-md-9">
                                    <h3 className="mb-1 fw-semibold" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Afynd</h3>
                                    <p className="mb-0" style={{ fontSize: '12px' }}>17/3A2, Gandhi Road, AlwarThiru Nagar, Chennai - 600087, India</p>
                                    <p className="mb-0" style={{ fontSize: '12px' }}>
                                        <i className="fas fa-phone "></i> +91-123-4567890 | <i className="fas fa-envelope "></i> info@afynd.com | <i className="fas fa-globe "></i> AFYND LLC - USA
                                    </p>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src={Logo} alt="Company Logo" className="img-fluid" style={{ maxHeight: '60px',backgroundColor: '#fff' }} />
                                </div>
                            </div>
                        </div>

                        <div className="card-body p-4" style={{  backgroundColor: '#fff' }}>
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="row mb-4" style={{  backgroundColor: '#fff' }}>
                                        <h5 className="fw-bold">Payslip for the month of August, 2024</h5>
                                        <div className="col-md-6">
                                            <h6 style={{ color: '#7627ef' }}>Employee Pay Summary</h6>
                                            <div className="row">
                                                <div className="col-6 mb-1"><strong><i class="fas fa-user "></i>&nbsp;&nbsp;Employee Name</strong></div>
                                                <div className="col-6 mb-1">:  {pay?.empName}</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-id-badge "></i>&nbsp;&nbsp;Designation</strong></div>
                                                <div className="col-6 mb-1">: {pay?.designation}</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-building-columns "></i>&nbsp;&nbsp;Bank Name</strong></div>
                                                <div className="col-6 mb-1">:  {pay?.bankName}</div>
                                                <div className="col-6 mb-1"><strong><i class="fas fa-credit-card "></i>&nbsp;&nbsp;Bank Account No</strong></div>
                                                <div className="col-6 mb-1">:  {pay?.bankAccountNo}</div>

                                                <div className="col-6 mb-1"><strong><i class="fas fa-passport "></i>&nbsp;&nbsp;Provident Fund No</strong></div>
                                                <div className="col-6 mb-1">:  {pay?.pfAccountNo}</div>


                                            </div>
                                        </div>
                                        <div className="col-md-6 bg-white">
                                            <h6 className="text-center">Employee Net Pay</h6>
                                            <h2 className="mb-1 text-center fw-bold" style={{ color: '#28A745' }}>&#8377;{pay?.netSalary}</h2>
                                            <p className="mb-1 text-center fw-normal"><strong>Pay Days: {pay?.payDays} | LOP Days:{pay?.lopDays} </strong></p>
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
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377; {pay?.basicAllowance}</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>House Rent Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;{pay?.hra}</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Conveyances Allowance</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;{pay?.conveyance}</div>
                                            {Array.isArray(
                                      pay?.allowance
                                    ) &&
                                    pay.allowance.map(
                                        (data, index) => (
                                            <div className="row" key={index}>
                                            <div className="col-md-6" style={{ padding: '10px' }}>{data?.name}</div>
                                            <div className="col-md-6" style={{ padding: '12px' }}>&#8377;{data?.amount}</div>
</div>
  )
)}
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Gross Earnings</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;{pay?.grossSalary}</div>
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
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;{pay?.taxDeduction}</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>Provident Fund</div>
                                            <div className="col-md-6" style={{ padding: '10px' }}>&#8377;{pay?.pf?pay?.pf:0}</div>
                                            {Array.isArray(
                                      pay?.deduction
                                    ) &&
                                    pay.deduction.map(
                                        (data, index) => (
                                            <div className="row" key={index}>
                                            <div className="col-md-6" style={{ padding: '10px' }}>{data?.title}</div>
                                            <div className="col-md-6" style={{ padding: '12px' }}>&#8377;{data?.amount}</div>
</div>
  )
)}
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Total Deductions</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;{pay?.totalDeduction}</div>
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
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;{pay?.grossSalary}</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Deductions</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;{pay?.totalDeduction}</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>Total Net Salary</div>
                                            <div className="col-md-6" style={{ padding: '10px', fontWeight: 'bold' }}>&#8377;{pay?.netSalary}</div>
                                        </div>
                                    </div>


                                    <div className="alert alert-primary border-0 rounded-1 mb-4" role="alert">
                                        <div className="row">
                                            <div className="col-8">
                                                Net Pay (Total Net Salary = Total Gross Salary - Total Deductions)
                                            </div>
                                            <div className="col-4 text-end">
                                                &#8377;{pay?.netSalary}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center text-capitalize fw-light mb-3 '>Total Net Payable In Words:<small className="text-primary fw-bold fs-6">{pay?.netInWords}</small> </div>


                                </div>
                            </div>
                            <div className="card-footer bg-white p-3 text-center">
                                <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                                    -This is a computer-generated payslip and does not require a signature-
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center mt-3 gap-3'>
        <button onClick={handlePrint} className='btn btn-sm text-capitalize fw-semibold px-2 py-2 border-0' style={{ backgroundColor: '#28A745', color: '#FFFFFF' }}><i className="fa-solid fa-print" style={{fontSize: '20px'}}></i></button>
        <button onClick={handleDownloadPDF} className='btn btn-sm text-capitalize fw-semibold px-2 py-2 border-0' style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}> <i className="fa-solid fa-file-pdf" style={{fontSize: '20px'}}></i></button>
      </div>
                </div>
                
            </div>
        </div>
       
      </>
    );
}

export default SAPaySlip;
