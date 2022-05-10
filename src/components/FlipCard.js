import React from 'react';

function FlipCard({ card }) {
    console.log(card)
    return (
        <div className='full-card'>
              <img className='card-image' src={card.image} alt={card.name} />
              <p>{card.name}</p>
                <p>Price: ${card.price}</p>
            </div>   
      )
    }
    
    export default FlipCard;