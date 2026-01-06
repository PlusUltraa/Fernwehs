import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";

// IMAGES
import heroImage from "../assets/images/hero.jpg";
import confidentWoman from "../assets/images/woman.jpg";
import luxuryRecovery from "../assets/images/recovery.jpg";
import glowingSkin from "../assets/images/glowing-skin.jpg";

export default function Home() {
  const [entered, setEntered] = useState(false);

  // Lock scroll until intro dismissed
  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  // Detect first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!entered) setEntered(true);
    };

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
              <h1>FERNWEHS</h1>
              <p>The New You</p>

              <div className="scroll-indicator">
                <span />
              </div>
              <span className="scroll-text">Scroll to Begin</span>
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
          className="hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-content">
            <h1>FERNWEHS</h1>
            <p>A Destination for the New You</p>
          </div>
        </section>

        {/* IMAGE TILES */}
        <section className="home-section">
          <div className="home-image-grid">
            {/* TILE 1 */}
            <div className="home-image-tile">
              <img src={confidentWoman} alt="Refined confidence" />
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

            {/* TILE 2 */}
            <div className="home-image-tile">
              <img src={luxuryRecovery} alt="Curated recovery" />
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

            {/* TILE 3 */}
            <div className="home-image-tile">
              <img src={glowingSkin} alt="Precision aesthetics" />
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
      </motion.div>
    </>
  );
}
