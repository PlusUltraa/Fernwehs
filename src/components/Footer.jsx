import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>FERNWEHS</h3>
          <p>The New You</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/journey">Journey</a>
          <a href="/csr">The Second Life (CSR)</a>
          <a href="/contact">Contact</a>
        </div>

        {/* INFO */}
        <div className="footer-info">
          <p>drchirag.fernwehs@gmail.com</p>
          <p>Hyderabad • Mumbai • Delhi • Jaipur • Udaipur • Kochi • Chandigarh • Chennai</p>
        </div>

      </div>
    </footer>
  );
}
