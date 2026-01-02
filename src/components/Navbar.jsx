import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>FERNWEHS</Link>

      <div style={styles.links}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/journey">Journey</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    padding: "18px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "14px",
    border: "1px solid #EAEAEA",
    zIndex: 1000
  },
  logo: {
    fontFamily: "Playfair Display",
    fontSize: "22px",
    letterSpacing: "2px"
  },
  links: {
    display: "flex",
    gap: "32px",
    fontSize: "14px"
  }
};
