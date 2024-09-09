import React, { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../Utils/Validation';
import { saveToken, getLoginType } from '../../Utils/storage';
import { isAuthenticated } from '../../Utils/Auth';
import { toast } from 'react-toastify';
import { loginUser } from '../../Api/Login';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaUserLock } from 'react-icons/fa';
import Login_img from "../../Assests/Images/Login_img6.jpg";

export const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: { required: false, valid: false }, password: { required: false, valid: false } });
  const [submitted, setSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleValidation = (data) => {
    return {
      email: {
        required: data.email === "",
        valid: !isValidEmail(data.email)
      },
      password: {
        required: data.password === "",
        valid: !isValidPassword(data.password)
      }
    };
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    if (submitted) {
      const newErrors = handleValidation({ ...inputs, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleErrors = (obj) => {
    return !Object.values(obj).some(prop => prop.required || prop.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = handleValidation(inputs);
    setErrors(newErrors);
    setSubmitted(true);
    if (handleErrors(newErrors)) {
      loginUser(inputs).then(res => {
        const { token, loginType } = res?.data?.result || {};
        if (loginType === 'superAdmin') {
          const superAdminId = res?.data?.result?.superAdminDetails?._id;
          saveToken({ token, superAdminId, loginType });
          if (isAuthenticated()) {
            navigate("/SADashboard");
            window.location.reload();
          }
        } else if (loginType === 'staff') {
          const staffId = res?.data?.result?.staffDetails?._id;
          saveToken({ token, staffId, loginType });
          if (isAuthenticated()) {
            navigate("/StaffDashboard");
            window.location.reload();
          }
        }
        toast.success(res?.data?.message);
      }).catch((err) => {
        toast.error(err?.response?.data?.message);
      });
    }
  };

  if (isAuthenticated()) {
    const type = getLoginType();
    return <Navigate to={type === 'superAdmin' ? "/SADashboard" : type === 'staff' ? "/StaffDashboard" : "/"} />;
  }

  return (
    <>
    <section className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-primary">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-lg text-bg-white my-5">
            <div className="row g-0">
              <div className="col-md-6 d-none d-md-block">
                <img className="img-fluid rounded-start h-100 w-100" src={Login_img} alt="login_image" />
              </div>
              <div className="col-md-6 p-5">
                <h5 className="h5 fw-semibold text-dark text-start">
                  Welcome to <span className="text-primary">Afynd</span>
                </h5>
                <p className="text-muted text-start">
                  <small>Welcome back, please login to your account</small>
                </p>
                <form className="py-4" onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text rounded-start">
                      <FaUser />
                    </span>
                    <input
                      type="email"
                      name="email"
                      onChange={handleInputs}
                      className="form-control"
                      placeholder="Email Address..."
                    />
                    {errors.email.required && (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    )}
                    {errors.email.valid && !errors.email.required && (
                      <div className="text-danger form-text">
                        Enter a valid Email Id.
                      </div>
                    )}
                  </div>
                  <div className="input-group mb-3 position-relative">
                    <span className="input-group-text rounded-start">
                      <FaLock />
                    </span>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      onChange={handleInputs}
                      autoComplete="off"
                      className="form-control rounded-end"
                      placeholder="Password..."
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password.required && (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    )}
                    {errors.password.valid && !errors.password.required && (
                      <div className="text-danger form-text">
                        A minimum 8 characters password containing a combination of <strong>uppercase, lowercase, special characters, and numbers</strong>.
                      </div>
                    )}
                  </div>
                  <div className="text-end">
                    <Link to="#" className="text-decoration-none text-primary fw-semibold">
                      Forget Password?
                    </Link>
                  </div>
                  <div className="text-end mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary px-3 py-2 fw-semibold text-capitalize"
                    >
                      <FaUserLock /> &nbsp; Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    <div className="container-fluid bg-body-tertiary ">
  <div className="bg-holder bg-auth-card-overlay" style={{backgroundImage:`url(${require("../../Assests/Images/Login_img2.jpg")})`}} />
  {/*/.bg-holder*/}
  <div className="row flex-center position-relative min-vh-100 g-0 py-5">
    <div className="col-11 col-sm-10 col-xl-8">
      <div className="card border border-translucent auth-card">
        <div className="card-body pe-md-0">
          <div className="row align-items-center gx-0 gy-7">
            <div className="col-5 bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
              <div className="bg-holder position-relative" style={{backgroundImage:`url(${require("../../Assests/Images/Login_img6.jpg")})`}} />
              {/*/.bg-holder*/}
              <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
                <h3 className="mb-3 text-body-emphasis fs-7">Phoenix Authentication</h3>
                <p className="text-body-tertiary">Give yourself some hassle-free development process with the uniqueness of Phoenix!</p>
                <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                  <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2" /><span className="text-body-tertiary fw-semibold">Fast</span></li>
                  <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2" /><span className="text-body-tertiary fw-semibold">Simple</span></li>
                  <li className="d-flex align-items-center"><span className="uil uil-check-circle text-success me-2" /><span className="text-body-tertiary fw-semibold">Responsive</span></li>
                </ul>
              </div>
              <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15"><img className="auth-title-box-img d-dark-none" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" alt /><img className="auth-title-box-img d-light-none" src="../../../assets/img/spot-illustrations/auth-dark.png" alt /></div>
            </div>
            <div className="col-7">
              <div className="auth-form-box p-4">
                <div className="text-center mb-7"><a className="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                    <div className="d-flex align-items-center fw-bolder  d-inline-block"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" alt="phoenix" width={58} /></div>
                  </a>
                  <h3 className="text-body-highlight">Sign In</h3>
                  <p className="text-body-tertiary">Get access to your account</p>
                </div><button className="btn btn-phoenix-secondary w-100 mb-3"><span className="fab fa-google text-danger me-2 fs-9" />Sign in with google</button><button className="btn btn-phoenix-secondary w-100"><span className="fab fa-facebook text-primary me-2 fs-9" />Sign in with facebook</button>
                <div className="position-relative">
                  <hr className="bg-body-secondary mt-5 mb-4" />
                  <div className="divider-content-center bg-body-emphasis">or use email</div>
                </div>
                <div className="mb-3 text-start"><label className="form-label" htmlFor="email">Email address</label>
                  <div className="form-icon-container"><input className="form-control form-icon-input" id="email" type="email" placeholder="name@example.com" /><span className="fas fa-user text-body fs-9 form-icon" /></div>
                </div>
                <div className="mb-3 text-start"><label className="form-label" htmlFor="password">Password</label>
                  <div className="form-icon-container" data-password="data-password"><input className="form-control form-icon-input pe-6" id="password" type="password" placeholder="Password" data-password-input="data-password-input" /><span className="fas fa-key text-body fs-9 form-icon" /><button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle="data-password-toggle"><span className="uil uil-eye show" /><span className="uil uil-eye-slash hide" /></button></div>
                </div>
                <div className="row flex-between-center mb-7">
                  <div className="col-auto">
                    <div className="form-check mb-0"><input className="form-check-input" id="basic-checkbox" type="checkbox" defaultChecked="checked" /><label className="form-check-label mb-0" htmlFor="basic-checkbox">Remember me</label></div>
                  </div>
                  <div className="col-auto"><a className="fs-9 fw-semibold" href="../../../pages/authentication/card/forgot-password.html">Forgot Password?</a></div>
                </div><button className="btn btn-primary w-100 mb-3">Sign In</button>
                <div className="text-center"><a className="fs-9 fw-bold" href="../../../pages/authentication/card/sign-up.html">Create an account</a></div>
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
};

export default Login;
