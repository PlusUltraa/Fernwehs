import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/about.css";

export default function About() {
  return (
    <PageTransition>

      {/* HERO */}
      <section className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>THE FERNWEHS EXPERIENCE</h1>
          <p>Elegance. Excellence. Experience.</p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Who We Are</h2>
          <p>
            FERNWEHS is a global luxury destination for aesthetic medicine —
            combining clinical mastery, ultra-premium hospitality, and curated
            wellness journeys. Our mission is simple: to help the world discover
            <strong> “The New You”</strong> with elegance, safety, and precision.
          </p>
        </motion.div>
      </section>

      {/* ETHOS */}
      <section className="about-ethos">
        <h2>Our Ethos</h2>

        <div className="ethos-grid">
          {["Elegance", "Excellence", "Experience"].map((item, i) => (
            <motion.div
              key={i}
              className="ethos-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-section">
        <h2>Leadership</h2>

        <div className="leaders-grid">
          {[
            "Clinical Excellence",
            "Operations & Partnerships",
            "Finance & Governance",
            "Technology & CX",
            "Global Business",
            "PMO & Compliance"
          ].map((role, i) => (
            <motion.div
              key={i}
              className="leader-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p>{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}
