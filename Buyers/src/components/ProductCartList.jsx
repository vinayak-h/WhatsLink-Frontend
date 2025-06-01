import React from 'react';
import '../styles/productCartList.css';

const ProductCartList = ({ items, onQuantityChange, onRemove }) => {
  return (
    <div className="product-cart-list">
      {items.map((item) => (
        <div
          key={item.id}
          className="cart-item"
          onClick={() => {
            if (item.customMessage) {
              alert(`Custom Message: ${item.customMessage}`);
            }
          }}
        >
          <button className="close-button" onClick={(e) => {
            e.stopPropagation();
            onRemove(item.id);
          }}>
            ✕
          </button>
          <img src={item.images[0]} alt={item.title} className="cart-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Price ₹{item.price}</p>
            <div className="quantity-selector">
              <label>Quantity</label>
              <button onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(item.id, Math.max(1, item.quantity - 1));
              }}>-</button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  const value = Math.max(1, Number(e.target.value));
                  onQuantityChange(item.id, value);
                }}
              />
              <button onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(item.id, item.quantity + 1);
              }}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCartList;
