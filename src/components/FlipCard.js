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

            <div className='full-card' onClick={() => setIsOpen(!isOpen)} >
              <img className='card-image' src={card.image} alt={card.name} />
            </div>

            <h5 className='card-title' style={{padding:"7px", fontSize:"115%"}}>{card.brand}</h5>
            <p className="text-muted mb-4">{card.name}</p>

            <div class="row justify-content-md-center">
                <div class="col col-lg-2">
                    <h6 class="mb-3">    
                        {!card.favorite ? 
                        <i className="fa-regular fa-star" onClick={() => handleFavorite(card)}></i>
                        :
                        <i className="fa-solid fa-star" onClick={() => handleFavorite(card)}></i>
                        }
                    </h6>
                </div>
                <div class="col-md-auto">
                    <h6 class="mb-3">|</h6>
                </div>
                <div class="col col-lg-2">
                    <h6 class="mb-3">${card.price}</h6>
                </div>
            </div>
              
            <Modal card={card} open={isOpen} onClose={() => setIsOpen(false)}></Modal>

        </div>   
      )
    }
    
    export default FlipCard;