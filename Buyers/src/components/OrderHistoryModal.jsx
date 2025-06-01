// File: src/components/OrderHistoryModal.jsx
import React from 'react';
import '../styles/orderHistoryModal.css';

const orders = [
  {
    title: 'Indoor plastic pot 8" with designer segment',
    image: 'placeholder.png',
    orderNumber: '1221212',
    date: '12 Dec 2012',
    status: 'Packed and Shipped',
    address: '99, ABC Road, ABC Cross, ABC NAGAR, Bengaluru, 656565',
    sellerNote: 'Fragile – handle with care.'
  },
  {
    title: 'Indoor plastic pot with 12 inch top',
    image: 'placeholder.png',
    orderNumber: '1221212',
    date: '12 Dec 2012',
    status: 'Packed and Shipped',
    address: '99, ABC Road, ABC Cross, ABC NAGAR, Bengaluru, 656565',
    sellerNote: ''
  }
];

const OrderHistoryModal = ({ onClose }) => {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="modal-backdrop">
      <div className="modal-box orders-modal">
        {selected === null ? (
          <>
            <h3>Your Orders</h3>
            {orders.map((order, index) => (
              <div key={index} className="order-card" onClick={() => setSelected(order)}>
                <img src={order.image} alt="product" />
                <div>
                  <strong>{order.title}</strong>
                  <p>Order Number: {order.orderNumber}</p>
                  <p>Date of Order: {order.date}</p>
                  <p>Order {order.status}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="order-details">
            <h3>{selected.title}</h3>
            <img src={selected.image} alt="product" />
            <p><strong>Order Number:</strong> {selected.orderNumber}</p>
            <p><strong>Date:</strong> {selected.date}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Delivery Address:</strong> {selected.address}</p>
            {selected.sellerNote && <p><strong>Seller Note:</strong> {selected.sellerNote}</p>}
            <button onClick={() => setSelected(null)}>Back to Orders</button>
          </div>
        )}
        <span className="close-btn" onClick={onClose}>×</span>
      </div>
    </div>
  );
};

export default OrderHistoryModal;