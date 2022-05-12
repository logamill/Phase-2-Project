import React from 'react';
import FlipCard from './FlipCard';
import OuterwearImage from './OuterwearImage';

function Outerwear({ clothes, setClothes, searched }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'outerwear' ? true : false)

    return (
        <div>    
             {
            searched.length < 1 ?
            <OuterwearImage /> :
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

export default Outerwear;