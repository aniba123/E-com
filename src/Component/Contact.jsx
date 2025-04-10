import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import contactBg from '../assets/contact.jpg'; // Replace with your image
import mapImage from '../assets/map-img.jpg'; // Replace with your image
import './Contact.css'
const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Our Location", text: "123 Wholesale Street, Fashion District, NY 10001" },
    { icon: <FaPhone />, title: "Phone Number", text: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, title: "Email Address", text: "info@fashionwholesale.com" },
    { icon: <FaClock />, title: "Working Hours", text: "Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBg})` }}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you! Contact our wholesale team for inquiries and support.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Send Us a Message
              </motion.h2>
              
              <form>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <input type="text" placeholder="Your Name" required />
                </motion.div>
                
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <input type="email" placeholder="Your Email" required />
                </motion.div>
                
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <input type="text" placeholder="Subject" />
                </motion.div>
                
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Send Message <FaPaperPlane />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h2>
              
              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="info-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="map-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <img src={mapImage} alt="Our location on map" />
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  View on Google Maps
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common wholesale inquiries</p>
          </motion.div>
          
          <div className="faq-grid">
            {[
              {
                question: "What are your minimum order quantities?",
                answer: "Our standard MOQ is 50 pieces per style, but we offer flexibility for new customers. Contact us to discuss your specific needs."
              },
              {
                question: "Do you offer private labeling?",
                answer: "Yes, we provide private labeling and custom packaging options for orders over 200 units."
              },
              {
                question: "What are your shipping options and costs?",
                answer: "We offer various shipping methods including air freight and sea freight. Costs depend on order size and destination."
              },
              {
                question: "Can I visit your showroom?",
                answer: "Absolutely! Our showroom is open by appointment Monday through Friday from 9AM to 5PM."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;