import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";
import "../styles/services.css";

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
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const activeIndex = useTransform(
    scrollYProgress,
    services.map((_, i) => i / services.length),
    services.map((_, i) => i)
  );

  return (
    <PageTransition>
      <section className="services-wrapper">

        {/* FIXED IMAGE COLUMN (NOT PART OF SCROLL TARGET) */}
        <div className="services-image-frame">
          {services.map((s, i) => (
            <motion.img
              key={i}
              src={s.img}
              alt={s.title}
              className="service-image"
              style={{
                opacity: useTransform(activeIndex, v =>
                  Math.round(v) === i ? 1 : 0
                )
              }}
            />
          ))}
        </div>

        {/* SCROLL TARGET */}
        <div ref={scrollRef} className="services-scroll">
          {services.map((s, i) => (
            <section key={i} className="service-text-block">
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </section>
          ))}

          {/* CTA */}
          <div className="services-cta">
            <h3>Begin Your Transformation</h3>
            <p>
              Speak with our private concierge to curate your personalized
              aesthetic journey.
            </p>
            <a href="/contact" className="services-cta-btn">
              Book a Private Consultation
            </a>
          </div>
        </div>

      </section>
    </PageTransition>
  );
}
