import { motion } from "framer-motion";

export default function Destination() {
  return (
    <section style={{ height: "200vh", padding: "100px" }}>
      <motion.img
        src="src/assets/images/india-map.jpg"
        style={{ width: "100%" }}
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <img src="/assets/images/hyd1.jpg" />
        <img src="/assets/images/hyd2.jpg" />
        <img src="/assets/images/hyd3.jpg" />
        <img src="/assets/images/hyd4.jpg" />
      </motion.div>
    </section>
  );
}
