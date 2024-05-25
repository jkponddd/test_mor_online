"use client";

import { useState } from "react";
import Image from "next/image";
import banner from "./../assets/images/undraw_medicine.png";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [usernameTextError, setUsernameTextError] = useState("");
  const [passwordTextError, setPasswordTextError] = useState("");

  const [showAlertError, setShowAlertError] = useState(false);
  const [showTextAlertError, setShowTextAlertError] = useState("");

  const handleUsername = (e) => {
    let value = e.target.value;
    localStorage.setItem("customerName", value);
    setUsername(value);

    if (value == "") {
      setUsernameError(true);
      setUsernameTextError("Username is invalid.");
    } else {
      setUsernameError(false);
    }
  };

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);

    if (value == "") {
      setPasswordError(true);
      setPasswordTextError("Password is invalid, Must be at least 6 characters.");
    } else {
      setPasswordError(false);
    }
  };

  const handleLogin = () => {
    let checkShowError = false;

    if (username != "admin") {
      checkShowError = true;
      setUsernameError(true);
      setUsernameTextError("Username wrong, Please check.");
    } else if (password.length < 6) {
      checkShowError = true;
      setUsernameError(false);
      setUsernameTextError("");

      setPasswordError(true);
      setPasswordTextError("Password must be at least 6 characters.");
    } else if (username == "admin" && password != "123456") {
      checkShowError = true;
      setUsernameError(false);
      setUsernameTextError("");

      setPasswordError(true);
      setPasswordTextError("Password wrong, Please check.");
    }

    if (checkShowError) {
      checkShowError = false;
      setShowAlertError(true);
      setShowTextAlertError("Username or password wrong, Please check.");

      setTimeout(() => {
        setShowAlertError(false);
      }, 3000);
    } else {
      window.location.href = "/customers";
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={`alert alert-danger position-absolute ${showAlertError ? 'd-block' : 'd-none'}`} role="alert" style={{ right: "20px", top: "20px" }}>
        Error! {showTextAlertError}
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-12 col-lg-6 text-center d-none d-lg-block">
            <div className="d-flex flex-column">
              <Image src={banner} className="w-100 h-auto" />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              <label>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </label>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-5 h-100 d-flex justify-content-center align-items-center" style={{ background: "#0437b5" }}>
            <div className="card p-5">
              <div className="row">
                <div className="col-12 mb-4">
                  <h2 className="text-center">LOGIN</h2>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-floating">
                    <input className={`form-control ${usernameError ? 'is-invalid' : ''}`} type="text" placeholder="Enter Username..." onChange={(e) => handleUsername(e)} />
                    <label for="floatingInput">Username</label>
                  </div>
                  <small className={`invalid-feedback ${usernameError ? 'd-block' : 'd-none'}`}>
                    {usernameTextError}
                  </small>
                </div>
                <div className="col-12 mb-3">
                  <div className="input-group">
                    <div className="form-floating">
                      <input className={`form-control ${passwordError ? 'is-invalid' : ''}`} type={!showPassword ? "password" : "text"} placeholder="Enter Password..." onChange={(e) => handlePassword(e)} />
                      <label for="floatingInput">Password</label>
                    </div>
                    <button type="button" className="input-group-text" onClick={handleShowPassword} style={{ borderRadius: '0px 30px 30px 0px' }}>
                      {showPassword ?
                        <>
                          <i className="bi bi-eye-slash"></i>
                        </> :
                        <>
                          <i className="bi bi-eye"></i>
                        </>
                      }
                    </button>
                  </div>
                  <small className={`invalid-feedback ${passwordError ? 'd-block' : 'd-none'}`}>
                    {passwordTextError}
                  </small>
                </div>
                <div className="col-12 mb-3">
                  <button type="button" className="btn btn-lg btn-primary w-100" onClick={handleLogin}><i className="bi bi-box-arrow-in-right me-2"></i> Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;