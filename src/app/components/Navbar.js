"use client"

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

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
                                    <a className={`nav-link px-3 ${pathname.includes("/customers") ? "active" : ""} `} aria-current="page" href="/customers">Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="#">Rooms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-current="page" href="#">News & Activities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" aria-disabled="true">Notification <span className="badge rounded-pill text-bg-danger">99+</span></a>
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
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Promotion <span className="badge rounded-pill text-bg-danger">soon</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 disabled" aria-disabled="true">Earn & Burn <span className="badge rounded-pill text-bg-danger">soon</span></a>
                                </li>
                            </ul>
                            <div className='d-flex gap-3 mx-3 mx-lg-0'>
                                <a href="#" type="button" className='btn btn-outline-secondary px-3'>
                                    <i class="bi bi-person-circle me-2"></i>
                                    {localStorage.getItem("customerName")}
                                </a>
                                <a href="/" type="button" className="btn btn-outline-danger px-3"><i className="bi bi-box-arrow-in-left me-2"></i> Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}