import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";

// IMAGES
import heroImage from "../assets/images/hero.jpg";
import globalExpertiseImg from "../assets/images/global-expertise.jpg";
import seamlessTravelImg from "../assets/images/seamless-travel.jpg";
import recoveryImg from "../assets/images/recovery.jpg";
import womanImg from "../assets/images/woman.jpg";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  /* Lock scroll until intro is dismissed */
  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  /* Detect first scroll to dismiss intro */
  useEffect(() => {
    if (entered) return;
    const handleScroll = () => setEntered(true);
    window.addEventListener("wheel", handleScroll, { once: true });
    window.addEventListener("touchmove", handleScroll, { once: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [entered]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Animation variants for scroll reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      {/* INTRO OVERLAY */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            className="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="intro-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 1 }}
            >
              {/* MIRROR BACKGROUND */}
              <div className="heritage-mirror-bg" />

              {/* TITLE */}
              <div className="mirror-glass">
                <h1>FERNWEHS</h1>
                <p className="tagline">THE NEW YOU</p>
                <div className="scroll-indicator">
                  <span />
                </div>
                <span className="scroll-text">Scroll to Begin</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN HOME */}
      <motion.div
        className="home-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* HERO SECTION */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay-text">
            <h1>FERNWEHS</h1>
            <p>LUXURY AESTHETIC TOURISM</p>
          </div>
        </section>

        {/* 1. PHILOSOPHY SECTION: "THE NEW YOU" */}
        <section className="philosophy-section">
          <div className="philosophy-watermark">THE NEW YOU</div>
          <motion.div 
            className="philosophy-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2>
              Beauty is not just seen.<br />
              It is <span className="gold-accent">Experienced.</span>
            </h2>
            <p>
              At Fernwehs, we bridge the gap between world-class medical expertise 
              and the serenity of a luxury vacation. We believe that your journey 
              to transformation should be as beautiful as the result. 
              Leave as a traveler, return as <strong>The New You</strong> at Best prices.
            </p>
          </motion.div>
        </section>

        {/* 2. VIDEO EXPERIENCE SECTION */}
        <section className="video-section">
          <motion.div 
            className="video-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <video 
              ref={videoRef}
              className="video-player"
              src="/public/experience.mp4" 
              controls={isPlaying}
              // poster={conciergeImg}
            />
            
            {!isPlaying && (
              <div className="video-overlay" onClick={handlePlayVideo}>
                <button className="play-btn">
                  <span className="play-icon"></span>
                  Play Video
                </button>
              </div>
            )}
          </motion.div>
        </section>

        <section className="features-section">
          
          <motion.div 
            className="feature-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="feature-image">
              <img src={globalExpertiseImg} alt="World-class medical expertise" />
            </div>
            <div className="feature-text">
              <span className="feature-label">01. EXPERTISE</span>
              <h3>Global Medical Excellence</h3>
              <p>
                We partner exclusively with elite surgeons and accredited clinics 
                worldwide. From cosmetic dentistry to advanced dermatology, 
                access the best hands in the industry without borders.
              </p>
              <a href="/services" className="btn-arrow">Explore Services →</a>
            </div>
          </motion.div>

          {/* STEP 2: LOGISTICS (REVERSE) */}
          <motion.div 
            className="feature-row reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="feature-image">
              <img src={seamlessTravelImg} alt="Seamless luxury travel" />
            </div>
            <div className="feature-text">
              <span className="feature-label">02. JOURNEY</span>
              <h3>Seamless Medical Travel</h3>
              <p>
                Your focus should be on you, not logistics. Our concierge team 
                handles every detail—from private flights and 5-star 
                accommodations to clinic transfers and visa assistance.
              </p>
              <a href="/journey" className="btn-arrow">View The Journey →</a>
            </div>
          </motion.div>

          {/* STEP 3: RECOVERY */}
          <motion.div 
            className="feature-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="feature-image">
              <img src={recoveryImg} alt="Private luxury recovery" />
            </div>
            <div className="feature-text">
              <span className="feature-label">03. SANCTUARY</span>
              <h3>Curated Recovery</h3>
              <p>
                Heal in absolute privacy and comfort. We curate tranquil 
                recovery sanctuaries where bespoke wellness plans and 
                discreet care ensure you bloom into your new self.
              </p>
              <a href="/contact" className="btn-arrow">Plan Your Stay →</a>
            </div>
          </motion.div>

        </section>

        {/* 4. FINAL CALL TO ACTION */}
        <section className="final-cta">
          <div className="cta-bg">
            <img src={womanImg} alt="The New You" />
          </div>
          <div className="cta-content">
            <h2>Ready to Meet The New You?</h2>
            <p style={{ marginBottom: "32px", fontSize: "16px", opacity: 0.9, color: "white" }}>
              Your private consultation is just a click away.
            </p>
            <a href="/contact" className="btn-gold">Begin Your Journey</a>
          </div>
        </section>

      </motion.div>
    </>
  );
}