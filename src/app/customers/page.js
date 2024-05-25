"use client"

import { useEffect, useState } from 'react';
import Navbar from "./../components/Navbar.js";
import Sidebar from "./../components/Sidebar.js";
import Pagination from "./../components/Pagination.js";

import customerLists from './../../customers.json';
import Image from "next/image";
import noData from "./../../assets/images/undraw_no_data.png";

const _customerLists = customerLists;

function Customers() {
    const [searchName, setSearchName] = useState('');
    const [sortOrder, setSortOrder] = useState(true);
    const [genderFilter, setGenderFilter] = useState('all');
    const [showDataClearData, setShowDataClearData] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = (e) => {
        setSearchName(e.target.value);
    };

    const handleGenderFilterChange = (e) => {
        setGenderFilter(e.target.value);
    };

    const handleSortOrderChange = () => {
        setSortOrder(!sortOrder);
    };

    const handleClearData = () => {
        window.location.reload();
    };

    const handleItemsPerPageChange = (e) => {
        let value = e.target.value;

        if (e.target.value == "all") {
            setItemsPerPage(parseInt(_customerLists.length));
        } else {
            setItemsPerPage(parseInt(value));
        }

        setCurrentPage(1);
    };

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

    useEffect(() => {
        setTotalPages(Math.ceil(_customerLists.length / itemsPerPage));
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(_customerLists.length / itemsPerPage));
    }, [itemsPerPage]);

    useEffect(() => {
        if (itemsPerPage != 5 || searchName != '' || genderFilter != 'all') {
            setShowDataClearData(true);
        } else {
            setShowDataClearData(false);
        }
    }, [searchName, genderFilter, itemsPerPage]);

    return (
        <>
            <Navbar />
            <div className="container-fluid pt-5">
                <div className="row pt-2">
                    <Sidebar />
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
                                            <th><span>Age</span> <i className="bi bi-arrow-down-up ms-2" type="button" onClick={handleSortOrderChange}></i></th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.length > 0 ?
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customers;