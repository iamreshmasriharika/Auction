// Bidding.js

import React, { useState } from 'react';

const Bidding = ({ product, onBidChange, onPlaceBid }) => {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidChange = (e) => {
    setBidAmount(Number(e.target.value));
    onBidChange(e.target.value); // Pass bid amount back to the parent component if needed
  };

  const handlePlaceBid = () => {
    if (bidAmount <= 0) {
      alert('Bid amount must be greater than 0');
    } else if (bidAmount < product.initialBid) {
      alert('Bid amount must be equal to or greater than the initial bid');
    } else {
      onPlaceBid(bidAmount);
      setBidAmount(0);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Bidding for {product.productName}</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>Enter Your Bid:</label>
      <input
        type="number"
        value={bidAmount}
        onChange={handleBidChange}
        style={{ padding: '8px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
      />
      <button
        onClick={handlePlaceBid}
        style={{
          backgroundColor: '#4caf50',
          color: '#fff',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
        }}
      >
        Place Bid
      </button>
    </div>
  );
};

export default Bidding;
