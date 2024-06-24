import React from 'react';
import { Slide } from 'react-slideshow-image';;
import 'react-slideshow-image/dist/styles.css';
import slide from './slide.json'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: '500px',
    height: '400px'
  }

/* const range = */


const Slider = () => {
  return (
    <div className='slide-container'>
    
        <Slide>
         {slide.map((slide, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slide.url})` }}>
                <span style={spanStyle}>{slide.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default Slider;