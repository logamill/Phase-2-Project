import React from 'react';
import FlipCard from './FlipCard';

const BANNER_STYLE = {
    textshadow:{
    fontSize:100,
    color:'#FFFFFF',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
}

function Home({ clothes }) {

    const latestItems = (clothes.length -4)

    console.log(clothes)
    console.log(latestItems)
    const newAdditions = clothes.filter((item) => 
        item.id > latestItems ? true : false)

    return (
        <div>
            <h1 style={{ display: '-ms-flexbox', marginTop: '50px'}}>Not Uniqlo </h1>  
        <div className='main' style={{ 
            backgroundImage: `url("https://c0.wallpaperflare.com/preview/827/1022/479/japan-shibuya-night-life.jpg")`,
            borderRadius: '10px' 
          }}>
            <div className="home-container">
                {/* <img src="https://c0.wallpaperflare.com/preview/827/1022/479/japan-shibuya-night-life.jpg" /> */}
                <h1 style={BANNER_STYLE}> _</h1>
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