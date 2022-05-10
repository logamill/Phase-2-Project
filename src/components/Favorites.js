import React from 'react';
import FlipCard from './FlipCard';

function Favorites({ clothes }) {
    const favsToDisplay = clothes.filter((obj) => 
        obj.favorite === true ? true : false)

    return (
        <div className="main">
        <div className="row h-100">
          <div class="grid">
            {favsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Favorites;