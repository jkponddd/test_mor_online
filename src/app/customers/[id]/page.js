"use client";

import { useEffect, useState } from 'react';
import customerLists from './../../../customers.json';

function CustomerDetail({ params }) {
    const _customerLists = customerLists;
    const [customerDetail, setCustomerDetail] = useState([]);
    const [recommendCustomers, setRecommendCustomers] = useState([]);

    const getCustomerDetail = (id) => {
        let customer = _customerLists.filter((i) => i.id == id);
        setCustomerDetail(customer);
    };

    const getRecommendCustomers = (id) => {
        let customer = _customerLists.filter((i) => i.id != id);
        setRecommendCustomers(customer);
    };

    useEffect(() => {
        getCustomerDetail(params.id);
        getRecommendCustomers(params.id);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100" style={{ position: 'fixed', zIndex: 1, boxShadow: '0 3px 5px rgba(0, 0, 0, 0.125)', }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="" style={{ color: "#34eec3" }}>[LOGO] x ADMIN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-100">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav nav nav-pills me-auto mb-2 mb-lg-0 d-none d-lg-block"></ul>
                            <ul className="navbar-nav nav nav-pills me-auto mb-2 mb-lg-0 d-block d-lg-none">
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 active" aria-current="page" href="/customers">Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="#">Rooms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="#">News & Activities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-disabled="true">Notification <span class="badge rounded-pill text-bg-danger">99+</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="#">Report</a>
                                </li>
                                <li className="nav-item dropdown px-3">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Settings</a>
                                    <ul className="dropdown-menu p-3">
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Stock</a></li>
                                        <li><a className="dropdown-item" href="#">Role</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Promotion <span class="badge rounded-pill text-bg-danger">soon</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Earn & Burn <span class="badge rounded-pill text-bg-danger">soon</span></a>
                                </li>
                            </ul>
                            <a href="/" type="button" className="btn btn-outline-danger px-4 mx-3 mx-lg-0"><i className="bi bi-box-arrow-in-left me-2"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid pt-5">
                <div className="row pt-2">
                    <div className="col-lg-3 d-none d-lg-block p-3" style={{ boxShadow: '0 3px 5px rgba(0, 0, 0, 0.125)', height: 'auto', minHeight: '100vh', position: 'fixed' }}>
                        <ul className="navbar-nav nav nav-pills me-auto">
                            <li className="nav-item">
                                <a className="nav-link p-3" aria-current="page" href=""><i class="bi bi-bar-chart-line-fill"></i> Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3 active" aria-current="page" href="/customers"><i class="bi bi-people-fill"></i> Customers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3" aria-current="page" href="#"><i class="bi bi-hospital-fill"></i> Rooms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3" aria-current="page" href="#"><i class="bi bi-megaphone-fill"></i> News & Activities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3" aria-disabled="true"><i class="bi bi-bell-fill"></i> Notification <span class="badge rounded-pill text-bg-danger">99+</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3" aria-current="page" href="#"><i class="bi bi-file-earmark-excel-fill"></i> Report</a>
                            </li>
                            <li className="nav-item dropdown p-3" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <a className="nav-link dropdown-toggle p-0"><i class="bi bi-gear-fill"></i> Settings</a>
                            </li>
                            <div class="collapse px-3" id="collapseExample">
                                <li className="nav-item">
                                    <a className="nav-link p-3" aria-disabled="true"><i class="bi bi-person-fill-gear"></i> Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-3" aria-disabled="true"><i class="bi bi-box-seam-fill"></i> Stock</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-3" aria-disabled="true"><i class="bi bi-person-lock"></i> Role</a>
                                </li>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i class="bi bi-star-fill"></i> Promotion <span class="badge rounded-pill text-bg-danger">soon</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i class="bi bi-currency-exchange"></i> Earn & Burn <span class="badge rounded-pill text-bg-danger">soon</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 offset-lg-3 col-lg-9 p-3">
                        <div className='d-flex justify-content-between'>
                            <h4 className='mb-3'>Customer Detail</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/customers" style={{ color: '#34EEC3' }}>Customers</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Customer Detail</li>
                                </ol>
                            </nav>
                        </div>
                        <div>
                            {customerDetail?.map((item) => {
                                return (
                                    <>
                                        <div className="card mb-5">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={item.image} className="img-fluid w-100 h-auto" style={{ borderRadius: '30px 0px 0px 30px' }} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body d-flex flex-column justify-content-center h-100">
                                                        <h3 className="card-title">{item.name}</h3>
                                                        <div className='d-flex flex-column gap-2 card-text'>
                                                            <label className='text-wrap-2row'>{item.description}</label>
                                                            <label>Gender: {item.gender == "male" ? "Male" : "Female"}</label>
                                                            <label>Age: {item.age} years old.</label>
                                                        </div>
                                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-person-fill me-2"></i>{item.username}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            <h4 className='mb-3'>Recommend Customers</h4>
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                {recommendCustomers?.map((item) => {
                                    return (
                                        <>
                                            <div class="col">
                                                <div class="card h-100">
                                                    <img src={item.image} class="card-img-top" style={{ borderRadius: '30px 30px 0px 0px' }} />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <div className='d-flex flex-column gap-2 card-text'>
                                                            <label>Age: {item.age} years old.</label>
                                                            <label>Gender: {item.gender == "male" ? "Male" : "Female"}</label>
                                                        </div>
                                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-person-fill me-2"></i>{item.username}</small></p>
                                                    </div>
                                                    <div class="p-3 text-center">
                                                        <a href={'/customers/' + item.id} type="button" class="btn btn-primary w-100">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerDetail;
