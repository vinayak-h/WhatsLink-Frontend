import React, { useEffect, useState } from 'react';
import "../styles/ProductDetailsCard.css";

const ProductDetailsCard = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState('');

  const images = product.images?.length ? product.images : ['/placeholder.png'];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      quantity,
      customMessage: product.isCustomizable ? customMessage : null,
    };

    console.log('Adding to cart:', cartItem);
    onClose();
  };

  return (
    <div className="product-details-overlay" onClick={onClose}>
      <div className="product-details-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>

        {/* Image section */}
        <div className="image-slider">
          <img src={images[0]} alt={product.title} className="detail-image" />
        </div>

        {/* Scrollable content */}
        <div className="product-content">
          <h2 className="brand-text title">{product.title}</h2>
          <p className="brand-text description">{product.description}</p>

          <div className="price-quantity">
            <p className="brand-text price">Price: ₹{product.price}</p>
            <div className="quantity-selector">
              <label className="brand-text">Quantity</label>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          {product.isCustomizable && (
            <div className="customization-field">
              <label className="brand-text">Send Your Customization Request:</label>
              <input
                type="text"
                placeholder="e.g. Paint my name on the pot"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              />
            </div>
          )}

          <div className="button-container">
            <button className="buy-now" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
