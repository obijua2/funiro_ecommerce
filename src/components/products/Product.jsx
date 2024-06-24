import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import product from './product.json'

const Product = () => {
  return (
    <div className='product'>
        <div className="our-product">Our Product</div>
        <br />
        <div className="inner" key={product.id}>
            {
              product && product.map( product => {
                return(
                  <div className="box1">

                    <div className="img">
                      <img src={ product.image } />
                    </div>
                    <br />

                    <div className='discount'>
                      <h4>{product.discount}</h4>
                    </div>
                     
                    <div className="new">
                      <p>{ product.new }</p>
                    </div>

                    <br />
                    <div className='name'>
                      { product.name }
                    </div>
                    <br />
                    <div className='descrption'>
                      { product.description }
                    </div>
                    <br />
                    <div className='prices'>
                      { product.price }
                      <div className='dsct'>{ product.dsct }</div>
                    </div>

                  </div>
                )
              })
            }
        </div> 
        <div className="show-more">
            <p><Link style={{textDecoration: 'none', color: '#B88E2F'}} to='/shop'>Show More</Link></p>
        </div>
    </div>
  )
}

export default Product