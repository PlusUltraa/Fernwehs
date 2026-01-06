import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/about.css";

export default function About() {
  return (
    <PageTransition>

      {/* HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <h1>THE FERNWEHS EXPERIENCE</h1>
          <p>Elegance. Excellence. Experience.</p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
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
            {
              title: "Clinical Excellence",
              desc:
                "Globally trained specialists ensuring the highest standards in aesthetic medicine and patient outcomes."
            },
            {
              title: "Operations & Partnerships",
              desc:
                "Managing international patient journeys, luxury hospitality, and strategic healthcare alliances."
            },
            {
              title: "Finance & Governance",
              desc:
                "Ensuring transparency, compliance, and financial stewardship across all operations."
            },
            {
              title: "Technology & CX",
              desc:
                "Driving digital innovation and refined patient experience design across platforms."
            },
            {
              title: "Global Business",
              desc:
                "Scaling FERNWEHS as a leader in luxury aesthetic medical tourism worldwide."
            },
            {
              title: "PMO & Compliance",
              desc:
                "Overseeing delivery, regulatory adherence, and operational excellence."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="leader-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}
