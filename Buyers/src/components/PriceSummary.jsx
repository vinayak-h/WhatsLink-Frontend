import React, { useEffect, useState } from 'react';
import '../styles/priceSummary.css';

const PriceSummary = ({ items }) => {
  const [total, setTotal] = useState(0);
  const shipping = 40;
  const discount = 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(subtotal + shipping - discount);
    }, 1000); // Simulate delay for API update

    return () => clearTimeout(timer);
  }, [items]);

  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="price-summary">
      <h3>Price Summary - {items.length} {items.length === 1 ? 'Item' : 'Items'}</h3>
      <div className="summary-line"><span>Cart Total</span><span>₹{cartTotal}</span></div>
      <div className="summary-line"><span>Discounts</span><span>₹{discount}</span></div>
      <div className="summary-line"><span>Shipping and Handling</span><span>₹{shipping}</span></div>
      <div className="summary-total"><span>Total</span><span>₹{total}</span></div>
      <div className="summary-buttons">
        <button className="shop-more" onClick={() => window.location.href = '/store'}>SHOP MORE</button>
        <button className="buy-now" onClick={() => {
          // redirect logic placeholder
          alert("Redirecting to address selector or login...");
        }}>BUY NOW</button>
      </div>
    </div>
  );
};

export default PriceSummary;
