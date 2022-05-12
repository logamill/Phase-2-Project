import React from 'react';
import { Parallax } from 'react-parallax';
import favorite from '../img/favorite.jpg'

const FavoriteImage = () => (

        <Parallax bgImage={favorite} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>your favorites</span>
                </div>
        </Parallax>
    )

export default FavoriteImage;