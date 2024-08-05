import React from "react";
import Login_img from "../../Assests/Images/Login_img6.jpg";
import { FaUser, FaLock, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <section className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-primary">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-8 col-lg-8">
            <div className="card border-0 shadow-lg text-bg-whiite my-5">
              <div className="row g-0">
                <div className="col-md-6 d-none d-md-block">
                  <img
                    className="img-fluid rounded-start h-100 w-100"
                    src={Login_img}
                    alt="login_image"
                  />
                </div>
                <div className="col-md-6 p-5">
                  <h5 className="h5 fw-semibold text-dark text-start">
                    Welcome to <span className="text-primary">Afynd</span>
                  </h5>
                  <p className="text-muted text-start">
                    <small>Welcome back, please login to your account</small>
                  </p>
                  <form className="py-4">
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text rounded-start-1"
                        id="basic-addon1"
                      >
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-end-1 text-secondary "
                        placeholder="Your Username"
                        name="username"
                        aria-describedby="basic-addon1"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text rounded-start-1"
                        id="basic-addon2"
                      >
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        className="form-control form-control-lg rounded-end-1 "
                        placeholder="Enter Password"
                        name="password"
                        aria-describedby="basic-addon2"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="text-end">
                      <Link
                        to="#"
                        className="text-decoration-none text-primary fw-semibold"
                      >
                        Forget Password?
                      </Link>
                    </div>
                    <div className="text-end mt-3">
                      <Link
                        to="/SADashboard"
                        className="btn btn-primary px-3 py-2 fw-semibold text-capitalize"
                      >
                        <FaUserLock /> &nbsp; Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
