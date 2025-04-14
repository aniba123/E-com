/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'; // We'll create this next
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'; // For animations

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from your backend
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
        
        // Fetch orders
        const ordersResponse = await axios.get('/api/orders/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleUpdateProfile = async (updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('/api/users/me', updatedData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <motion.div 
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile header with user image */}
      <div className="profile-header">
        <motion.div 
          className="profile-avatar"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={user?.avatar || 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.541790447.1733196370&semt=ais_hybrid&w=740'} 
            alt="User avatar" 
          />
          {isEditing && (
            <button className="avatar-edit-btn">Change Photo</button>
          )}
        </motion.div>
        
        <h1>{user?.name || 'Loading...'}</h1>
        <p className="member-since">Member since {new Date(user?.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Navigation tabs */}
      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          My Orders
        </button>
        <button 
          className={`tab-btn ${activeTab === 'addresses' ? 'active' : ''}`}
          onClick={() => setActiveTab('addresses')}
        >
          Addresses
        </button>
        <button 
          className={`tab-btn ${activeTab === 'wishlist' ? 'active' : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wishlist
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'profile' && (
          <ProfileTab 
            user={user} 
            isEditing={isEditing} 
            setIsEditing={setIsEditing} 
            onUpdate={handleUpdateProfile} 
          />
        )}
        
        {activeTab === 'orders' && <OrdersTab orders={orders} />}
        {activeTab === 'addresses' && <AddressesTab addresses={user?.addresses || []} />}
        {activeTab === 'wishlist' && <WishlistTab wishlist={user?.wishlist || []} />}
      </div>
    </motion.div>
  );
};

// Sub-components for each tab
const ProfileTab = ({ user, isEditing, setIsEditing, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!isEditing ? (
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">{user?.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <span className="info-value">{user?.phone || 'Not provided'}</span>
          </div>
          <button 
            className="edit-profile-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="save-btn">Save Changes</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

const OrdersTab = ({ orders }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <div className="empty-state">
          <p>You haven't placed any orders yet.</p>
          <button className="shop-btn" onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <motion.div 
              key={order._id}
              className="order-card"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="order-header">
                <span className="order-id">Order #{order.orderNumber}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-details">
                <div className="order-date">
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </div>
                <div className="order-total">
                  Total: ${order.totalAmount.toFixed(2)}
                </div>
              </div>
              <div className="order-items-preview">
                {order.items.slice(0, 3).map((item) => (
                  <img 
                    key={item.product._id} 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="preview-image"
                  />
                ))}
                {order.items.length > 3 && (
                  <div className="more-items">+{order.items.length - 3} more</div>
                )}
              </div>
              <button className="view-order-btn">View Order</button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const AddressesTab = ({ addresses }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>My Addresses</h2>
      <div className="addresses-grid">
        {addresses.length === 0 ? (
          <div className="empty-state">
            <p>You haven't saved any addresses yet.</p>
            <button className="add-address-btn">Add New Address</button>
          </div>
        ) : (
          <>
            {addresses.map((address) => (
              <motion.div 
                key={address._id}
                className="address-card"
                whileHover={{ scale: 1.02 }}
              >
                <h3>{address.label || 'Primary Address'}</h3>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zipCode}</p>
                <p>{address.country}</p>
                <div className="address-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </motion.div>
            ))}
            <motion.div 
              className="add-new-address-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="add-icon">+</div>
              <p>Add New Address</p>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const WishlistTab = ({ wishlist }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="empty-state">
          <p>Your wishlist is empty.</p>
          <button className="shop-btn" onClick={() => navigate('/products')}>
            Browse Products
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <motion.div 
              key={item._id}
              className="wishlist-item"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={item.images[0]} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
              <div className="item-actions">
                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="remove-btn">Remove</button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Profile;