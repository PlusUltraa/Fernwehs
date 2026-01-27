import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";

// IMAGES
import heroImage from "../assets/images/hero.jpg";
import globalExpertiseImg from "../assets/images/service-dentistry.jpg";
import seamlessTravelImg from "../assets/images/seamless-travel.jpg";
import recoveryImg from "../assets/images/service-laser.jpg";
import womanImg from "../assets/images/woman.jpg";
import wellness from "../assets/images/wellness.png";
import heroVideo from "../assets/videos/Herowhiteboard.mp4";


export default function Home() {
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  // useEffect(() => {
  //   if (entered) return;
  //   const handleScroll = () => setEntered(true);
  //   window.addEventListener("wheel", handleScroll, { once: true });
  //   window.addEventListener("touchmove", handleScroll, { once: true });
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //     window.removeEventListener("touchmove", handleScroll);
  //   };
  // }, [entered]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const faqs = [
    { q: "Is India safe for aesthetic care?", a: "Yes — Fernwehs uses globally benchmarked SOPs, top specialists & verified partner clinics." },
    { q: "How much can I save?", a: "Up to 60–70% vs. GCC/UK without compromising quality." },
    { q: "How long is treament?", a: "Most treatments are done in hours" },
    { q: "How long is recovery?", a: "Most treatments offer next-day mobility & hotel-based recovery." },
    { q: "Do you help with visas?", a: "Yes, our concierge team assists end-to-end with medical visas and travel." },
    { q: "Is aftercare included?", a: "Yes — you receive digital records & remote follow-ups" }
  ];

  return (
    <>
      {/* <AnimatePresence>
        {!entered && (
          <motion.div
            className="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="intro-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mirror-glass">
                <h1>FERNWEHS</h1>
                <p className="tagline">THE NEW YOU</p>
                <div className="scroll-indicator"><span /></div>
                <span className="scroll-text">Scroll to Begin</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <motion.div
        className="home-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section className="hero video-hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video-bg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-fluid-container">
          <h1 className="glass-fluid-text">FERNWEHS</h1>
          <p className="glass-fluid-subtext">Luxury Aesthetics Tourism</p>
        </div>
      </section>

        <section className="why-choose-section">
          <motion.div
            className="section-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="section-title-center">
              <h2>Why Fernwehs?</h2>
              <p>Luxury Reimagined. Wellness Redefined. Affordable</p>
            </div>

            <div className="why-grid">
              <div className="why-card">
                <h3>Elite Specialists</h3>
                <p>Top dermatology & cosmetic dentistry experts delivering natural, elegant enhancements.</p>
              </div>
              <div className="why-card">
                <h3>Luxury Hospitality</h3>
                <p>Chauffeured transfers, concierge support, curated wellness, and premium partner hotels.</p>
              </div>
              <div className="why-card">
                <h3>International Quality</h3>
                <p>NABH-grade clinics, European protocols, global SOPs, and fully documented treatments.</p>
              </div>
              <div className="why-card">
                <h3>Unmatched Value</h3>
                <p>Premium transformations in India at 60–70% lower cost compared to GCC, UK and US.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="global-map-section">
          <div className="map-content">
            <h2>A Global Luxury Experience</h2>
            <p className="map-tagline">Anchored in India. Global Capital of Premium Aesthetic Care. Trusted across the world.</p>
            <div className="map-visual">
              <div className="map-dot dubai"><span>Dubai</span></div>
              <div className="map-dot london"><span>London</span></div>
              <div className="map-dot sa"><span>New York</span></div>
              <div className="map-dot india"><span>INDIA (HQ)</span></div>
              <svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M20,30 Q50,10 80,50" className="flight-path" />
                <path d="M40,40 Q60,45 80,50" className="flight-path" />
                <path d="M45,80 Q65,85 80,50" className="flight-path" />
              </svg>
            </div>
            <p className="map-footer">Patient Inflow: Dubai | Abu Dhabi | London | New York | Cape Town | Etc...</p>
          </div>
        </section>

        <section className="services-preview-section">
          <div className="section-container">
            <div className="section-title-center">
              <h2>Signature Services</h2>
            </div>
            <div className="services-compact-grid">
              <a href="/services" className="service-tile">
                <img src={womanImg} alt="Anti-Ageing" />
                <span>Anti-Ageing</span>
              </a>
              <a href="/services" className="service-tile">
                <img src={globalExpertiseImg} alt="Cosmetic Dentistry" />
                <span>Cosmetic Dentistry</span>
              </a>
              <a href="/services" className="service-tile">
                <img src={recoveryImg} alt="Laser & Skin" />
                <span>Laser & Skin</span>
              </a>
              <a href="/services" className="service-tile">
                <img src={wellness} alt="Wellness" />
                <span>Wellness</span>
              </a>
            </div>
            <div className="center-btn-row">
              <a href="/services" className="btn-arrow">Explore All Services →</a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-container">
            <h2>Common Questions</h2>
            <div className="faq-grid">
              {faqs.map((item, i) => (
                <div key={i} className="faq-item" onClick={() => toggleFaq(i)}>
                  <div className="faq-q">
                    {item.q}
                    <span className="faq-toggle">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="video-section">
          <motion.div
            className="video-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <video
              ref={videoRef}
              className="video-player"
              src="/experience.mp4"
              controls={isPlaying}
              loop
              muted={!isPlaying}
            />
            {!isPlaying && (
              <div className="video-overlay" onClick={handlePlayVideo}>
                <button className="play-btn">Play Experience</button>
              </div>
            )}
          </motion.div>
        </section>

        <section className="final-cta compact-cta">
          <div className="cta-content">
            <h2>Start Your Transformation</h2>
            <a href="/contact" className="btn-gold">Private Consultation</a>
          </div>
        </section>

      </motion.div>
    </>
  );
}