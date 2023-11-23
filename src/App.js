// Import statements...

import React, { useState } from 'react';
import Bidding from './Components/Bidding';
import BidList from './Components/BidList';
import ProductAddition from './Components/ProductAddition';
import './App.css'; 
import './Components/ProductAddition.css'; 
import './Components/Bidding.css'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ProductItems from './Pages/ProductItems/ProductItems';
import LoginPage from './Pages/SignIn/SignIn';
import RegisterPage from './Pages/SignUp/SignUp';
import CartPage from './Pages/CartPage/CartPage';
import OrderPage from './Pages/OrderPage/OrderPage';
import AddressPage from './Pages/AddressPage/AddressPage';
import PaymentMethod from './Pages/PaymentMethod/PaymentMethod';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductEditPage from './Pages/ProductEditPage/ProductEditPage';
import OrderListPage from './Pages/OrderListPage/OrderListPage';
import UserListPage from './Pages/UserListPage/UserListPage';
import UserEditPage from './Pages/UserEditPage/UserEditPage';
import SellerRoute from './Components/SellerRoute/SellerRoute';
import Auction from './Pages/Auction/Auction';
import CreateAuction from './Pages/CreateAuction/CreateAuction';
import AuctionDetail from './Pages/AuctionDetails/AuctionDetail';

axios.defaults.baseURL =
  process.env.REACT_APP_API_PROXY || 'http://localhost:5000';

function App() {
  const [bidAmount, setBidAmount] = useState(0);
  const [bids, setBids] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBidChange = (bid) => {
    setBidAmount(bid);
  };

  const handlePlaceBid = (bid) => {
    setBids([...bids, bid]);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ProductAddition onAddProduct={handleAddProduct} />
              {products.map((product, index) => (
                <div key={index} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
                <h3 style={{ color: '#4caf50', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{product.productName}</h3>
                <p>Initial Bid: ${product.initialBid}</p>
                {product.image && <img src={product.image} alt={product.productName} style={{ maxWidth: '200px' }} />}
                <br />
                <button
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    padding: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    marginTop: '10px',
                    transition: 'background-color 0.3s',
                  }}
                >
                  Bid on this product
                </button>
              </div>
              
              
              ))}
              {selectedProduct && (
                <Bidding
                  product={selectedProduct}
                  bidAmount={bidAmount}
                  onBidChange={handleBidChange}
                  onPlaceBid={handlePlaceBid}
                />
              )}
              <BidList bids={bids} />
            </>
          }
        />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
