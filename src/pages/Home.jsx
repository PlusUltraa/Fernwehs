import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";
import HomeSlider from "../components/HomeSlider";

// IMAGES
import heroImage from "../assets/images/hero.jpg";
import confidentWoman from "../assets/images/woman.jpg";
import luxuryRecovery from "../assets/images/recovery.jpg";
import glowingSkin from "../assets/images/glowing-skin.jpg";
import globalExpertiseImg from "../assets/images/global-expertise.jpg";
import seamlessTravelImg from "../assets/images/seamless-travel.jpg";
import privateCareImg from "../assets/images/private-care.jpg";
import conciergeImg from "../assets/images/concierge.jpg";

export default function Home() {
  const [entered, setEntered] = useState(false);

  /* Lock scroll until intro is dismissed */
  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  /* Detect first scroll */
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
        initial={{ scale: 1.05 }}
        animate={{ scale: entered ? 1 : 1.05 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {/* HERO */}
        <section
          className="hero hero-static"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay-text">
            <h1>FERNWEHS</h1>
            <p>The New You</p>
          </div>
        </section>

        <HomeSlider />

        {/* IMAGE TILES */}
        <section className="home-section">
          <div className="home-image-grid">
            <div className="home-image-tile">
              <img src={confidentWoman} alt="Refined confidence aesthetics" />
              <div className="tile-content-below">
                <h3>Refined Confidence</h3>
                <p>
                  Subtle aesthetic enhancements designed to reveal your most
                  confident, natural self.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>

            <div className="home-image-tile">
              <img src={luxuryRecovery} alt="Curated recovery experience" />
              <div className="tile-content-below">
                <h3>Curated Recovery</h3>
                <p>
                  Private, tranquil recovery experiences curated with
                  uncompromising comfort.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>

            <div className="home-image-tile">
              <img src={glowingSkin} alt="Precision aesthetic treatments" />
              <div className="tile-content-below">
                <h3>Precision Aesthetics</h3>
                <p>
                  Advanced treatments delivered with clinical excellence and
                  artistic care.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LUXURY AESTHETIC TOURISM */}
        <section className="home-section">
          <div className="home-image-grid">
            <div className="home-image-tile">
              <img src={globalExpertiseImg} alt="Global aesthetic expertise" />
              <div className="tile-content-below">
                <h3>Global Aesthetic Expertise</h3>
                <p>
                  Access world-class specialists and advanced aesthetic care
                  across leading global destinations.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>

            <div className="home-image-tile">
              <img src={seamlessTravelImg} alt="Seamless medical travel" />
              <div className="tile-content-below">
                <h3>Seamless Medical Travel</h3>
                <p>
                  From consultations to flights and stays, every detail is
                  curated with precision.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>

            <div className="home-image-tile">
              <img src={privateCareImg} alt="Private aesthetic care" />
              <div className="tile-content-below">
                <h3>Discreet & Private Care</h3>
                <p>
                  Confidential, personalized journeys designed for privacy,
                  trust, and comfort.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>

            <div className="home-image-tile">
              <img src={conciergeImg} alt="Luxury concierge services" />
              <div className="tile-content-below">
                <h3>End-to-End Concierge</h3>
                <p>
                  A dedicated concierge oversees your experience from first
                  contact to recovery.
                </p>
                <a href="/contact" className="book-now-btn-below">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
