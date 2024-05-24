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
    const [itemsPerPage, setItemsPerPage] = useState(10);
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
                        <div>
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
                                <div className="col-12 col-md-auto mb-3">
                                    <button type="button" className='btn btn-outline-secondary'><i className="bi bi-x-circle me-2"></i> Clear</button>
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
                                        {filteredData.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img src={item.image} className="w-auto" height={80} />
                                                </td>
                                                <td>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                    {item.gender === 'male' ? 'Male' : 'Female'}
                                                </td>
                                                <td>
                                                    <a href={'/customers/' + item.id} className='badge text-bg-primary text-white'><i className="bi bi-eye"></i></a>
                                                </td>
                                            </tr>
                                        ))}
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
            </div>
        </>
    );
};

export default Customers;