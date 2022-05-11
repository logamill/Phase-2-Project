import React from 'react';
import FlipCard from './FlipCard';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';
import ImageFour from './ImageFour';
import ImageOneDesc from './ImageOneDesc';
import ImageThreeDesc from './ImageThreeDesc';

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
            <ImageOne /> 
            <ImageOneDesc />
            <ImageTwo />
            <h3>check out these recent additions</h3>
            <div class="grid">
                     {newAdditions.map((card) => (
                    <FlipCard key={card.id} card={card} />))}
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div> 
            <ImageThree />
            <ImageThreeDesc />
            <ImageFour />
        </div>
    )
}

export default Home;