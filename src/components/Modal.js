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
    const { name, brand, image, price, color, size, favorite } = card

    if(!open) return null 

    return ReactDom.createPortal(
        <div 
            className='overlay' 
            style={Overlay}    
            onClick={onClose}>
        <div 
            className='modal-style' 
            style={Modal_Style}>

            <div style={{height: '450px', width: '350px',
                marginLeft: "auto",
                marginRight: "auto",
                display: "block"}}>
                <img className='modal-image' src={image} alt={name}></img>
            </div>

            <div className="text-center" style={{padding:"20px"}}>
                <h5 className='card-title'>{name}</h5>
                <p className="text-muted mb-4">{brand}</p>
            </div>

            <div class="row justify-content-md-center" style={{textAlign:"center"}}>
                
                <div class="col col-lg-2">
                <span class="h4 mb-0">
                    <i class="fa-solid fa-ruler"></i>
                </span>
                <ul class="list-unstyled mb-0">
                    <li aria-hidden="true">—</li>
                  <li>{size}</li>
                </ul>
                </div>
                
                <div class="col col-lg-2">
                <span class="h4 mb-0">
                    <i class="fa-solid fa-money-bill"></i>
                </span>
                <ul class="list-unstyled mb-0">
                    <li aria-hidden="true">—</li>
                    <li>${price}</li>
                </ul>
                </div>

            </div>
        </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;