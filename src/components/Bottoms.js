import React from 'react';
import FlipCard from './FlipCard';

function Bottoms({ clothes }) {
    const bottomsToDisplay = clothes.filter((obj) => 
    obj.category.toLowerCase() === 'bottoms' ? true : false)
 
return (
    <div className="main">
    <div className="row h-100">
      <div class="grid">
        {bottomsToDisplay.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  </div>
)
}
export default Bottoms;