/* src/pages/About.jsx */
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/about.css";
import storyImg from "../assets/images/hero.jpg"; 

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="about-page-wrapper">
        <section className="about-hero">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Redefining Luxury Aesthetic Wellness Globally</h1>
            <motion.p 
              initial={{ letterSpacing: "0px", opacity: 0 }}
              animate={{ letterSpacing: "2px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Elegance. Excellence. Experience.
            </motion.p>
          </motion.div>
        </section>

        <section className="about-story">
          <div className="story-container">
            <motion.div 
              className="story-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>Our Story</h2>
              <p>
                FERNWEHS is a global luxury destination for aesthetic medicine —
                combining clinical mastery, ultra-premium hospitality, and curated
                wellness journeys. 
              </p>
              <p>
                Our mission is simple: To help the world discover <strong>‘The New You’</strong> with elegance, safety, and precision.
              </p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={storyImg} alt="Fernwehs Clinic" />
            </motion.div>
          </div>
        </section>

        <section className="about-ethos-compact">
          <div className="ethos-container">
            {["Elegance", "Excellence", "Experience"].map((item, i) => (
              <motion.div 
                key={item}
                className="ethos-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{item}</h3>
                <p>{i === 0 ? "Refined aesthetics that never look overdone." : i === 1 ? "Global protocols & top-tier specialists." : "A journey that feels like a retreat."}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="leadership-compact">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Leadership
          </motion.h2>
          <div className="leader-grid">
            {[
              { t: "Global Clinical Excellence", d: "Medical Direction" },
              { t: "Operations & Network", d: "International Partnerships" },
              { t: "Finance & Governance", d: "Compliance & Ethics" },
              { t: "Technology & CX", d: "Digital Innovation" },
              { t: "Global Business", d: "Strategic Alliances" },
              { t: "PMO & Compliance", d: "Quality Control" }
            ].map((leader, i) => (
              <motion.div 
                key={i}
                className="leader-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{leader.t}</h4>
                <p>{leader.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}