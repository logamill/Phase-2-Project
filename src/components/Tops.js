import React from 'react';
import FlipCard from './FlipCard';
import TopsImage from './TopsImage';

function Tops({ clothes, setClothes, searched }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'tops' ? true : false)

    return (
        <div>    
             {
            searched.length < 1 ?
            <TopsImage /> :
            null
             }
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