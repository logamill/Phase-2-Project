import React from 'react';
import FlipCard from './FlipCard';

const BANNER_STYLE = {
    display: 'ms-flexbox',
    marginTop: '50px',
    color: 'white',
    fontSize: '90px',
    marginBottom: '50px',
    border: '3px',
    fontStyle: 'courier',
    textShadow: '-1px 0 black, 0 1px black, 2px 0 black, 0 -1px black',
}

function Home({ clothes }) {

    const latestItems = (clothes.length -4)

    console.log(clothes)
    console.log(latestItems)
    const newAdditions = clothes.filter((item) => 
        item.id > latestItems ? true : false)

    return (
        <div>
        <div className='main' style={{ 
            backgroundImage: `url("https://c0.wallpaperflare.com/preview/827/1022/479/japan-shibuya-night-life.jpg")`,
            borderRadius: '10px',
          }}>
            <h1 style={BANNER_STYLE}>Not Uniqlo </h1>  
            <div className="home-container">
                </div>
            </div>
            <h2 style={{ margin: '50px' }}>Latest Additions</h2>
            <div class="grid">
                     {newAdditions.map((card) => (
                    <FlipCard key={card.id} card={card} />
        ))}
            </div> 
        </div>
    )
}

export default Home;