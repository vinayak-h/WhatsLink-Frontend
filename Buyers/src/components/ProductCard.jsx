import React from 'react';
import "../styles/ProductCard.css";

const ProductCard = ({ product, addToCart, onCardClick }) => {
  const {
    title,
    description,
    price,
    stock,
    images,
  } = product;

  const mainImage = images?.[0] || "/placeholder.png";

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents triggering the card click
    addToCart(product);
  };

  const handleCardClick = () => {
    if (onCardClick) onCardClick(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={mainImage} alt={title} className="product-image" />

      <div className="product-info">
        <h3 className="product-title" title={title}>{title}</h3>
        <p className="product-description">{description}</p>

        <div className="product-details">
          <span className="product-price">₹ {price}</span>
          {stock < 25 && (
            <span className="low-stock">Only Few<br />Left In Stock</span>
          )}
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
