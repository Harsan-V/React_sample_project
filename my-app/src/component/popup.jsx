import React from 'react'
import styles from '../styles/popup.scss'

function Popup({ text, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Popup;