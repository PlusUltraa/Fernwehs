import { motion } from "framer-motion";
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
    <section id="journey" className="journey">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="journey-step"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.25 }}
          viewport={{ once: true }}
        >
          <span className="dot" />
          <p>{step}</p>
        </motion.div>
      ))}
    </section>
  );
}
