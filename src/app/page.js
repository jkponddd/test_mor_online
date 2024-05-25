"use client";

import { useState } from "react";
import Image from "next/image";
import banner from "./../assets/images/undraw_medicine.png";

function Home() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [passwordError, setPasswordError] = useState(false);

  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertText, setShowAlertText] = useState("");

  const handleUsername = (e) => {
    let value = e.target.value;
    localStorage.setItem("customerName", value);
  };

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);

    if (value == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleLogin = () => {
    if (password.length < 6) {
      setPasswordError(true);
      setShowAlertError(true);
      setShowAlertText("Password must be at least 6 characters.")

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
        Error! {showAlertText}
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
                    <input className="form-control" type="text" placeholder="Enter Username..." onChange={(e) => handleUsername(e)} />
                    <label for="floatingInput">Username</label>
                  </div>
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
                    Password must be at least 6 characters.
                  </small>
                </div>
                <div className="col-12 mb-3">
                  <button type="button" className="btn btn-lg btn-primary w-100" onClick={handleLogin}><i className="bi bi-box-arrow-in-right me-2"></i> Login</button>
                </div>
                <div className="col-12 mb-3 text-center">
                  <a href="#">No have account? Register</a>
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