import React from 'react';
import './SingleProduct.css';
import react, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const products = [
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, originalPrice: 3500000, discount: 30, imageUrl: 'https://res.cloudinary.com/didpkgwyb/image/upload/v1718994014/r2_bobesh.png' },
  { name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, originalPrice: null, discount: null, imageUrl: '/path/to/leviosa.png' },
  { name: 'Lolito', description: 'Luxury big sofa', price: 7000000, originalPrice: 14000000, discount: 50, imageUrl: '/path/to/lolito.png' },
  { name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, originalPrice: null, discount: null, new: true, imageUrl: '/path/to/respira.png' },
  // Add more products here
  { name: 'Grendoline', description: 'Modern dining table', price: 4500000, originalPrice: 6000000, discount: 25, imageUrl: '/path/to/grendoline.png' },
  { name: 'Velvet', description: 'Comfortable armchair', price: 1500000, originalPrice: null, discount: null, imageUrl: '/path/to/velvet.png' },
  { name: 'Vintage', description: 'Classic wooden chair', price: 3500000, originalPrice: 5000000, discount: 30, imageUrl: '/path/to/vintage.png' },
  { name: 'Elegance', description: 'Luxury king bed', price: 12000000, originalPrice: 15000000, discount: 20, imageUrl: '/path/to/elegance.png' },
];




const SingleProduct = () => {
    const [selectedSize, setSelectedSize] = useState('L');
    const [selectedColor, setSelectedColor] = useState('purple');
    const [quantity, setQuantity] = useState(1);
  
    const handleAddToCart = () => {
      alert('Product added to cart');
    };
  
    const handleCompare = () => {
      alert('Product added to comparison list');
    };



/* related product */
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
  };

  const showLessProducts = () => {
    setVisibleProducts(prevVisibleProducts => Math.max(prevVisibleProducts - 4, 4));
  };




    return (
      <div className="single">
        <nav className="breadcrumb">
          <ul>
            <li><a href="/">Home</a></li>
            <li><span>›</span></li>
            <li><a href="/shop">Shop</a></li>
            <li><span>›</span></li>
            <li><span>Asgaard sofa</span></li>
          </ul>
        </nav>
        <div className='single-product'>
        <div className="product-images">
          <div className="thumbnail-images">
            <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1718993868/image_1_syyfds.png" alt="Thumbnail 1" />
            <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1718993868/image_1_syyfds.png" alt="Thumbnail 2" />
            <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1718993868/image_1_syyfds.png" alt="Thumbnail 3" />
            <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1718993868/image_1_syyfds.png" alt="Thumbnail 4" />
          </div>
        </div>

        <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1718993868/image_1_syyfds.png" alt="Asgaard sofa" className="main-image" />
  
        <div className="product-details">
          <h1>Asgaard sofa</h1>
          <p className="price">Rs. 250,000.00</p>
          <div className="rating">
            ★★★★☆ <span>| 5 Customer Reviews</span>
          </div>
          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
  
          <div className="options">
            <span>Size</span>
            <div className="size">              
              <div className="size-options">
                <button className={selectedSize === 'XS' ? 'selected' : ''} onClick={() => setSelectedSize('XS')}>XS</button>
                <button className={selectedSize === 'S' ? 'selected' : ''} onClick={() => setSelectedSize('S')}>S</button>
                <button className={selectedSize === 'M' ? 'selected' : ''} onClick={() => setSelectedSize('M')}>M</button>
                <button className={selectedSize === 'L' ? 'selected' : ''} onClick={() => setSelectedSize('L')}>L</button>
                <button className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => setSelectedSize('XL')}>XL</button>
              </div>
            </div>
            
            <span>Color</span>
            <div className="color">  
              <div className="color-options">
                <button className={selectedColor === 'purple' ? 'selected' : ''} style={{ backgroundColor: '#816DFA' }} onClick={() => setSelectedColor('purple')}></button>
                <button className={selectedColor === 'black' ? 'selected' : ''} style={{ backgroundColor: '#000000' }} onClick={() => setSelectedColor('black')}></button>
                <button className={selectedColor === 'yellow' ? 'selected' : ''} style={{ backgroundColor: '#B88E2F' }} onClick={() => setSelectedColor('yellow')}></button>
              </div>
            </div>
          </div>
  
          <div className="actions">
            <div className="quantity">
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
            <button className="compare" onClick={handleCompare}>+ Compare</button>
          </div>

          <div className="line"></div>
  
          <div className="product-meta">
            <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;SS001</p>
            <p>Category &nbsp;&nbsp;&nbsp;: &nbsp;Sofas</p>
            <p>Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;Sofa, Chair, Home, Shop</p>
          </div>
  
          <div className="share">
            <span>Share &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</span>
            <div className="share-button">
              <button className='fb'><FaFacebook /></button>
              <button className='ld'><FaLinkedin /></button>
              <button className='tw'><AiFillTwitterCircle /></button>
            </div>
          </div>
        </div>
        </div>
        <div className="descriptions">
          <div className="header">
            <div className="des">Description</div>
            <p>Additional Information</p>
            <p>Reviews [5]</p>
          </div>
          <div className="texts">
            <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
          <div className="d-images">
            <div className="m-images">
              <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1719567136/image2_a5po5o.png" alt="" className='img1' />
              <img src="https://res.cloudinary.com/didpkgwyb/image/upload/v1719567136/image1_lwmw4t.png" alt="" className='img2' />
            </div>
          </div>
        </div>
          <div className="line1"></div>
          <div className="related">
            <p>Related Products</p>
          </div>


          <div className="products">
      {products.slice(0, visibleProducts).map((product, index) => (
        <div className="product-card" key={index}>
          <div className="image-wrapper">
            {product.discount && <div className="discount-tag">-{product.discount}%</div>}
            {product.new && <div className="new-tag">New</div>}
            <img className="product-image" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">
              Rp {product.price.toLocaleString()}
              {product.originalPrice && (
                <span className="original-price">Rp {product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="buttons-container">
        {visibleProducts < products.length && (
          <button className="show-more-button" onClick={showMoreProducts}>Show More</button>
        )}
        {visibleProducts > 4 && (
          <button className="show-less-button" onClick={showLessProducts}>Show Less</button>
        )}
      </div>
      </div>
    );
  };
  
  export default SingleProduct;