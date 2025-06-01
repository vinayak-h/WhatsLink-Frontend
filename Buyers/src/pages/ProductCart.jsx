import React, { useState } from 'react';
import ProductCartList from '../components/ProductCartList';
import PriceSummary from '../components/PriceSummary';
import LoginModal from '../components/LoginModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/productCart.css';
import potterlogo from '/potterlogo.png';
import '../styles/StorefrontHome.css';

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Indoor plastic pot 8" with designer segment',
      price: 199,
      quantity: 1,
      images: ['/placeholder.png'],
      customMessage: 'Please add my name',
    },
    {
      id: 2,
      title: 'Cactus Pots Set of 3 | Indoor Pots | Decorative...',
      price: 199,
      quantity: 1,
      images: ['/placeholder.png'],
    },
    {
      id: 3,
      title: 'Ceramic Pots Set of 3 | Indoor Pots | Decorative...',
      price: 199,
      quantity: 1,
      images: ['/placeholder.png'],
    },
    {
      id: 4,
      title: 'Mini Pots Set of 3 | Indoor Pots | Decorative...',
      price: 99,
      quantity: 1,
      images: ['/placeholder.png'],
    },
  ]);

  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginTriggeredFromBuyNow, setLoginTriggeredFromBuyNow] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    const updated = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
  };

  const handleRemove = (productId) => {
    const updated = cartItems.filter(item => item.id !== productId);
    setCartItems(updated);
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      setLoginTriggeredFromBuyNow(true);
      setShowLoginModal(true);
    } else {
      navigate('/address');
    }
  };

  return (
    <div className="cart-page">
      <header className="top-bar">
        <div
          className="store-info"
          onClick={() => window.location.href = "/store"}
          style={{ cursor: 'pointer' }}
        >
          <img src={potterlogo} alt="Pottery House" className="store-logo" />
          <h2 className="store-title">Pottery House</h2>
        </div>

        <div className="top-buttons">
          <button onClick={() => window.open('https://wa.me/919999999999')} title="Chat">🟢</button>
          <button title="Cart" onClick={() => window.location.href = '/cart'}>🛒</button>
          <button title="Profile" onClick={()=> window.location.href= '/buyer-profile'}>👤</button>
        </div>
      </header>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          Your Cart is Empty, Please Select A Product to Make the Purchase
        </div>
      ) : (
        <>
          <h2 className="cart-heading">Your Cart</h2>
          <div className="cart-body">
            <div className="cart-left">
              <ProductCartList
                items={cartItems}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            </div>
            <div className="cart-right">
              <PriceSummary items={cartItems} />
            </div>
          </div>
          <div className="cart-footer">
            <button className="buy-now-button" onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>
        </>
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => {
            setShowLoginModal(false);
            if (loginTriggeredFromBuyNow) {
              navigate('/address');
              setLoginTriggeredFromBuyNow(false);
            }
          }}
        />
      )}
    </div>
  );
};

export default ProductCart;
