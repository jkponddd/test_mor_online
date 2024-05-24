"use client"

import { useEffect, useState } from 'react';
import customerLists from './../../customers.json';

const _customerLists = customerLists;

function Customers() {
    const [searchName, setSearchName] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');

    const handleSearch = (e) => {
        setSearchName(e.target.value);
    };

    const handleGenderFilterChange = (e) => {
        setGenderFilter(e.target.value);
    };

    const [sortOrder, setSortOrder] = useState(true);

    const handleSortOrderChange = () => {
        setSortOrder(!sortOrder);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    const handleItemsPerPageChange = (e) => {
        let value = e.target.value;

        if (e.target.value == "all") {
            setItemsPerPage(parseInt(_customerLists.length));
        } else {
            setItemsPerPage(parseInt(value));
        }

        setCurrentPage(1);
    };

    useEffect(() => {
        setTotalPages(Math.ceil(_customerLists.length / itemsPerPage));
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(_customerLists.length / itemsPerPage));
    }, [itemsPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = _customerLists.slice(indexOfFirstItem, indexOfLastItem).filter(item =>
        (item.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (genderFilter === 'all' || item.gender === genderFilter)
    );

    filteredData.sort((a, b) => {
        if (sortOrder) {
            return a.age - b.age;
        } else {
            return b.age - a.age;
        }
    });

    const [showDataClearData, setShowDataClearData] = useState(false);

    const handleClearData = () => {
        window.location.reload();
    }

    useEffect(() => {
        if (itemsPerPage != 5 || searchName != '' || genderFilter != 'all') {
            setShowDataClearData(true);
        } else {
            setShowDataClearData(false);
        }
    }, [searchName, genderFilter, itemsPerPage]);

    const Pagination = ({ totalPages, paginate }) => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className='d-flex gap-2'>
                {pageNumbers.map((number) => (
                    <span key={number} type="button" className={`badge ${number == currentPage ? "text-bg-primary" : "text-bg-secondary"} w-100`} onClick={() => paginate(number)}>{number}</span>
                ))}
            </div>
        );
    };

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
                        <div>

                            <h4 className='mb-3'>Customers</h4>
                            <div className='row'>
                                <div className="col-12 col-md-3 mb-3">
                                    <input type="text" className='form-control' placeholder="Search by name..." value={searchName} onChange={handleSearch} />
                                </div>
                                <div className="col-12 col-md-3 mb-3">
                                    <select className='form-select' value={genderFilter} onChange={handleGenderFilterChange}>
                                        <option value="all">All Genders</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
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
                                            <th>Image</th>
                                            <th>Username</th>
                                            <th>Name</th>
                                            <th className='d-flex gap-2'><span>Age</span> <i className="bi bi-arrow-down-up" type="button" onClick={handleSortOrderChange}></i></th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length > 0 ?
                                            <>
                                                {filteredData.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img src={item.image} className="w-auto" style={{ borderRadius: '10px' }} height={80} />
                                                        </td>
                                                        <td>{item.username}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.age}</td>
                                                        <td>
                                                            {item.gender === 'male' ? 'Male' : 'Female'}
                                                        </td>
                                                        <td>
                                                            <a href={'/customers/' + item.id} className='btn btn-primary'><i className="bi bi-eye"></i></a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td className="text-center" colSpan={7}>No Data...</td>
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
                                <Pagination totalPages={totalPages} paginate={paginate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Customers;