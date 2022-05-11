import React from 'react';
import FlipCard from './FlipCard';
import ImageOne from './ImageOne';

function Tops({ clothes, setClothes }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'tops' ? true : false)

    return (
        <div>    
        <div className="main" style={{ 
        backgroundImage: `url("https://c0.wallpaperflare.com/preview/827/1022/479/japan-shibuya-night-life.jpg")`,
        borderRadius: '10px' 
        }}>
        </div>
        <div className="row h-100">
        <h2 style={{ marginTop: '25px', marginBottom: '25px' }}>Tops</h2>
          <div className="grid">
            {topsToDisplay.map((card) => (
              <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Tops;