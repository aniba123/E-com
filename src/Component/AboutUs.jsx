import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';
import team1 from '../assets/itme1.jpg'; // Replace with your images
import team2 from '../assets/itme2.jpg';
import team3 from '../assets/item3.jpg';
import warehouse from '../assets/item4.jpg';
import './AboutUs.css'; // Import your CSS file

const AboutUs = () => {
  const stats = [
    { icon: <FaTshirt />, number: "10,000+", label: "Products Available" },
    { icon: <FaUsers />, number: "500+", label: "Happy Retailers" },
    { icon: <FaAward />, number: "15+", label: "Years Experience" },
    { icon: <FaGlobeAmericas />, number: "50+", label: "Countries Served" }
  ];

  const teamMembers = [
    { id: 1, name: "Alex Johnson", role: "Founder & CEO", image: team1 },
    { id: 2, name: "Sarah Williams", role: "Head of Operations", image: team2 },
    { id: 3, name: "Michael Chen", role: "Sales Director", image: team3 }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Story</h1>
            <p className="subtitle">Connecting retailers with quality wholesale clothing since 2008</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Who We Are</h2>
              <p>
                Founded in 2008, FashionWholesale is a leading distributor of high-quality clothing 
                at competitive wholesale prices. We specialize in providing retailers with trendy, 
                affordable fashion that sells.
              </p>
              <p>
                Our mission is to empower small and medium businesses by offering them the same 
                quality products and pricing that large retailers enjoy, helping them compete 
                in today's dynamic fashion market.
              </p>
            </motion.div>

            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={warehouse} alt="Our warehouse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>By The Numbers</h2>
            <p>Our impact in the wholesale clothing industry</p>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>The passionate people behind FashionWholesale</p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p>What drives us every day</p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">01</div>
              <h3>Quality Assurance</h3>
              <p>We rigorously inspect every product to ensure it meets our high standards before it reaches you.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">02</div>
              <h3>Fair Pricing</h3>
              <p>We believe in transparent, competitive pricing that gives your business the edge.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">03</div>
              <h3>Retailer Success</h3>
              <p>Your growth is our success. We provide the tools and products to help your business thrive.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Grow Your Business?</h2>
            <p>Join hundreds of retailers who trust us for their wholesale needs</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.button>
              <motion.button 
                className="btn-outline-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;