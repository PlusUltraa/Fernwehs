import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
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
      <section style={styles.section}>
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
      <section style={styles.darkSection}>
        <h2>Our Ethos</h2>
        <div style={styles.ethosGrid}>
          {["Elegance", "Excellence", "Experience"].map((item, i) => (
            <motion.div
              key={i}
              style={styles.ethosCard}
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
      <section style={styles.section}>
        <h2>Leadership</h2>
        <div style={styles.leaders}>
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
              style={styles.leaderCard}
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
    </>
  );
}

const styles = {
  hero: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  section: {
    padding: "120px 15%",
    background: "#fff",
    color: "#000"
  },
  darkSection: {
    padding: "120px 15%",
    background: "#000",
    color: "#fff",
    textAlign: "center"
  },
  ethosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "40px",
    marginTop: "60px"
  },
  ethosCard: {
    border: "1px solid #d4af37",
    padding: "40px"
  },
  leaders: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px",
    marginTop: "60px"
  },
  leaderCard: {
    padding: "30px",
    border: "1px solid #d4af37",
    textAlign: "center"
  }
};
