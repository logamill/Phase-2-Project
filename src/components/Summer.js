import React from 'react';
import FlipCard from './FlipCard';
import SummerImage from './SummerImage';

function Summer({ clothes, setClothes }) {

    const topsToDisplay = clothes.filter((obj) => 
        obj.category.toLowerCase() === 'tops' ? true : false)

    return (
        <div>    
            <SummerImage />
        </div>
    )
}

export default Summer;