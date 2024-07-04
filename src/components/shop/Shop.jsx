import React from 'react';
import shopProduct from './shopProduct.json';
import './Shop.css';
import { IoIosArrowForward } from "react-icons/io";
import Footer from '../footer/Footer';
import { GrTrophy } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";

const Shop = () => {
  return (
    <div className='shop'>
      <div className="h-top">
        <div className="head">
          <div className="text">
            <h1>Shop</h1>
            <div className='comp'>
              <h3>Home</h3>
              <div className='arrow'><IoIosArrowForward /></div>
              <p>Shop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product" key={shopProduct.id}>
            {
              shopProduct && shopProduct.map( shopProduct => {
                return(
                  <div className="box">
                    <img src={ shopProduct.image } />
                    <br />
                    <div className='discount'>
                    { shopProduct.discount }
                    </div>
                    <div className='new'>
                    { shopProduct.new }
                    </div>
                    <div className='name'>
                    { shopProduct.name }
                    </div>
                    <br />
                    <div className='description'>
                    { shopProduct.description }
                    </div>
                    <br />
                    <div className='price'>
                    { shopProduct.price }
                    </div>
                  </div>
                )
              })
            }
      </div> 

      <div className="top-footer">
        <div className="features">
          <div className="feature">
            <span className="icon"><GrTrophy /></span>
            <div className="text">
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><GrStatusGood /></span>
            <div className="text">
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><PiShippingContainerBold /></span>
            <div className="text">
              <h3>Free Shipping</h3>
              <p>Order over 150$</p>
            </div>
          </div>
          <div className="feature">
            <span className="icon"><MdOutlineSupportAgent /></span>
            <div className="text">
              <h3>24 / 7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop;