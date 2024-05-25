"use client"

import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <div className="col-lg-3 d-none d-lg-block p-3" style={{ boxShadow: '0 3px 5px rgba(0, 0, 0, 0.125)', height: 'auto', minHeight: '100vh', position: 'fixed' }}>
                <ul className="navbar-nav nav nav-pills me-auto">
                    <li className="nav-item">
                        <a className="nav-link p-3" aria-current="page" href=""><i className="bi bi-bar-chart-line-fill"></i> Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link px-3 ${pathname.includes("/customers") ? "active" : ""} `} aria-current="page" href="/customers"><i className="bi bi-people-fill"></i> Customers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-hospital-fill"></i> Rooms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-megaphone-fill"></i> News & Activities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-bell-fill"></i> Notification <span className="badge rounded-pill text-bg-danger">99+</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-file-earmark-excel-fill"></i> Report</a>
                    </li>
                    <li className="nav-item dropdown p-3" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <a className="nav-link dropdown-toggle p-0"><i className="bi bi-gear-fill"></i> Settings</a>
                    </li>
                    <div className="collapse px-3" id="collapseExample">
                        <li className="nav-item">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-person-fill-gear"></i> Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-box-seam-fill"></i> Stock</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-person-lock"></i> Role</a>
                        </li>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i className="bi bi-star-fill"></i> Promotion <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i className="bi bi-currency-exchange"></i> Earn & Burn <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                    </li>
                </ul>
            </div>
        </>
    );
}