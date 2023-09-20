import React from 'react'

const ModalImage = () => {
  return (
    <div>
      <button id="openModal">Open the modal</button>

<dialog id="modal" class="modal">
  <button id="closeModal" class="modal-close-btn">Close</button>
  <p>...</p>
 
</dialog>
    </div>
  )
}

export default ModalImage
