"use client"

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [customerName, setCustomerName] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("customerName")) {
                setCustomerName(localStorage.getItem("customerName"));
            }
        };
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
                                <li className="nav-item my-2">
                                    <a className="nav-link px-3" aria-current="page" href=""><i className="bi bi-bar-chart-line-fill me-2"></i> Dashboard</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className={`nav-link px-3 ${pathname.includes("/customers") ? "active" : ""} `} aria-current="page" href="/customers"><i className="bi bi-people-fill me-2"></i> Customers</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link px-3" aria-current="page" href="#"><i className="bi bi-hospital-fill me-2"></i> Rooms</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link px-3" aria-current="page" href="#"><i className="bi bi-megaphone-fill me-2"></i>News & Activities</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link px-3" aria-disabled="true"><i className="bi bi-bell-fill me-2"></i> Notification <span className="badge rounded-pill text-bg-danger">99+</span></a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link px-3" aria-current="page" href="#"><i className="bi bi-file-earmark-excel-fill"></i> Report</a>
                                </li>
                                <li className="nav-item dropdown px-3 pb-3 mb-2">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="bi bi-gear-fill me-2"></i> Settings</a>
                                    <ul className="dropdown-menu p-3">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-fill-gear me-2"></i> Profile</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-box-seam-fill me-2"></i> Stock</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-lock me-2"></i> Role</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item mb-2" style={{ pointerEvents: 'none' }}>
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Promotion <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                                </li>
                                <li className="nav-item mb-2" style={{ pointerEvents: 'none' }}>
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Earn & Burn <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                                </li>
                            </ul>
                            <div className='d-flex gap-3 mx-3 mx-lg-0'>
                                <a href="#" type="button" className='btn btn-outline-secondary px-3'>
                                    <i className="bi bi-person-circle me-2"></i><label>{customerName}</label>
                                </a>
                                <a href="/" type="button" className="btn btn-outline-danger px-3"><i className="bi bi-box-arrow-in-left me-2"></i> Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};