"use client";

import { useState } from "react";
import "../styles/navbar.scss";
import Modal from "../components/modal.js"
export default function Navbar() {

    const [isOpen, setIsOpen]=useState(false);

    return(
        <>
        <header className="navbar">
            <h2>MY NAVBAR</h2>
            <button ocClick={() => setIsOpen(true)}>Update</button>
        </header>

        <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
            <h3>Update</h3>
            <p>Update Here!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>

        </Modal>

        </>
    );
}