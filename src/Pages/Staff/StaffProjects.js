import React,{useState} from 'react'
import Header from "../../Components/StaffNavbar";
import Sidebar from "../../Components/Sidebar";
import { Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
export const StaffProjects = () => {

  const [content, setContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid" style={{fontSize:'14px'}}>
        <div className="row">
          <div className="col-lg-2 ">
            <Sidebar />
          </div>
          <div className="col-lg-10">

<div className='container'>
<div className='container'>
  <div className='row'>
    <div className='col-md-3'>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center rounded-start" style={{ backgroundColor: '#28A745' }}>
            <i className="fas fa-user fa-2x" style={{ color: '#FFFFFF' }}></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#343A40' }}>0</h5>
              <p className="card-text" style={{ color: '#343A40' }}>
                <small className="text-body-secondary">Total <span className='text-success'>Completed</span></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center rounded-start" style={{ backgroundColor: '#007BFF' }}>
            <i className="fas fa-user fa-2x" style={{ color: '#FFFFFF' }}></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#343A40' }}>0</h5>
              <p className="card-text" style={{ color: '#343A40' }}>
                <small className="text-body-secondary">Total <span className='text-primary'>Progress</span></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center rounded-start" style={{ backgroundColor: '#17A2B8' }}>
            <i className="fas fa-user fa-2x" style={{ color: '#FFFFFF' }}></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#343A40' }}>0</h5>
              <p className="card-text" style={{ color: '#343A40' }}>
                <small className="text-body-secondary">Total <span className='text-info'>Started</span></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center rounded-start" style={{ backgroundColor: '#DC3545' }}>
            <i className="fas fa-user fa-2x" style={{ color: '#FFFFFF' }}></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#343A40' }}>0</h5>
              <p className="card-text" style={{ color: '#343A40' }}>
                <small className="text-body-secondary">Total <span className='text-danger'>On Hold</span></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
              <div className="collapse" id="addComplaintCollapse">
                <div className="card border-0 p-2 mb-4">
                  <div className="card-header bg-white d-flex justify-content-between">
                    <h6 className="h6 fw-semibold">Add New Project</h6>
                    <button
                      className="btn btn-sm text-capitalize fw-semibold"
                      style={{ backgroundColor: "#7267ef", color: "#fff" }}
                      data-bs-toggle="collapse"
                      href="#addComplaintCollapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="addComplaintCollapse"
                    >
                      Hide
                    </button>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="row gy-3 gx-4">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label"> Title</label>
                          <input
                            type="text"
                            className="form-control rounded-1 text-muted"
                            placeholder="Example Test"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">Client</label>
                          <select class="form-select rounded-1 rext-muted" aria-label="Default select example" style={{ fontSize: "12px" }}>
  <option selected style={{ fontSize: "12px" }}>Select Client</option>
  <option value="1" style={{ fontSize: "12px" }}>One</option>
  <option value="2" style={{ fontSize: "12px" }}>Two</option>
  <option value="3" style={{ fontSize: "12px" }}>Three</option>
</select>
                        
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">
                           Estimated Hour
                          </label>
                          <input
                            type="date"
                            className="form-control rounded-1 text-uppercase text-muted"
                            placeholder="Example 22/07/2024"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">Priority</label>
                          <select class="form-select rounded-1 rext-muted" aria-label="Default select example" style={{ fontSize: "12px" }}>
  <option selected style={{ fontSize: "12px" }}>Select Priority</option>
  <option value="1" style={{ fontSize: "12px" }}>One</option>
  <option value="2" style={{ fontSize: "12px" }}>Two</option>
  <option value="3" style={{ fontSize: "12px" }}>Three</option>
</select>
                        
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">
                         Start Date
                          </label>
                          <input
                            type="date"
                            className="form-control rounded-1 text-uppercase text-muted"
                            placeholder="Example 22/07/2024"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label">
                          End Date
                          </label>
                          <input
                            type="date"
                            className="form-control rounded-1 text-uppercase text-muted"
                            placeholder="Example 22/07/2024"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                          <label className="form-label"> Team</label>
                          <input
                            type="text"
                            className="form-control rounded-1 text-muted"
                            placeholder="Example IT"
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label className="form-label">Summary</label>
                          <textarea
                            className="form-control rounded-1 text-muted"
                            placeholder="Enter Message here...."
                            rows="5"
                            style={{ fontSize: "12px" }}
                          ></textarea>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <label className="form-label">Description</label>
                        <Editor
        apiKey="zsaa70k6kdt6bw9gg6ff5qwe2jd1pl3l0cul48u6w5nwrb3q"
        initialValue=""
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist', 'anchor', 'autolink', 'autosave', 'code', 'codesample', 'directionality', 'emoticons', 'fullscreen',
            'help', 'image', 'imagetools', 'importcss', 'insertdatetime', 'link', 'lists', 'media', 'nonbreaking',
            'pagebreak', 'preview', 'print', 'quickbars', 'save', 'searchreplace', 'table', 'template', 'visualblocks',
            'visualchars', 'wordcount'
          ],
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handleEditorChange}
      />
      </div>
                      </div>
                    </div>
                    <div className="card-footer bg-white p-4">
                      <div className="d-flex justify-content-end gap-3">
                        <buton
                          className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 btn-light border-0 "
                          style={{ fontSize: "12px" }}
                        >
                          Reset
                        </buton>
                        <buton
                          className="btn text-capitalize fw-semibold px-3 py-2 rounded-1 text-white border-0 "
                          style={{
                            fontSize: "12px",
                            backgroundColor: "#7267ef",
                          }}
                        >
                          Save
                        </buton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card border-0 p-2 mb-4">
                <div className="card-header bg-white d-flex justify-content-between">
                  <h6 className="h6 fw-semibold">List All Projects</h6>
                  <button
                    className="btn btn-sm text-capitalize fw-semibold"
                    style={{ backgroundColor: "#7267ef", color: "#fff" }}
                    data-bs-toggle="collapse"
                    href="#addComplaintCollapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="addComplaintCollapse"
                  >
                    Add
                  </button>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
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
                        <th>Projects</th>
                        <th>Client</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Team </th>
                        <th>Priority</th>
                        <th>Progress</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: "11px" }}>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center d-flex gap-3 justify-content-center">
                          <Link to="/StaffViewProjects" target="_blank">
                            <i className="far fa-eye me-1"></i>
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
                        <Link to="#" className="page-link">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>



</div>
          </div>
          </div>
          </div>
          </>
  )
}
export default StaffProjects