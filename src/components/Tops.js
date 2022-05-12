import React from 'react';
import FlipCard from './FlipCard';
import TopsImage from './TopsImage';

function Tops({ clothes, setClothes }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'tops' ? true : false)

    return (
        <div>    
        <TopsImage />
        <div className="row h-100">
          <div className="grid">
            {topsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes}/>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Tops;