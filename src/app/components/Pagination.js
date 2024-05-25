"use client"

export default function Pagination({ totalPages, paginate, currentPage }) {
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