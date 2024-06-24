import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-right">
            <div class="card">
                <p class="new-arrival">New Arrival</p>
                <h1 class="title">Discover Our New Collection</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button class="buy-now"><Link style={{textDecoration: 'none', color: 'black'}} to='/Categories'>Buy Now</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Hero;