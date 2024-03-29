import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics/?limit=10')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const formatPriceToINR = (price) => {
    const exchangeRate = 73.3; 
    const priceInINR = (price * exchangeRate).toFixed(2);
    return `₹${priceInINR}`;
  };

  const truncateDescription = (description) => {
    return description.length > 30 ? `${description.substring(0, 30)}...` : description;
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success('Item added to cart successfully!');
  };

  return (
    <div className="home-page-container">
      <h1>PRODUCTS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <p className="product-title">{truncateDescription(product.title)}</p>
              <p className="product-price">Price: {formatPriceToINR(product.price)}</p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-stock">Stocks: {product.rating.count}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="go-to-cart-link">Go to Cart →</Link>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default HomePage;
