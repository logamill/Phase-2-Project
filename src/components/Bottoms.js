import React from 'react';
import FlipCard from './FlipCard';
import BottomsImage from './BottomsImage';

function Bottoms({ clothes, setClothes, searched }) {
    const bottomsToDisplay = clothes.filter((obj) => 
    obj.category.toLowerCase() === 'bottoms' ? true : false)
 
return (
    <div>    
         {
            searched.length < 1 ?
            <BottomsImage /> :
            null
        }
        <div className="row h-100">
        <div className="grid">
            {bottomsToDisplay.map((card) => (
            <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />
            ))}
        </div>
    </div>
  </div>
)
}
export default Bottoms;