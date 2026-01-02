import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/journey.css";

const steps = [
  "Virtual Consultation",
  "Travel Planning",
  "Arrival & Welcome",
  "Treatment Day",
  "Luxury Recovery",
  "Aftercare"
];

export default function Journey() {
  return (
    <PageTransition>
      <section className="journey-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The FERNWEHS Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A seamless, concierge-led experience designed around you.
        </motion.p>
      </section>

      <section className="journey-timeline">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="journey-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="journey-marker">
              <span>{index + 1}</span>
            </div>

            <div className="journey-content">
              <h3>{step}</h3>
              <p>
                Personalized, discreet, and handled with the utmost care at
                every stage of your transformation.
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </PageTransition>
  );
}
