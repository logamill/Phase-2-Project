import React from 'react';
import ReactDom from 'react-dom'

const Overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  }
  
  const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '15px',
    height: '90%',
    width: '40%',
    zIndex: 1000,
  }

function Modal({ card, open, onClose }) {
    const { name, brand, image, price, color, size, favorite, id } = card

    if(!open) return null 

    return ReactDom.createPortal(
        <div 
            className='overlay' 
            style={Overlay}    
            onClick={onClose}>
        <div 
            className='modal-style' 
            style={Modal_Style}>
            {
                favorite === true ? <p className='favorite' >★</p> : <p className='not-favorite' >☆</p>
            }
            <img className='modal-image' src={image} alt={name}></img>
            <p className='modal-desc'>{name}</p>
                <ul className='modal-list'>
                    <li>Brand: {brand}</li>
                    <li>Price: ${price}</li>
                    <li>Color: {color}</li>
                    <li>Size: {size}</li>
                </ul>
        </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;