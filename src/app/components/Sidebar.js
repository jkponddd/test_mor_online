"use client"

import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <div className="col-lg-3 d-none d-lg-block p-3" style={{ boxShadow: '0 3px 5px rgba(0, 0, 0, 0.125)', height: 'auto', minHeight: '100vh', position: 'fixed' }}>
                <ul className="navbar-nav nav nav-pills me-auto">
                    <li className="nav-item mb-2">
                        <a className="nav-link p-3" aria-current="page" href=""><i className="bi bi-bar-chart-line-fill me-2"></i> Dashboard</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className={`nav-link p-3 ${pathname.includes("/customers") ? "active" : ""} `} aria-current="page" href="/customers"><i className="bi bi-people-fill me-2"></i> Customers</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-hospital-fill me-2"></i> Rooms</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-megaphone-fill me-2"></i> News & Activities</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-bell-fill me-2"></i> Notification <span className="badge rounded-pill text-bg-danger">99+</span></a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link p-3" aria-current="page" href="#"><i className="bi bi-file-earmark-excel-fill"></i> Report</a>
                    </li>
                    <li className="nav-item mb-2 dropdown p-3" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <a className="nav-link dropdown-toggle p-0"><i className="bi bi-gear-fill me-2"></i> Settings</a>
                    </li>
                    <div className="collapse px-3" id="collapseExample">
                        <li className="nav-item mb-2">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-person-fill-gear me-2"></i> Profile</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-box-seam-fill me-2"></i> Stock</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link p-3" aria-disabled="true"><i className="bi bi-person-lock me-2"></i> Role</a>
                        </li>
                    </div>
                    <li className="nav-item mb-2" style={{ pointerEvents: 'none' }}>
                        <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i className="bi bi-star-fill me-2"></i> Promotion <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                    </li>
                    <li className="nav-item mb-2" style={{ pointerEvents: 'none' }}>
                        <a className="nav-link p-3 disabled text-secondary" aria-disabled="true"><i className="bi bi-currency-exchange me-2"></i> Earn & Burn <span className="badge rounded-pill text-bg-secondary">soon</span></a>
                    </li>
                </ul>
            </div>
        </>
    );
}