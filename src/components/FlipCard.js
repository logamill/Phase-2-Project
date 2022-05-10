import React, { useState } from 'react';
import Modal from './Modal';


function FlipCard({ card }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='full-card' onClick={() => setIsOpen(!isOpen)} >
              <img className='card-image' src={card.image} alt={card.name} />
              <p>{card.name}</p>
              <Modal card={card} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>   
      )
    }
    
    export default FlipCard;