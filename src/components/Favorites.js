import React from 'react';
import FlipCard from './FlipCard';
import FavoriteImage from './FavoriteImage';

function Favorites({ clothes, setClothes }) {
    const favsToDisplay = clothes.filter((obj) => 
        obj.favorite === true ? true : false)

    return (
        <div>    
            <FavoriteImage />
        <div className="row h-100">
          <div className="grid">
            {favsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Favorites;