"use client";

import { useState } from "react";
import Image from "next/image";
import banner from "./../assets/images/undraw_medicine.png";

function Home() {
  const [customername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsername = (e) => {
    let value = e.target.value;
    setUsername(value);
    localStorage.setItem("customername", value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
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
                  <input className="form-control" type="text" placeholder="Enter Username..." onChange={(e) => handleUsername(e)} />
                </div>
                <div className="col-12 mb-3">
                  <div className="input-group">
                    <input className="form-control" type={!showPassword ? "password" : "text"} placeholder="Enter Password..." />
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
                </div>
                <div className="col-12 mb-3">
                  <a href="/customers" type="button" className="btn btn-primary w-100"><i className="bi bi-box-arrow-in-right me-2"></i> Login</a>
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