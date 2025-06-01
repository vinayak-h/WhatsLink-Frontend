// File: src/components/DeleteConfirmModal.jsx
import React from 'react';
import '../styles/deleteConfirmModal.css';

const DeleteConfirmModal = ({ onConfirm, onCancel }) => (
  <div className="modal-backdrop">
    <div className="modal-box">
      <p>Are you sure you want to delete this address?</p>
      <div className="modal-actions">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  </div>
);

export default DeleteConfirmModal;