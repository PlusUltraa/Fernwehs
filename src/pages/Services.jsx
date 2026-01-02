import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";
import "../styles/services.css";

// IMPORT IMAGES (IMPORTANT)
import antiAge from "../assets/images/service-antiage.jpg";
import dentistry from "../assets/images/service-dentistry.jpg";
import laser from "../assets/images/service-laser.jpg";

const services = [
  {
    title: "Anti-Ageing",
    desc: "Subtle, elegant rejuvenation treatments designed for natural luxury.",
    img: antiAge
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Signature smiles crafted with precision, balance, and artistry.",
    img: dentistry
  },
  {
    title: "Laser & Skin",
    desc: "Advanced dermatology solutions for flawless, radiant skin.",
    img: laser
  }
];

export default function Services() {
  const ref = useRef(null);

  // Track scroll progress across the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Map scroll to active index
  const activeIndex = useTransform(
    scrollYProgress,
    services.map((_, i) => i / services.length),
    services.map((_, i) => i)
  );

  return (
    <PageTransition>
      <section ref={ref} className="services-scroll">
        
        {/* STICKY IMAGE */}
        <div className="services-image">
          {services.map((service, i) => (
            <motion.img
              key={i}
              src={service.img}
              alt={service.title}
              className="service-image"
              style={{
                opacity: useTransform(
                  activeIndex,
                  (v) => (Math.round(v) === i ? 1 : 0)
                )
              }}
            />
          ))}
        </div>

        {/* SCROLL TEXT */}
        <div className="services-text">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-text-block"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.6 }}
            >
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>
    </PageTransition>
  );
}
