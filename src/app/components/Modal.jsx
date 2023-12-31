"use client";
import React, { useEffect, useRef } from "react";
import "../css/modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc, false);
      document.addEventListener("mousedown", handleClickOutside, false);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, [isOpen, onClose]);

  const modalClassName = `modal ${isOpen ? "modal-open" : "modal-closed"}`;

  return (
    <div className={modalClassName}>
      <div ref={modalRef} className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
