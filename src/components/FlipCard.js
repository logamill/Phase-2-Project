import React, { useState } from 'react';
import Modal from './Modal';


function FlipCard({ card, clothes, setClothes }) {
    const [isOpen, setIsOpen] = useState(false)
    const [favorite, setIsFavorite] = useState(false)

    const handleFavorite = (card) => {
        const updateFav = !card.favorite
        setIsFavorite(updateFav)

        const updatedCard = {
            ...card,
            favorite: updateFav
        }

        fetch(`http://localhost:3000/clothing/${card.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCard)
        })
        .then(res => res.json())
        .then(data => setClothes(clothes.map((item) => {
            if(data.id === item.id) {return data} else {return item}
    })))}

    return (
        <div>
            {
            !card.favorite ? 
            <i class="fa-regular fa-star" style={{ display: 'flex', padding: '5px'}} onClick={() => handleFavorite(card)}></i>
            :
            <i class="fa-solid fa-star" style={{ display: 'flex', padding: '5px'}} onClick={() => handleFavorite(card)}></i>
            }
        <div className='full-card' onClick={() => setIsOpen(!isOpen)} >
              <img className='card-image' src={card.image} alt={card.name} />
              <p className='card-desc'>{card.brand}</p>
              <p>{card.name}
              <span>  </span>  
               ${card.price}</p>
              <Modal card={card} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
        </div>   
      )
    }
    
    export default FlipCard;