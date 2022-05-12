import React from 'react';
import FlipCard from './FlipCard';
import AccessoriesImage from './AccessoriesImage';

function Accessories({ clothes, setClothes, searched }) {
    const accsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'accessories & shoes' ? true : false)

    return (
        <div>    
             {
            searched.length < 1 ?
            <AccessoriesImage /> :
            null
        }
        <div className="row h-100">
          <div className="grid">
            {accsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Accessories;