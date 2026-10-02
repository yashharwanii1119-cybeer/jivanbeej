import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Leaf, Star, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './index.css';
const WHATSAPP_NUMBER = '918619633015';

const products = [
  { 
    id: 1, 
    name: "Cumin Seeds", 
    hindi: "जीरा", 
    description: "Premium quality whole cumin seeds known for their warm, earthy flavor and intense aroma.", 
    img: "/images/cumin.png" 
  },
  { 
    id: 2, 
    name: "Red Chilli", 
    hindi: "लाल मिर्च", 
    description: "Vibrant red chilli powder with the perfect balance of heat and authentic natural color.", 
    img: "/images/red-chilli.png" 
  },
  { 
    id: 3, 
    name: "Black Pepper", 
    hindi: "काली मिर्च", 
    description: "Bold and pungent black pepper corns, carefully selected for maximum pungency.", 
    img: "/images/black-pepper.png" 
  },
  { 
    id: 4, 
    name: "Green Cardamom", 
    hindi: "हरी इलायची", 
    description: "Sweet and aromatic whole green cardamom pods, the queen of spices.", 
    img: "/images/green-cardamom.png" 
  },
  { 
    id: 5, 
    name: "Coriander Seeds", 
    hindi: "धनिया", 
    description: "Fresh, citrus-like whole coriander seeds to enhance your daily cooking.", 
    img: "/images/coriander-seeds.png" 
  },
  { 
    id: 6, 
    name: "Turmeric", 
    hindi: "हल्दी", 
    description: "Rich, golden turmeric powder with high curcumin content and medicinal properties.", 
    img: "/images/turmeric.png" 
  },
  { 
    id: 7, 
    name: "Garlic", 
    hindi: "लहसुन", 
    description: "Dehydrated garlic flakes packed with strong flavor, ready for convenient cooking.", 
    img: "/images/garlic.png" 
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const generalWhatsAppMessage = "Hello Jivan Beej, I would like to know more about your spices.";

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-brand">
            <span className="nav-brand-title">JIVAN BEEJ</span>
            <span className="nav-brand-subtitle">Pure • Natural • Authentic</span>
          </a>
          
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href={getWhatsAppLink(generalWhatsAppMessage)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-menu-btn" 
          style={{ position: 'absolute', top: '24px', right: '24px' }}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="mobile-nav-links">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="nav-link">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">About</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="nav-link">Products</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link">Contact</a>
          <a 
            href={getWhatsAppLink(generalWhatsAppMessage)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" id="home" role="img" aria-label="Jivan Beej Indian spices">
        <img src="/images/hero-spices.png" alt="" className="hero-bg-img" />
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Pure Spices.<br/>Authentic Flavour.</h1>
            <p>Bringing the natural aroma, rich colour and authentic taste of carefully selected Indian spices to your kitchen.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Explore Our Spices <ArrowRight size={18} />
              </a>
              <a 
                href={getWhatsAppLink(generalWhatsAppMessage)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-white"
              >
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img 
              src="/images/about-spices.png" 
              alt="Natural Spices Process" 
              className="about-img"
              style={{height: '450px', width: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 12px 24px rgba(18, 61, 42, 0.12)'}}
            />
          </div>
          <div className="about-content">
            <h2>About Jivan Beej</h2>
            <div className="about-accent"></div>
            <p>At Jivan Beej, we believe that the soul of any great dish lies in the quality of its ingredients. We focus on providing premium quality Indian Spices that deliver authentic flavour and natural aroma.</p>
            <p>Our carefully selected range brings the true taste of tradition to your kitchen. Sometimes searched as Jeevan Beej, our commitment to purity and natural goodness ensures that Jivan Beej Spices make every meal you prepare memorable.</p>
            <a href="#products" className="btn btn-outline" style={{marginTop: '16px'}}>
              View Our Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Spices</h2>
            <p className="section-subtitle">Explore our selection of carefully selected everyday spices.</p>
          </div>
          
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={product.img} alt={`${product.name} (${product.hindi})`} className="product-img" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <span>{product.name}</span>
                    <span className="product-hindi">{product.hindi}</span>
                  </h3>
                  <p className="product-desc">{product.description}</p>
                  <a 
                    href={getWhatsAppLink(`Hello Jivan Beej, I am interested in your ${product.name} (${product.hindi}). Please share more details.`)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <FaWhatsapp size={18} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features" id="features">
        <div className="container text-center">
          <h2 className="section-title text-white" style={{color: 'white'}}>Why Choose Jivan Beej</h2>
          <div className="features-grid">
            <div className="feature-card">
              <ShieldCheck size={48} className="feature-icon" />
              <h3 className="feature-title">Carefully Selected Spices</h3>
              <p className="feature-desc">Every spice is chosen with strict attention to quality and freshness.</p>
            </div>
            <div className="feature-card">
              <Star size={48} className="feature-icon" />
              <h3 className="feature-title">Authentic Flavour</h3>
              <p className="feature-desc">Experience the true, uncompromised taste of traditional Indian spices.</p>
            </div>
            <div className="feature-card">
              <Sparkles size={48} className="feature-icon" />
              <h3 className="feature-title">Rich Aroma</h3>
              <p className="feature-desc">Our spices preserve their natural essential oils for a powerful aroma.</p>
            </div>
            <div className="feature-card">
              <Leaf size={48} className="feature-icon" />
              <h3 className="feature-title">Quality You Can Trust</h3>
              <p className="feature-desc">Pure, natural ingredients delivered with professional reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2>Looking for Quality Spices?</h2>
            <p>Have a question about our products? Connect with Jivan Beej directly on WhatsApp.</p>
            <a 
              href={getWhatsAppLink(generalWhatsAppMessage)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{padding: '16px 36px', fontSize: '1.125rem'}}
            >
              <FaWhatsapp size={22} />
              Chat with Jivan Beej
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Jivan Beej</h3>
              <p>Pure Spices. Authentic Flavour.</p>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-item">
                <Phone size={18} />
                <span>+91 8619633015</span>
              </div>
              <div className="footer-contact-item">
                <FaWhatsapp size={18} />
                <a 
                  href={getWhatsAppLink(generalWhatsAppMessage)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: 'inherit'}}
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Jivan Beej. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink(generalWhatsAppMessage)} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Chat with Jivan Beej on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}

export default App;
