import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/about.css";
// Use hero image or specific story image
import storyImg from "../assets/images/hero.jpg"; 

export default function About() {
  return (
    <PageTransition>

      {/* HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Redefining Luxury Aesthetic Wellness Globally</h1>
          <p>Elegance. Excellence. Experience.</p>
        </motion.div>
      </section>

      {/* OUR STORY (Cinematic Split) */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              FERNWEHS is a global luxury destination for aesthetic medicine —
              combining clinical mastery, ultra-premium hospitality, and curated
              wellness journeys. 
            </p>
            <p>
              Our mission is simple: To help the world discover <strong>‘The New You’</strong> with elegance, safety, and precision. We believe aesthetic transformation is not just a procedure — it’s an emotional journey towards renewed confidence.
            </p>
          </div>
          <div className="story-image">
            <img src={storyImg} alt="Fernwehs Clinic" />
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="about-ethos-compact">
        <div className="ethos-container">
          <div className="ethos-item">
            <h3>Elegance</h3>
            <p>Refined aesthetics that never look overdone.</p>
          </div>
          <div className="ethos-item">
            <h3>Excellence</h3>
            <p>Global protocols & top-tier specialists.</p>
          </div>
          <div className="ethos-item">
            <h3>Experience</h3>
            <p>A journey that feels like a retreat.</p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP (Compact Grid) */}
      <section className="leadership-compact">
        <h2>The Leadership</h2>
        <div className="leader-grid">
          <div className="leader-card">
            <h4>Global Clinical Excellence</h4>
            <p>Medical Direction</p>
          </div>
          <div className="leader-card">
            <h4>Operations & Network</h4>
            <p>International Partnerships</p>
          </div>
          <div className="leader-card">
            <h4>Finance & Governance</h4>
            <p>Compliance & Ethics</p>
          </div>
          <div className="leader-card">
            <h4>Technology & CX</h4>
            <p>Digital Innovation</p>
          </div>
          <div className="leader-card">
            <h4>Global Business</h4>
            <p>Strategic Alliances</p>
          </div>
          <div className="leader-card">
            <h4>PMO & Compliance</h4>
            <p>Quality Control</p>
          </div>
        </div>
      </section>

      {/* DIFFERENCE (Infographic List) */}
      <section className="difference-section">
        <h2>The Fernwehs Difference</h2>
        <div className="diff-list">
          <div className="diff-item">
            <span>01</span>
            <p><strong>Guaranteed Safety:</strong> NABH-grade clinics & European protocols.</p>
          </div>
          <div className="diff-item">
            <span>02</span>
            <p><strong>Tech-Driven:</strong> AI-assisted analysis & digital records.</p>
          </div>
          <div className="diff-item">
            <span>03</span>
            <p><strong>Global Care:</strong> 24x7 Concierge support in multiple languages.</p>
          </div>
          <div className="diff-item">
            <span>04</span>
            <p><strong>Cost Advantage:</strong> Premium care at 60-70% lower cost.</p>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}