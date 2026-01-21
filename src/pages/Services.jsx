import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import "../styles/services.css";

// Images
import antiAge from "../assets/images/service-antiage.jpg";
import glowingSkin from "../assets/images/glowing-skin.jpg";
import laser from "../assets/images/service-laser.jpg";
import dentistry from "../assets/images/service-dentistry.jpg";
import woman from "../assets/images/woman.jpg";
import hero from "../assets/images/hero.jpg";
import recovery from "../assets/images/recovery.jpg";

// Data Extracted from Brochure
const servicesData = [
  {
    id: "facial-aesthetics",
    title: "Facial Aesthetics & Contouring",
    desc: "Achieve structural harmony and youthful definition with our non-surgical remodeling techniques. We specialize in enhancing your natural features.",
    img: antiAge,
    items: [
      { name: "Botox", detail: "Smoothens wrinkles and fine lines for a youthful look." },
      { name: "Fillers", detail: "Enhance features with natural-looking volume and contour." },
      { name: "Thread Lift", detail: "Non-surgical facelift for firmer, lifted skin." },
      { name: "Non-Surgical Rhinoplasty", detail: "Shape and enhance your nose without surgery." },
      { name: "Face Sculpting", detail: "Reshape and define facial contours for a sharper look." },
      { name: "Chin & Jawline Correction", detail: "Redefine your chin and get a sharp, defined jawline." },
      { name: "Non-Surgical Face Makeover", detail: "Total facial enhancement with fillers, Botox, and contouring." }
    ]
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation & Care",
    desc: "Combat the signs of aging and fatigue. Our holistic skin therapies restore radiance, texture, and vitality to your complexion.",
    img: glowingSkin,
    items: [
      { name: "PRP (Platelet-Rich Plasma)", detail: "Natural skin rejuvenation for a radiant glow." },
      { name: "Hydra Facials", detail: "Deep cleansing, hydration, and nourishment." },
      { name: "Anti-Aging Treatment", detail: "Combat aging signs with advanced techniques." },
      { name: "Acne Treatment", detail: "Clear stubborn acne and prevent future breakouts." },
      { name: "Dark Circles & Puffiness", detail: "Say goodbye to tired eyes and restore a fresh look." },
      { name: "Brow Line Correction", detail: "Achieve perfectly arched and lifted brows." },
      { name: "Fox Eye Creation", detail: "Get the trending lifted, almond-shaped eye look." }
    ]
  },
  {
    id: "laser-dermatology",
    title: "Advanced Laser Technology",
    desc: "We utilize world-class laser systems for flawless skin resurfacing, pigmentation correction, and body contouring with minimal downtime.",
    img: laser,
    items: [
      { name: "CO2 & Fractional Lasers", detail: "Deep skin resurfacing for scars, wrinkles, and texture." },
      { name: "Erbium YAG Lasers", detail: "Precise skin rejuvenation for an even-toned complexion." },
      { name: "Q-Switched & Pico Lasers", detail: "Advanced technology for pigmentation and tattoo removal." },
      { name: "Intense Pulsed Light (IPL)", detail: "Multi-functional treatment for acne and hair removal." },
      { name: "Pulsed Dye Lasers", detail: "Treats vascular conditions like rosacea and redness." },
      { name: "Diode Lasers", detail: "Long-term hair reduction with minimal discomfort." },
      { name: "LED & UV Therapy", detail: "Boosts collagen and treats psoriasis/vitiligo." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Signature Cosmetic Dentistry",
    desc: "Your smile is your most powerful signature. We transform aesthetics with precision, delivering 'No Teeth' to 'All Teeth' solutions in record time.",
    img: dentistry,
    items: [
      { name: "Smile Design", detail: "Tailored treatments for a perfectly balanced natural look." },
      { name: "Veneers & Laminates", detail: "Custom solutions for stains, gaps, and minor misalignments." },
      { name: "Implant Dentistry", detail: "Transform 'No Teeth' to 'All Teeth' in just 48 hours." },
      { name: "Digital Dentistry", detail: "Precision care utilizing cutting-edge digital technology." }
    ]
  },
  {
    id: "general-kids-dentistry",
    title: "General & Kids Dentistry",
    desc: "A welcoming, stress-free environment for the entire family. We pride ourselves on being Udaipur's only dedicated full-time kids' dentist.",
    img: woman,
    items: [
      { name: "Exclusive Kids Dentistry", detail: "Specialized, gentle care for children." },
      { name: "Painless Dentistry", detail: "Advanced techniques for stress-free treatments." },
      { name: "General Dentistry", detail: "Comprehensive care for your total dental health." }
    ]
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Functional Health",
    desc: "Beyond aesthetics, we correct function. From aligning teeth to treating sleep apnea, we ensure your oral health supports your overall well-being.",
    img: hero,
    items: [
      { name: "Orthodontics", detail: "Straighten misaligned teeth with braces or aligners." },
      { name: "Interceptive Orthodontics", detail: "Early solutions to guide jaw growth." },
      { name: "Myo Functional Treatment", detail: "Correct jaw alignment and oral muscle habits." },
      { name: "Sleep Apnea Treatment", detail: "Non-invasive management for snoring and better rest." },
      { name: "Breathing Disorder Treatment", detail: "Address oral causes of breathing difficulties." }
    ]
  },
  {
    id: "hair-body",
    title: "Hair Restoration & Body",
    desc: "Reclaim your confidence with our specialized hair growth protocols and non-invasive body contouring solutions.",
    img: recovery,
    items: [
      { name: "Hair Transplant", detail: "Permanent, natural-looking hair restoration." },
      { name: "Hair Growth Treatment", detail: "Stimulate growth and reduce hair fall naturally (Head & Beard)." },
      { name: "Beard Shaping & Transplant", detail: "Define your style or achieve a thicker, fuller beard." },
      { name: "Cryo Sculpting", detail: "Non-invasive fat reduction using controlled cooling." }
    ]
  }
];

// Sub-component for individual text blocks
function ServiceTextBlock({ data }) {
  return (
    <div className="service-text-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header with Icon & Title */}
        <div className="section-header">
          <img src={data.img} alt={data.title} className="service-icon" />
          <div className="section-title">
            <div className="section-title-row">
              <h2>{data.title}</h2>
              {/* New Inline Book Button */}
              <a href="/contact" className="inline-book-btn">Book Consultation</a>
            </div>
            <p>{data.desc}</p>
          </div>
        </div>

        {/* The List of Services */}
        <div className="service-list-grid">
          {data.items.map((item, i) => (
            <div key={i} className="service-item">
              <h4>{item.name}</h4>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <PageTransition>
      <div className="services-page">
        <div className="services-container">
          
          <div className="services-main-content">
            {servicesData.map((service) => (
              <ServiceTextBlock key={service.id} data={service} />
            ))}
          </div>

        </div>
        <div className="services-footer">
          <h3>Begin Your Transformation</h3>
          <a href="/contact" className="bottom-cta-btn">Book Consultation</a>
        </div>
      </div>
    </PageTransition>
  );
}