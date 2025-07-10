"use client";

import "../styles/modal.scss";

export default function Modal({isOpen , onClose, children}){
    if(!isOpen) 
        return null;

    return(
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}></button>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}