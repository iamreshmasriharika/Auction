// BidList.js

import React from 'react';

const BidList = ({ bids }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Current Bids</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {bids.map((bid, index) => (
          <li key={index} style={{ marginBottom: '10px', fontSize: '16px' }}>Bidder {index + 1} : ${bid}</li>
        ))}
      </ul>
    </div>
  );
};

export default BidList;
