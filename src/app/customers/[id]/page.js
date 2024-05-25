"use client";

import Navbar from "./../../components/Navbar.js";
import Sidebar from "./../../components/Sidebar.js";
import Footer from "./../../components/Footer.js";
import Pagination from "./../../components/Pagination.js";

import { useEffect, useState } from 'react';
import customerLists from './../../../customers.json';
import historyLists from './../../../histories.json';

import Image from "next/image";
import noData from "./../../../assets/images/undraw_no_data.png";

function CustomerDetail({ params }) {
    const _customerLists = customerLists;
    const [customerDetail, setCustomerDetail] = useState([]);
    const _historyLists = historyLists;
    // const [recommendCustomers, setRecommendCustomers] = useState([]);

    const getCustomerDetail = (id) => {
        let customer = _customerLists.filter((i) => i.id == id);
        setCustomerDetail(customer);
    };

    // const getRecommendCustomers = (id) => {
    //     let customer = _customerLists.filter((i) => i.id != id);
    //     setRecommendCustomers(customer);
    // };

    const [searchOrder, setSearchOrder] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [showDataClearData, setShowDataClearData] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = (e) => {
        setSearchOrder(e.target.value);
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const handleClearData = () => {
        window.location.reload();
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filteredData = _historyLists.filter(item =>
        (item.customer_id == params.id) &&
        (item.order.toLowerCase().includes(searchOrder.toLowerCase())) &&
        (statusFilter === 'all' || item.status === statusFilter)
    );

    const handleItemsPerPageChange = (e) => {
        let value = e.target.value;

        if (e.target.value == "all") {
            setItemsPerPage(parseInt(filteredData?.length));
        } else {
            setItemsPerPage(parseInt(value));
        }

        setCurrentPage(1);
    };

    useEffect(() => {
        setTotalPages(Math.ceil(filteredData?.length / itemsPerPage));
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(filteredData?.length / itemsPerPage));
    }, [itemsPerPage]);

    useEffect(() => {
        if (itemsPerPage != 5 || searchOrder != '' || statusFilter != 'all') {
            setShowDataClearData(true);
        } else {
            setShowDataClearData(false);
        }
    }, [searchOrder, statusFilter, itemsPerPage]);

    useEffect(() => {
        getCustomerDetail(params.id);
        // getRecommendCustomers(params.id);
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid pt-5 mb-5">
                <div className="row pt-2">
                    <Sidebar />
                    <div className="col-12 offset-lg-3 col-lg-9 p-3">
                        <div className='d-flex justify-content-between flex-wrap'>
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
                                    <div key={item.id}>
                                        <div className="card mb-5">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={item.image} className="img-fluid w-100 h-auto card-border-radius-custom" />
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
                                    </div>
                                )
                            })}

                            <div>
                                <h4 className='mb-3'>Histories</h4>
                                <div className='row'>
                                    <div className="col-12 col-md-3 mb-3">
                                        <input type="text" className='form-control' placeholder="Search by order..." value={searchOrder} onChange={handleSearch} />
                                    </div>
                                    <div className="col-12 col-md-3 mb-3">
                                        <select className='form-select' value={statusFilter} onChange={handleStatusFilterChange}>
                                            <option value="all">All Status</option>
                                            <option value="completed">Completed</option>
                                            <option value="pending">Pending</option>
                                            <option value="cancel">Cancel</option>
                                        </select>
                                    </div>
                                    <div className={`col-12 col-md-auto mb-3 ${showDataClearData ? 'd-block' : 'd-none'}`}>
                                        <button type="button" className='btn btn-outline-secondary w-100' onClick={handleClearData}><i className="bi bi-x-circle me-1"></i> Clear</button>
                                    </div>
                                </div>
                                <div className='table-responsive'>
                                    <table className='table table-striped w-100'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Order</th>
                                                <th>Created at</th>
                                                <th>Updated at</th>
                                                <th>Status</th>
                                                <th>Created by</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData?.length > 0 ?
                                                <>
                                                    {filteredData.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.order}</td>
                                                            <td>{formatDate(item.created_at)}</td>
                                                            <td>{formatDate(item.updated_at)}</td>
                                                            <td>
                                                                {item.status === 'completed' ?
                                                                    <>
                                                                        <div className="badge text-bg-success">Completed</div>
                                                                    </> : item.status === 'pending' ?
                                                                        <>
                                                                            <div className="badge text-bg-warning">Pending</div>
                                                                        </> :
                                                                        <>
                                                                            <div className="badge text-bg-danger">Cancel</div>
                                                                        </>
                                                                }
                                                            </td>
                                                            <td>{item.created_by}</td>
                                                        </tr>
                                                    ))}
                                                </>
                                                :
                                                <>
                                                    <tr>
                                                        <td className="text-center" colSpan={7} style={{ boxShadow: 'unset' }}>
                                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                                <Image src={noData} className='h-auto' width={300} />
                                                                <div>No results found...</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <select className="form-select w-auto" id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                        <option value="all">All</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                    <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
                                </div>
                            </div>

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
            <Footer />
        </>
    );
};

export default CustomerDetail;
