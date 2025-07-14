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
    { id: 7, name: "David Wilson", email: "david@example.com", role: "Manager", status: "Active", date: "2025-07-16" },
    { id: 8, name: "Sarah Davis", email: "sarah@example.com", role: "Developer", status: "Active", date: "2025-07-17" },
    { id: 9, name: "Michael Chen", email: "michael@example.com", role: "Designer", status: "Inactive", date: "2025-07-18" },
    { id: 10, name: "Lisa Rodriguez", email: "lisa@example.com", role: "Analyst", status: "Active", date: "2025-07-19" },
    { id: 11, name: "Tom Anderson", email: "tom@example.com", role: "QA Tester", status: "Active", date: "2025-07-20" },
    { id: 12, name: "Rachel Kim", email: "rachel@example.com", role: "Product Manager", status: "Active", date: "2025-07-21" },
    { id: 13, name: "James Thompson", email: "james@example.com", role: "DevOps", status: "Inactive", date: "2025-07-22" },
    { id: 14, name: "Maria Garcia", email: "maria@example.com", role: "UI Designer", status: "Active", date: "2025-07-23" },
    { id: 15, name: "Kevin Lee", email: "kevin@example.com", role: "Backend Developer", status: "Active", date: "2025-07-24" },
    { id: 16, name: "Amanda Taylor", email: "amanda@example.com", role: "Data Scientist", status: "Active", date: "2025-07-25" },
    { id: 17, name: "Ryan Martinez", email: "ryan@example.com", role: "Security Analyst", status: "Inactive", date: "2025-07-26" },
    { id: 18, name: "Jennifer Lopez", email: "jennifer@example.com", role: "Business Analyst", status: "Active", date: "2025-07-27" },
    { id: 19, name: "Alex Turner", email: "alex@example.com", role: "Frontend Developer", status: "Active", date: "2025-07-28" },
    { id: 20, name: "Sophia Clark", email: "sophia@example.com", role: "Project Coordinator", status: "Active", date: "2025-07-29" },
    { id: 21, name: "Ethan Baker", email: "ethan@example.com", role: "Consultant", status: "Active", date: "2025-07-30" },
    { id: 22, name: "Grace Evans", email: "grace@example.com", role: "Recruiter", status: "Inactive", date: "2025-07-31" },
    { id: 23, name: "Henry Adams", email: "henry@example.com", role: "Researcher", status: "Active", date: "2025-08-01" },
    { id: 24, name: "Isabella Scott", email: "isabella@example.com", role: "Marketing Lead", status: "Active", date: "2025-08-02" },
    { id: 25, name: "Jack Parker", email: "jack@example.com", role: "HR Manager", status: "Inactive", date: "2025-08-03" },
  
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

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
      <table cellPadding="10">
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
