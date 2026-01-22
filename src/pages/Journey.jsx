import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/journey.css";

// IMAGES FOR BEFORE/AFTER (Using placeholders effectively)
import antiAge from "../assets/images/service-antiage.jpg";
import dentistry from "../assets/images/service-dentistry.jpg";
import laser from "../assets/images/service-laser.jpg";
import glowingSkin from "../assets/images/glowing-skin.jpg";

const journeySteps = [
  {
    title: "Virtual Consultation",
    desc: "Your journey begins from the comfort of your home. Connect with our specialists for a comprehensive pre-op assessment. We discuss your goals, review your medical history, and create a preliminary treatment plan tailored just for you. Post-op virtual check-ins are also available for your peace of mind."
  },
  {
    title: "End-to-End Travel Planning",
    desc: "Leave the logistics to us. Our dedicated concierge team handles everything—from booking your flights and securing your Visa to arranging private airport transfers. We ensure your travel experience is as seamless and stress-free as your treatment."
  },
  {
    title: "Arrival & VIP Welcome",
    desc: "Upon landing, you will be greeted by a personal chauffeur and whisked away to your 5-star accommodation. Our team ensures a warm, professional welcome, helping you settle in and preparing you for your upcoming consultation with a detailed itinerary."
  },
  {
    title: "Treatment Day",
    desc: "Experience world-class care in our state-of-the-art facility. Your procedure is performed by top-tier specialists using the latest technology to ensure precision and safety. Our team is by your side throughout, ensuring your comfort and privacy are paramount."
  },
  {
    title: "Recovery & Wellness",
    desc: "Recovery is redefined at Fernwehs. We utilize advanced techniques to promote fast healing, allowing you to enjoy your downtime. Relax in a curated sanctuary with personalized wellness amenities, ensuring your recuperation feels less like a medical necessity and more like a luxury retreat."
  },
  {
    title: "Comprehensive Aftercare",
    desc: "Our commitment to you doesn't end when you leave. We provide extensive aftercare support, including scheduled follow-up video calls and access to our medical team. Whether you are back home or traveling, we ensure your recovery continues smoothly and your results are maintained."
  }
];

const resultsData = [
  {
    title: "Anti-Ageing Facelift",
    desc: "Non-surgical restoration of volume and contour.",
    before: antiAge, 
    after: glowingSkin 
  },
  {
    title: "Smile Design Veneers",
    desc: "Complete smile transformation in 48 hours.",
    before: dentistry,
    after: dentistry 
  },
  {
    title: "Laser Skin Resurfacing",
    desc: "Clearer, smoother texture and tone.",
    before: laser,
    after: laser
  },
  // Add more empty placeholders as requested
  // {
  //   title: "Hair Restoration",
  //   desc: "Natural-looking density and regrowth.",
  //   before: null, 
  //   after: null 
  // },
  // {
  //   title: "Body Contouring",
  //   desc: "Sculpted definition with non-invasive techniques.",
  //   before: null, 
  //   after: null 
  // }
];

export default function Journey() {
  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="journey-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>The Fernwehs Journey</h1>
          <p>
            From your first virtual consultation to your final follow-up, we orchestrate every detail of your transformation with precision, luxury, and care.
          </p>
        </motion.div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="journey-timeline">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            className="journey-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* CONTENT (Will be on Left for Odd, Right for Even due to CSS row-reverse) */}
            <div className="journey-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

            {/* MARKER (Always Center) */}
            <div className="journey-marker">
              <span>{index + 1}</span>
            </div>

            {/* SPACER (Balances flexbox) */}
            <div className="journey-spacer"></div>
          </motion.div>
        ))}
      </section>

      {/* REAL RESULTS GALLERY */}
      <section className="results-section">
        <div className="results-header">
          <h2>Real Results</h2>
          <p>Witness the transformative power of our expert care.</p>
        </div>

        <div className="results-grid">
          {resultsData.map((item, i) => (
            <motion.div 
              key={i} 
              className="result-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {item.before && item.after ? (
                <div className="result-images">
                  <div className="img-wrapper">
                    <img src={item.before} alt="Before" className="comparison-img" />
                    <span className="label-overlay">Before</span>
                  </div>
                  <div className="img-wrapper">
                    <img src={item.after} alt="After" className="comparison-img" />
                    <span className="label-overlay">After</span>
                  </div>
                </div>
              ) : (
                // Fallback for empty/pending images with increased height to match new vertical layout
                <div className="result-images" style={{ background: "#f5f5f5", justifyContent: "center", alignItems: "center", borderRadius: "12px", height: "700px" }}>
                  <p style={{ color: "#aaa" }}>Images Coming Soon</p>
                </div>
              )}
              <div className="result-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}