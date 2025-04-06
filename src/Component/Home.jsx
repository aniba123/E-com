import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaShoppingBag, FaStar, FaTruck, FaExchangeAlt, FaHeadset } from 'react-icons/fa';
import { MdDiscount, MdSecurity } from 'react-icons/md';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Import your Navbar component
import './Home.css'; // Import your CSS file
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Wholesale Clothing Deals",
      subtitle: "Up to 60% Off Bulk Orders",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      buttonText: "Shop Now"
    },
    {
      title: "New Summer Collection",
      subtitle: "Trendy Styles for Your Store",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      buttonText: "Explore Collection"
    },
    {
      title: "Premium Quality Fabrics",
      subtitle: "Manufacturer Direct Pricing",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      buttonText: "View Catalog"
    }
  ];

  const categories = [
    { name: "Men's Wear", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", count: 120 },
    { name: "Women's Wear", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", count: 95 },
    { name: "Kids Collection", image: "https://images.pexels.com/photos/15032413/pexels-photo-15032413/free-photo-of-cute-boy-with-toys.jpeg?auto=compress&cs=tinysrgb&w=600", count: 75 },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", count: 60 }
  ];

  const featuredProducts = [
    { id: 1, name: "Premium Cotton T-Shirt", price: 8.99, originalPrice: 12.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", rating: 4.5 },
    { id: 2, name: "Denim Jeans (Bulk Pack)", price: 24.99, originalPrice: 32.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", rating: 4.2 },
    { id: 3, name: "Summer Dresses (Set of 5)", price: 45.99, originalPrice: 59.99, image: "https://images.pexels.com/photos/13114654/pexels-photo-13114654.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 4.7 },
    { id: 4, name: "Sports Wear Pack", price: 32.99, originalPrice: 42.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", rating: 4.3 }
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Boutique Owner", text: "The quality of clothes and wholesale prices have helped my business grow tremendously. Highly recommended!", rating: 5 },
    { id: 2, name: "Michael Chen", role: "Retail Chain Manager", text: "Reliable supplier with consistent quality. Their bulk discounts are unbeatable in the market.", rating: 4 },
    { id: 3, name: "Emma Williams", role: "Online Store Owner", text: "Fast shipping and excellent customer service. My customers love the products I source from here.", rating: 5 }
  ];

  const features = [
    { icon: <FaTruck />, title: "Fast Shipping", description: "Free shipping on orders over $500" },
    { icon: <MdDiscount />, title: "Bulk Discounts", description: "Special prices for large orders" },
    { icon: <FaExchangeAlt />, title: "Easy Returns", description: "30-day return policy" },
    { icon: <MdSecurity />, title: "Secure Payment", description: "100% secure checkout" },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Dedicated wholesale support" }
  ];

  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Slider */}
      <section className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="btn-primary"
              >
                {slide.buttonText} <FaArrowRight />
              </motion.button>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2>Shop by Category</h2>
            <p>Browse our wide range of wholesale clothing categories</p>
          </motion.div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                className="category-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="category-image" style={{ backgroundImage: `url(${category.image})` }} />
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.count}+ Products</p>
                  <button className="btn-outline">
                    Shop Now <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2>Featured Wholesale Deals</h2>
            <p>Best selling products at manufacturer prices</p>
          </motion.div>
          
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="product-badge">Wholesale</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="quick-view">Quick View</button>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                    ))}
                    <span>({product.rating})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="btn-add-to-cart">
                    <FaShoppingBag /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="view-all-btn"
          >
            <button className="btn-primary">
              View All Products <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2>What Our Customers Say</h2>
            <p>Trusted by hundreds of retailers nationwide</p>
          </motion.div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? 'filled' : ''} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Stock Your Store?</h2>
            <p>Join hundreds of retailers who trust us for their wholesale clothing needs</p>
            <div className="cta-buttons">
              <button className="btn-primary">Request Catalog</button>
              <button className="btn-outline-white">Contact Sales</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>ShopEase Wholesale</h3>
              <p>Your trusted partner for quality clothing at wholesale prices.</p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Wholesale FAQ</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Shipping Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 Wholesale St, Fashion District</li>
                <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> sales@shopease.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ShopEase Wholesale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;