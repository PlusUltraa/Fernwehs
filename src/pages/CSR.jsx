import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/csr.css";

// Images (Reusing existing assets with CSS filters to match mood)
import heroImg from "../assets/images/hero.jpg"; 
import missionImg from "../assets/images/hero.jpg";
import impact1 from "../assets/images/hero.jpg";
import impact2 from "../assets/images/hero.jpg"; 
import impact3 from "../assets/images/hero.jpg";

export default function CSR() {
  const [countryCode, setCountryCode] = useState(null);
  const [countryName, setCountryName] = useState("Global");

  // Fetch User Country
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
          setCountryName(data.country_name);
        }
      })
      .catch((err) => console.error("Geo-location failed:", err));
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="csr-page">
        
        {/* BLOCK 1: EMOTIONAL HERO */}
        <section className="csr-hero">
          <div className="csr-hero-bg">
            <img src={heroImg} alt="Restoring Dignity" />
            <div className="csr-overlay"></div>
          </div>
          
          <motion.div 
            className="csr-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="location-badge">
              {countryCode && (
                <img 
                  src={`https://flagcdn.com/h40/${countryCode}.png`} 
                  alt={countryName} 
                  className="user-flag"
                />
              )}
              <span>Uniting {countryName} for a Cause</span>
            </div>
            
            <h1>THE SECOND LIFE</h1>
            <p className="csr-tagline">Restoring Confidence, Dignity & Hope.</p>
            <div className="csr-separator"></div>
          </motion.div>
        </section>

        {/* BLOCK 2: THE MISSION */}
        <section className="csr-mission">
          <div className="csr-container split-layout">
            <motion.div 
              className="mission-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>Our Mission</h2>
              <p>
                <strong>The Fernwehs Impact Initiative</strong> is a movement to restore dignity to those who have lost it through tragedy. 
                We believe that aesthetic medicine is not just about vanity—it is about reconstruction, rehabilitation, and the right to face the world with confidence.
              </p>
              <p>
                We provide free reconstructive care, psychological counseling, and legal support to acid attack survivors, underprivileged women, and victims of war. This is our promise: to gift a <strong>Second Life</strong> to those who need it most.
              </p>
            </motion.div>
            <motion.div 
              className="mission-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={missionImg} alt="Care and Support" />
            </motion.div>
          </div>
        </section>

        {/* BLOCK 3: IMPACT PROGRAMS */}
        <section className="csr-impact">
          <div className="csr-container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Impact Programs
            </motion.h2>
            
            <div className="impact-grid">
              {/* Card 1 */}
              <motion.div 
                className="impact-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="impact-img">
                  <img src={impact1} alt="Survivors" />
                </div>
                <div className="impact-info">
                  <h3>Acid Attack Survivors</h3>
                  <p>Comprehensive facial reconstruction and scar revision therapies to restore identity and function.</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="impact-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                variants={fadeUp}
              >
                <div className="impact-img">
                  <img src={impact2} alt="Underprivileged Women" />
                </div>
                <div className="impact-info">
                  <h3>Underprivileged Women</h3>
                  <p>Providing essential dermatological care and wellness support to marginalized communities.</p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="impact-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                variants={fadeUp}
              >
                <div className="impact-img">
                  <img src={impact3} alt="War Victims" />
                </div>
                <div className="impact-info">
                  <h3>Victims of Conflict</h3>
                  <p>Reconstructive surgery and physical rehabilitation for those injured in war zones.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BLOCK 4: CALL FOR AMBASSADORS */}
        <section className="csr-cta">
          <motion.div 
            className="cta-content-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Be The Change</h2>
            <p>Join us as a Global Ambassador or Volunteer Doctor.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-gold-solid">Support the Cause</a>
              <a href="/contact" className="btn-gold-outline">Join as Ambassador</a>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}