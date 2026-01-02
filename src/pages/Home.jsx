import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";
import heroImage from "../assets/images/hero.jpg";


export default function Home() {
  const [entered, setEntered] = useState(false);

  // Lock scroll until intro is dismissed
  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  // Detect first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!entered) {
        setEntered(true);
      }
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

              {/* SCROLL INDICATOR */}
              <div className="scroll-indicator">
                <span />
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
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>FERNWEHS</h1>
            <p>A Destination for the New You</p>
          </div>
        </section>

        {/* other home sections here */}
      </motion.div>
    </>
  );
}
