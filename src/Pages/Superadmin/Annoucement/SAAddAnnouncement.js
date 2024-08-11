import React from 'react'
import SuperadminSidebar from '../../../Components/SuperadminSidebar'
import Navbar from '../../../Components/Navbar'
import Select from "react-select";
import { RichTextEditor } from "@mantine/rte";

export const SAAddAnnouncement = () => {
  return (
    <div>
    <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <SuperadminSidebar/>
                    </div>
                    <div className='col-lg-9'>
                        <div className='container'>
                        <div className=" container-fluid " style={{fontSize:'14px'}}>
<form >
  <div className="row">
    <div className="col-xl-12 ">
      <div className="card  border-0 rounded-0 shadow-sm p-3 position-relative my-4">
        <div
          className="card-header mt-3 border-0 rounded-0 position-absolute top-0 start-0"
          style={{ background: "#7627ef", color: "#fff" }}
        >
          <h5 className="text-center text-capitalize p-1">
            {" "}
            Add Announcement Details
          </h5>
        </div>
        <div className="card-body mt-5">
          <div className="row g-3">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <label style={{ color: "#231F20" }}>
                Type of Users{" "}
                <span className="text-danger">*</span>
              </label>

              <select
                class="form-select rounded-1 text-muted"
                name="typeOfUser"
                
                aria-label="Default select example"
                style={{
                 
                  fontSize: "12px",
                }}
              >
                <option selected>Select User</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
                <option value="agent">Agent</option>
                <option value="admin">Admin</option>
              </select>
             
            </div>
           
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Admin List<span className="text-danger">*</span>
                </label>
                <Select
                  isMulti
                  placeholder="Select staff"
                
                  name="userName"
                  
                  className="submain-one-form-body-subsection-select"
                />
                
              </div>
           
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Student List
                  <span className="text-danger">*</span>
                </label>
                <Select
                  isMulti
                  placeholder="Select Country"
                
                 
                  name="userName"
                
                  className="submain-one-form-body-subsection-select"
                />
               
                
               
              </div>
           
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Admin List<span className="text-danger">*</span>
                </label>
                <Select
                  isMulti
                  placeholder="Select Country"
                 
                  style={{
                   
                    fontSize: "12px",
                  }}
                  name="userName"
                 
                  className="submain-one-form-body-subsection-select"
                />
               
                
               
              </div>
            
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Admin List<span className="text-danger">*</span>
                </label>
                <Select
                  isMulti
                  placeholder="Select Country"
                  
                  style={{
                   
                    fontSize: "12px",
                  }}
                 
                  name="userName"
                 
                  className="submain-one-form-body-subsection-select"
                />
               
              </div>
           

            <div className="row gy-2 ">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Subject<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control rounded-1 text-muted "
                 
                  style={{
                   
                    fontSize: "12px",
                  }}
                  placeholder="Enter  Subject"
                  name="subject"
                />
              
              </div>
            </div>
            <div className="row gy-2 ">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Content<span className="text-danger">*</span>
                </label>
                <RichTextEditor
                  placeholder="Start writing your content here..."
                  name="content"
                
                  style={{
                   
                    fontSize: "12px",
                    minHeight: "200px",
                    overflowY: "auto",
                  }}
                />
              
              </div>
            </div>

            <div className="row gy-2 ">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <label style={{ color: "#231F20" }}>
                  Image upload
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  className="form-control rounded-1 text-muted "
                  style={{
                   
                    fontSize: "12px",
                    zIndex: "0",
                  }}
                  placeholder="Enter  Image upload"
                  name="uploadImage"
                  
                />
               
              </div>
            </div>

            <div className="add-customer-btns mb-40 d-flex justify-content-end  ml-auto">
              <button
                style={{
                  backgroundColor: "#231F20",
                 
                  fontSize: "12px",
                }}
                type="reset"
                className="btn btn-cancel border-0 fw-semibold text-uppercase text-white px-4 py-2  m-1"
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#FE5722",
                 
                  fontSize: "12px",
                }}
                type="submit"
                className="btn btn-save border-0 fw-semibold text-uppercase text-white px-4 py-2 m-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</div>
    
                            
                        </div>
                        </div>
                        </div>
                        </div></div>
  )
}

export default SAAddAnnouncement
