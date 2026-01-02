import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        
        {/* BRAND */}
        <div className="footer-brand">
          <h2>FERNWEHS</h2>
          <p>The New You</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/journey">Journey</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <p>care@fernwehs.com</p>
          <p>Hyderabad • Mumbai • Delhi</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FERNWEHS. All rights reserved.
      </div>
    </footer>
  );
}
  