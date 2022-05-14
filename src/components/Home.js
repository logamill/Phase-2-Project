import React from 'react';
import FlipCard from './FlipCard';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';
import ImageFour from './ImageFour';
import ImageOneDesc from './ImageOneDesc';
import ImageThreeDesc from './ImageThreeDesc';


function Home({ clothes, setClothes }) {

    const latestItems = (clothes.length -7)

    const newAdditions = clothes.filter((item) => 
        item.id > latestItems ? true : false)
        
    return (
        <div>
            <ImageOne /> 
            <ImageOneDesc />
            <ImageTwo />
            <div class="grid" style={{ paddingBottom: '30px'}}>
                     {newAdditions.map((card) => (
                    <FlipCard key={card.id} card={card} clothes={clothes} setClothes={setClothes} />))}
            </div> 
            <ImageThree />
            <ImageThreeDesc />
            <ImageFour />
        </div>
    )
}

export default Home;