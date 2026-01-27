import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/journey.css";

// IMAGES FOR BEFORE/AFTER (Using placeholders effectively)
import faceliftbefore from "../assets/images/facelift-before.png";
import faceliftafter from "../assets/images/facelift-after.png";
import smilebefore from "../assets/images/smilebefore.png";
import smileafter from "../assets/images/smileafter.png";
import laserbefore from "../assets/images/laserbefore.jpg";
import laserafter from "../assets/images/laserafter.jpg";


const journeySteps = [
  {
    title: "Virtual Consultation",
    icon: "💻",
    desc: "Your journey begins from the comfort of your home. Connect with our specialists for a comprehensive pre-op assessment. We discuss your goals, review your medical history, and create a preliminary treatment plan tailored just for you."
  },
  {
    title: "End-to-End Travel Planning",
    icon: "✈️",
    desc: "Leave the logistics to us. Our dedicated concierge team handles everything—from booking your flights and securing your Visa to arranging private airport transfers."
  },
  {
    title: "Arrival & VIP Welcome",
    icon: "🥂",
    desc: "Upon landing, you will be greeted by a personal chauffeur and whisked away to your 5-star accommodation. Our team ensures a warm, professional welcome and travel across the city"
  },
  {
    title: "Treatment Day",
    icon: "✨",
    desc: "Experience world-class care in our state-of-the-art facility. Your procedure is performed by top-tier specialists using the latest technology to ensure precision and safety."
  },
  {
    title: "Recovery & Wellness",
    icon: "🧘",
    desc: "Recovery is redefined at Fernwehs. Relax in a curated sanctuary with personalized wellness amenities, ensuring your recuperation feels like a luxury retreat."
  },
  {
    title: "Comprehensive Aftercare",
    icon: "📱",
    desc: "Our commitment to you doesn't end when you leave. We provide extensive aftercare support, including scheduled follow-up remote calls and access to our medical team."
  }
];

const resultsData = [
  {
    title: "Anti-Ageing Facelift",
    desc: "Non-surgical restoration of volume and contour.",
    before: faceliftbefore,
    after: faceliftafter
  },
  {
    title: "Smile Design Veneers",
    desc: "Complete smile transformation in 48 hours.",
    before: smilebefore,
    after: smileafter
  },
  {
    title: "Laser Skin Resurfacing",
    desc: "Clearer, smoother texture and tone.",
    before: laserbefore,
    after: laserafter
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
            <div className="journey-content">
              <motion.div
                className="step-icon-box"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

            <div className="journey-marker">
              <span>{index + 1}</span>
            </div>

            <div className="journey-spacer"></div>
          </motion.div>
        ))}
      </section>

      {/* REAL RESULTS GALLERY */}
      <section className="results-section">
        <div className="results-header">
          <h2>Results</h2>
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