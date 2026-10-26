import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const features = [
    {
      icon: "📡",
      title: "Real-Time Monitoring",
      description:
        "IoT sensors continuously monitor drainage water levels and provide real-time information.",
    },
    {
      icon: "🚨",
      title: "Blockage Detection",
      description:
        "Smart sensors help identify possible drainage blockages before they cause serious problems.",
    },
    {
      icon: "📱",
      title: "Instant Alerts",
      description:
        "Municipal authorities receive notifications when unusual drainage conditions are detected.",
    },
    {
      icon: "🌧️",
      title: "Flood Risk Reduction",
      description:
        "Early detection helps authorities respond quickly and reduce urban flooding risks.",
    },
    {
      icon: "📊",
      title: "Smart Dashboard",
      description:
        "A centralized dashboard displays drainage conditions and sensor information.",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Solution",
      description:
        "Efficient drainage management supports cleaner and more sustainable cities.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Install Sensors",
      description:
        "IoT sensors are installed at important drainage monitoring points.",
    },
    {
      number: "02",
      title: "Monitor Drainage",
      description:
        "Sensors continuously measure water levels and other drainage conditions.",
    },
    {
      number: "03",
      title: "Detect Problems",
      description:
        "The system identifies abnormal water levels and possible blockages.",
    },
    {
      number: "04",
      title: "Send Alerts",
      description:
        "Notifications are sent to the responsible authorities for quick action.",
    },
  ];

  const benefits = [
    "Helps reduce urban flooding risks",
    "Supports faster blockage detection",
    "Reduces unnecessary manual inspections",
    "Improves drainage maintenance planning",
    "Supports cleaner and safer cities",
    "Promotes smart city development",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Smart Drainage System Enquiry"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Replace this with your team's actual email address.
    const contactEmail = "your-email@example.com";

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-icon">💧</span>
            <span>
              Smart<span className="highlight">Drain</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#working" onClick={closeMenu}>How It Works</a>
            <a href="#benefits" onClick={closeMenu}>Benefits</a>
            <a href="#demo" onClick={closeMenu}>Demo</a>

            <a
              href="#contact"
              className="nav-btn"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </nav>

        </div>
      </header>


      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🌍 Innovative IoT-Based Smart City Solution
          </div>

          <h1>
            Building Smarter Cities
            <br />
            With <span>Smart Drainage</span>
          </h1>

          <p>
            Transforming traditional drainage systems into intelligent
            monitoring networks using IoT technology.
            Detect problems early, improve maintenance,
            and help create safer cities.
          </p>

          <div className="hero-buttons">

            <a href="#features" className="primary-btn">
              Explore Our Solution →
            </a>

            <a href="#demo" className="secondary-btn">
              ▶ Watch Demo
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h3>24/7</h3>
              <p>Monitoring Design</p>
            </div>

            <div>
              <h3>IoT</h3>
              <p>Smart Technology</p>
            </div>

            <div>
              <h3>Real-Time</h3>
              <p>Alert System</p>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="dashboard-preview">

            <div className="dashboard-header">
              <span>💧 Drainage Monitoring</span>
              <span className="status-badge">● System Overview</span>
            </div>

            <div className="dashboard-grid">

              <div className="dashboard-card">
                <span>Water Level</span>
                <h2>Normal</h2>
                <p>Illustrative status</p>
              </div>

              <div className="dashboard-card">
                <span>Sensor Network</span>
                <h2>IoT</h2>
                <p>Connected monitoring concept</p>
              </div>

              <div className="dashboard-card">
                <span>Alerts</span>
                <h2>Smart</h2>
                <p>Early warning capability</p>
              </div>

              <div className="dashboard-card">
                <span>Monitoring</span>
                <h2>24/7</h2>
                <p>Continuous monitoring design</p>
              </div>

            </div>

            <div className="dashboard-footer">
              Smart Drainage System — Concept Dashboard
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">ABOUT OUR PROJECT</span>

            <h2>
              What is a <span>Smart Drainage System?</span>
            </h2>

            <p>
              An innovative approach to solving urban drainage problems
              through intelligent monitoring technology.
            </p>

          </div>

          <div className="about-content">

            <div className="about-image">
              <div className="about-illustration">
                <span>🏙️</span>
                <h3>Smart City Infrastructure</h3>
                <p>Connected • Intelligent • Sustainable</p>
              </div>
            </div>

            <div className="about-text">

              <h3>
                A Smarter Solution for Urban Drainage
              </h3>

              <p>
                Traditional drainage systems often face problems
                such as blockages, overflowing water, and
                delayed maintenance.
              </p>

              <p>
                Our Smart Drainage System proposes using
                Internet of Things (IoT) sensors to monitor
                drainage conditions and identify potential
                problems before they become serious.
              </p>

              <p>
                The system is designed to help municipal
                authorities make faster decisions and
                improve drainage management.
              </p>

              <a href="#working" className="primary-btn">
                Discover How It Works →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES SECTION ================= */}

      <section id="features" className="section features-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">OUR TECHNOLOGY</span>

            <h2>
              Powerful <span>Smart Features</span>
            </h2>

            <p>
              Intelligent features designed to improve
              drainage monitoring and maintenance.
            </p>

          </div>

          <div className="features-grid">

            {features.map((feature, index) => (

              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="#contact" className="feature-link">
                  Learn More →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section id="working" className="section working-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">WORKING PROCESS</span>

            <h2>
              How Does <span>It Work?</span>
            </h2>

            <p>
              Four simple steps to intelligent drainage monitoring.
            </p>

          </div>

          <div className="steps-grid">

            {steps.map((step, index) => (

              <div className="step-card" key={index}>

                <div className="step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section id="benefits" className="section benefits-section">

        <div className="container">

          <div className="benefits-layout">

            <div className="benefits-content">

              <span className="section-tag">
                WHY CHOOSE SMART DRAINAGE?
              </span>

              <h2>
                Creating Cleaner,
                <br />
                <span>Safer Cities</span>
              </h2>

              <p>
                Our proposed solution combines smart monitoring,
                early warning systems, and improved maintenance
                planning to support sustainable urban development.
              </p>

              <div className="benefits-list">

                {benefits.map((benefit, index) => (

                  <div className="benefit-item" key={index}>

                    <span className="check-icon">✓</span>

                    <span>{benefit}</span>

                  </div>

                ))}

              </div>

              <a href="#contact" className="primary-btn">
                Get in Touch →
              </a>

            </div>

            <div className="benefits-visual">

              <div className="benefit-highlight">

                <div className="benefit-big-icon">🌊</div>

                <h3>Smart Monitoring</h3>

                <p>
                  Detect Early. Respond Faster.
                  Protect Communities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DEMO VIDEO ================= */}

      <section id="demo" className="section demo-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">
              PRODUCT DEMONSTRATION
            </span>

            <h2>
              See Smart Drainage <span>In Action</span>
            </h2>

            <p>
              Watch our project sales pitch to understand
              the problem, solution, and benefits.
            </p>

          </div>

          <div className="video-container">

            <iframe
              src="https://www.youtube.com/embed/TtEIb1FttgE"
              title="Smart Drainage System Sales Pitch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>

          <div className="demo-description">

            <h3>Smart Drainage System</h3>

            <p>
              Explore how our IoT-based drainage monitoring
              concept aims to improve urban infrastructure
              and support smart city development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-content">

            <h2>
              Ready to Build a Smarter Future?
            </h2>

            <p>
              Join us in exploring innovative solutions
              for safer and more sustainable cities.
            </p>

            <a href="#contact" className="cta-btn">
              Contact Our Team →
            </a>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section id="contact" className="section contact-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">CONTACT US</span>

            <h2>
              Let's <span>Connect</span>
            </h2>

            <p>
              Interested in our Smart Drainage System?
              Reach out to learn more about our project.
            </p>

          </div>

          <div className="contact-layout">

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                We welcome discussions, feedback,
                and collaboration opportunities.
              </p>

              <div className="contact-info-card">

                <div className="contact-icon">📧</div>

                <div>
                  <h4>Email</h4>
                  <p>Add your team email address</p>
                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">📍</div>

                <div>
                  <h4>Location</h4>
                  <p>Andhra Pradesh, India</p>
                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">🌐</div>

                <div>
                  <h4>Project</h4>
                  <p>Smart Drainage System</p>
                </div>

              </div>

            </div>

            <div className="contact-form-container">

              <form onSubmit={handleSubmit}>

                <h3>Send Us a Message</h3>

                <div className="form-group">

                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                <button type="submit" className="primary-btn submit-btn">
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-content">

            <div className="footer-brand">

              <h2>
                💧 Smart<span>Drain</span>
              </h2>

              <p>
                Smarter Drainage, Safer Cities.
              </p>

              <p>
                Building innovative IoT-based solutions
                for sustainable urban infrastructure.
              </p>

            </div>

            <div className="footer-links">

              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#working">How It Works</a>
              <a href="#contact">Contact</a>

            </div>

            <div className="footer-links">

              <h3>Our Solution</h3>

              <a href="#features">IoT Monitoring</a>
              <a href="#features">Blockage Detection</a>
              <a href="#features">Smart Alerts</a>
              <a href="#benefits">Benefits</a>
              <a href="#demo">Watch Demo</a>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Smart Drainage System.
              All Rights Reserved.
            </p>

            <p>
              Smarter Drainage, Safer Cities 💧
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;