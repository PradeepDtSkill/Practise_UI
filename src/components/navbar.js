"use client";

import { useState } from "react";
import "../styles/navbar.scss";
import Modal from "../components/modal.js"
export default function Navbar() {

    const [isOpen, setIsOpen]=useState(false);
    const [inputValue, setInputValue] = useState("");


    return(
        <>
        <header className="navbar">
            <h2>Allocation</h2>
            <button onClick={() => setIsOpen(true)}>Update</button>
        </header>

        <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
            <div className="modal-header">
            <h2>Update</h2>
            <button className="close" onClick={() => setIsOpen(false)}>x</button>
            </div>
            <input type="text" placeholder="Type here...." className="modal-input" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
            <div className="modal-actions">
            <button className="discard-btn" onClick={() => setInputValue("")}>Discard</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </Modal>

        </>
    );
}