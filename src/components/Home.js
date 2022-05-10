import React from 'react';
import FlipCard from './FlipCard';


function Home({ clothes }) {
    return (
        <div className='main'>
            <div className="home-container">
                <div class="grid">
                    {clothes.map((card) => (
                    <FlipCard key={card.id} card={card} />
            ))}
                </div>
            </div> 
        </div>
    )
}

export default Home;