import React from 'react';
import share from './share.json';
import './Share.css';

const Share = () => {
  return (
    <div className='share'>
         <div className="header">
            <p>Share your setup with</p>
            <h1>#FuniroFurniture</h1>
        </div>
{/*          <div className="furniture" key={share.id}>
            {
              share && share.map( share => {
                return(
                  <div className="share-gallery">

                      <div className="image1">
                        <img src={ share.image1 } />
                      </div>

                      <div className="image2">
                        <img src={ share.image2 } />
                      </div>

                      <div className="image3">
                        <img src={ share.image3 } />
                      </div>

                      <div className="image4">
                        <img src={ share.image4 } />
                      </div>

                      <div className="image5">
                        <img src={ share.image5 } />
                      </div>

                      <div className="image6">
                        <img src={ share.image6 } />
                      </div>

                      <div className="image7">
                        <img src={ share.image7 } />
                      </div>

                      <div className="image8">
                        <img src={ share.image8 } />
                      </div>

                      <div className="image9">
                        <img src={ share.image9 } />
                      </div>
                  </div>                  
                )
              }) 
            } 
        </div> */}
    </div>
  )
}

export default Share;