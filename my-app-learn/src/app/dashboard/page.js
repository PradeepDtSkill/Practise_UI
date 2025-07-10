"use client";

import { useState } from "react";

export default function Dashboard() {
  const allData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      date: "2025-07-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
      date: "2025-07-11",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      status: "Active",
      date: "2025-07-12",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Viewer",
      status: "Active",
      date: "2025-07-13",
    },
    {
      id: 5,
      name: "Charlie White",
      email: "charlie@example.com",
      role: "Admin",
      status: "Inactive",
      date: "2025-07-14",
    },
    {
      id: 6,
      name: "Emily Green",
      email: "emily@example.com",
      role: "User",
      status: "Active",
      date: "2025-07-15",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = allData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(allData.length / rowsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="dashboard-container" >
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <td>{row.status}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons"> 
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
