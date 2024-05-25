"use client"

export default function Footer() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark w-100 d-flex justify-content-center p-2 text-white" style={{ position: 'fixed', zIndex: 1, boxShadow: '0 3px 5px 5px rgba(0, 0, 0, 0.125)', bottom: 0 }}>
                <div className="text-center">
                    <i class="bi bi-c-circle"></i> 2024 [LOGO] x ADMIN all rights reserved.
                </div>
            </nav>
        </>
    );
};