import React from 'react';
import FlipCard from './FlipCard';
import AllImage from './AllImage';


function All({ clothes, setClothes, searched }) {
 
return (
    <div>    
        {
            searched.length < 1 ?
            <AllImage /> :
            null
        }
    <div className="row h-100" >
      <div className="grid">
        {clothes.map((card) => (
          <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />
        ))}
      </div>
    </div>
  </div>
)
}
export default All;