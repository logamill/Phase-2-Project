import React from 'react';
import FlipCard from './FlipCard';

function Tops({ clothes }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'tops' ? true : false)

    return (
        <div className="container">
        <div className="row h-100">
          <div class="grid">
            {topsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Tops;