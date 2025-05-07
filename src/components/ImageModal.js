import React from "react";

export default function ImageModal({ imageSrc, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Zoomed Preview" />
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
