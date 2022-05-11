import React, { useState } from 'react';
import Modal from './Modal';


function FlipCard({ card }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
        <div className='full-card' onClick={() => setIsOpen(!isOpen)} >
              <img className='card-image' src={card.image} alt={card.name} />
              <p className='card-desc'>{card.brand}</p>
              <button>☆</button>
              <p>{card.name}
              <span>  </span>  
               ${card.price}</p>
              <Modal card={card} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
        </div>   
      )
    }
    
    export default FlipCard;