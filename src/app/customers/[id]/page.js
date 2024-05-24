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
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="" style={{ color: "#34eec3" }}><i className="bi bi-capsule-pill"></i> LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-block d-lg-none w-100">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Customers</a>
                                </li>
                            </ul>
                            <a href="/" type="button" className="btn btn-danger"><i className="bi bi-box-arrow-in-left me-2"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block p-5">
                        <div className='d-flex flex-column'>
                            <div>
                                <a className="nav-link active" aria-current="page" href="#">Customers</a>
                            </div>
                            <div>
                                <a href="/" type="button" className="btn btn-danger"><i className="bi bi-box-arrow-in-left me-2"></i> Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 p-3 p-md-5">
                        <h2 className='mb-3'>Customer Detail</h2>
                        <div>
                            {customerDetail?.map((item) => {
                                return (
                                    <>
                                        <div className="card mb-5">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={item.image} className="img-fluid w-100 h-auto" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body d-flex flex-column justify-content-center h-100">
                                                        <h3 className="card-title">{item.name}</h3>
                                                        <div className='d-flex flex-column gap-2 card-text'>
                                                            <label className='text-wrap-2row'>{item.description}</label>
                                                            <label>Gender: {item.gender == "male" ? "Male" : "Female"}</label>
                                                            <label>Age: {item.age} years old</label>
                                                        </div>
                                                        <p className="card-text"><small className="text-body-secondary"><i class="bi bi-person-fill me-2"></i>{item.username}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            <h2 className='mb-3'>Recommend Customers</h2>
                            <div class="row row-cols-2 row-cols-md-4 g-4">
                                {recommendCustomers?.map((item) => {
                                    return (
                                        <>
                                            <div class="col">
                                                <div class="card h-100">
                                                    <img src={item.image} class="card-img-top" />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <div className='d-flex flex-column gap-2 card-text'>
                                                            <label>Age: {item.age} years old</label>
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
