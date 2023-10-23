import React from 'react'

const ModalImage = () => {
  return (
    <div>
      <button id="openModal">Open the modal</button>

<dialog id="modal" className="modal">
  <button id="closeModal" className="modal-close-btn">Close</button>
  <p>...</p>
 
</dialog>
    </div>
  )
}

export default ModalImage
