import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import './Home.css';
import range from './range.json';
import Product from '../products/Product';
import Slider from './image_slider/Slider';
import Share from './share/Share';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <div className='range'>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <br />

          <div className="inner" key={range.id}>
            {
              range && range.map( range => {
                return(
                  <div className="box">
                    <img src={ range.image } />

                    <br />

                    <div className='description'>
                    { range.name }
                    </div>

                  </div>
                )
              })
            }
          </div>          
      </div>
      <Product />
      <Slider />
      <Share />
      <Footer />
    </div>
  )
}

export default Home;