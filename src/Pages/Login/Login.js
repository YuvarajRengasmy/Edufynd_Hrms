import React, { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../Utils/Validation';
import { saveToken, getLoginType } from '../../Utils/storage';
import { isAuthenticated } from '../../Utils/Auth';
import { toast } from 'react-toastify';
import { loginUser } from '../../Api/Login';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Login_img from "../../Assests/Images/Login_img6.jpg";
import { FaUser, FaLock, FaUserLock } from "react-icons/fa";


export const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: { required: false, valid: false }, password: { required: false, valid: false } });
  const [submitted, setSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleValidation = (data) => {
    let newErrors = {
      email: {
        required: data.email === "",
        valid: !isValidEmail(data.email)
      },
      password: {
        required: data.password === "",
        valid: !isValidPassword(data.password)
      }
    };
    return newErrors;
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
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const prop = obj[key];
            if (prop.required === true || prop.valid === true) {
                return false;
            }
        }
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidation(inputs);
    setErrors(newError);
    setSubmitted(true);
    if (handleErrors(newError)) {
        loginUser(inputs).then(res => {
            let token = res?.data?.result?.token;
            let loginType = res?.data?.result?.loginType;
           
            if (loginType === 'superAdmin') {
                let superAdminId = res?.data?.result?.superAdminDetails?._id;
                let data = {
                    token: token, superAdminId: superAdminId, loginType: loginType
                };
                saveToken(data);
                if (isAuthenticated()) {
                    navigate("/SADepartment");
                    window.location.reload(); // Refresh the page
                }
            }
           
            if (loginType === 'staff') {
              let staffId = res?.data?.result?.staffDetails?._id;
              let data = {
                  token: token, staffId: staffId, loginType: loginType
              };
              saveToken(data);
              if (isAuthenticated()) {
                  navigate("/StaffDashboard");
                  window.location.reload(); // Refresh the page
              }
          }
            toast.success(res?.data?.message);
        })
        .catch((err) => {
            toast.error(err?.response?.data?.message);
        });
    }
  }

  if (isAuthenticated()) {
    const type = getLoginType();
     if (type === 'superAdmin') { return <Navigate to="/SADepartment" /> }
    else if (type === 'staff') { return <Navigate to="/StaffDashboard" /> }
    else  { return <Navigate to="/" /> }
  }





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
                  <form className="py-4" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text rounded-start-1"
                        id="basic-addon1"
                      >
                        <FaUser />
                      </span>
                      <input
                      type="email"
                      name="email"
                      onChange={handleInputs}
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email Address..."
                      style={{ fontSize: '12px' }}
                    />
                      {errors.email.required ? (
                    <div className="text-danger form-text">
                      This field is required.
                    </div>
                  ) : errors.email.valid ? (
                    <div className="text-danger form-text">
                      Enter valid Email Id.
                    </div>
                  ) : null}
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text rounded-start-1"
                        id="basic-addon2"
                      >
                        <FaLock />
                      </span>
                      <input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      onChange={handleInputs}
                      autoComplete="off"
                      className="form-control rounded-end"
                      id="exampleInputPassword"
                      placeholder="Password..."
                      style={{ fontSize: '12px' }}
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password.required ? (
                    <div className="text-danger form-text">
                      This field is required.
                    </div>
                  ) : errors.password.valid ? (
                    <div className="text-danger form-text">
                      A minimum 8 characters password contains a <br />
                      combination of {''}
                      <strong>uppercase, lowercase, {''}</strong>
                      <strong>special <br /> character{''}</strong> and <strong>number</strong>.
                    </div>
                  ) : null}
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
                      <button
                        type="submit" target='_self'
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
    </>
  );
};

export default Login;
