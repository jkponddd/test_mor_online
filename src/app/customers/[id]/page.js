"use client";

import Navbar from "./../../components/Navbar.js";
import Sidebar from "./../../components/Sidebar.js";

import { useEffect, useState } from 'react';
import customerLists from './../../../customers.json';

function CustomerDetail({ params }) {
    const _customerLists = customerLists;
    const [customerDetail, setCustomerDetail] = useState([]);
    // const [recommendCustomers, setRecommendCustomers] = useState([]);

    const getCustomerDetail = (id) => {
        let customer = _customerLists.filter((i) => i.id == id);
        setCustomerDetail(customer);
    };

    // const getRecommendCustomers = (id) => {
    //     let customer = _customerLists.filter((i) => i.id != id);
    //     setRecommendCustomers(customer);
    // };

    useEffect(() => {
        getCustomerDetail(params.id);
        // getRecommendCustomers(params.id);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid pt-5">
                <div className="row pt-2">
                    <Sidebar />
                    <div className="col-12 offset-lg-3 col-lg-9 p-3">
                        <div className='d-flex justify-content-between'>
                            <h4 className='mb-3'>Customer Detail</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/customers" style={{ color: '#34EEC3' }}>Customers</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Customer Detail</li>
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
                                                        <p className="card-text"><small className="text-body-secondary"><i className="bi bi-person-fill me-2"></i>{item.username}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            {/* <h4 className='mb-3'>Recommend Customers</h4>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                {recommendCustomers?.map((item) => {
                                    return (
                                        <>
                                            <div className="col">
                                                <div className="card h-100">
                                                    <img src={item.image} className="card-img-top" style={{ borderRadius: '30px 30px 0px 0px' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <div className='d-flex flex-column gap-2 card-text'>
                                                            <label>Age: {item.age} years old.</label>
                                                            <label>Gender: {item.gender == "male" ? "Male" : "Female"}</label>
                                                        </div>
                                                        <p className="card-text"><small className="text-body-secondary"><i className="bi bi-person-fill me-2"></i>{item.username}</small></p>
                                                    </div>
                                                    <div className="p-3 text-center">
                                                        <a href={'/customers/' + item.id} type="button" className="btn btn-primary w-100">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerDetail;
