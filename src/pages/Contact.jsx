import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";
import "../styles/contact.css";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    consent: false
  });

  const [phoneError, setPhoneError] = useState("");
  const [consentError, setConsentError] = useState("");

  // Auto-fetch City using IP Geolocation
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.city) {
          setFormData((prev) => ({ ...prev, city: data.city }));
        }
      })
      .catch((err) => console.error("City auto-fetch failed:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid contact number.");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!formData.consent) {
      setConsentError("Consent is required to proceed.");
      hasError = true;
    } else {
      setConsentError("");
    }

    if (hasError) return;

    // Simulate API call
    fetch("/api/consultation.contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    console.log("Consultation Request:", formData);
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="contact-hero">
        <h1 className="sr-only">Contact Fernwehs for Luxury Aesthetic Consultation</h1>

        {/* BACKGROUND SHAPE */}
        <div className="ambient-shape shape-1" />

        {/* HEADER */}
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Your Private Concierge Awaits</h2>
          <p>Begin your transformation with a confidential consultation.</p>

          <div className="contact-actions">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                setShowForm(true);
              }}
            >
              Book a Private Consultation
            </motion.button>

            <motion.a
              href="https://wa.me/918949466002?text=Hello%20FERNWEHS%20Concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              WhatsApp Concierge
            </motion.a>
          </div>
        </motion.div>

        {/* FORM / SUCCESS SWITCH */}
        <AnimatePresence mode="wait">
          {showForm && !submitted && (
            <motion.form
              key="form"
              className="consultation-drop-form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onSubmit={handleSubmit}
            >
              <h3>Request Consultation</h3>
              
              {/* GOOGLE SIGN-IN */}
              <div className="google-login-wrapper">
                  <GoogleLogin
                    onSuccess={(res) => {
                      if (!res?.credential) return;
                      try {
                        const user = jwtDecode(res.credential);
                        setFormData((prev) => ({
                          ...prev,
                          name: user.name || "",
                          email: user.email || ""
                        }));
                      } catch {}
                    }}
                    onError={() => console.log("Google Login Failed")}
                    useOneTap={false}
                    shape="pill"
                  />
              </div>

              <div className="lux-divider">or continue privately</div>

              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="input-field"
              />

              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="input-field"
              />

              {/* PHONE INPUT */}
              <div className="phone-wrapper">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={(value) => {
                    setFormData({ ...formData, phone: value || "" });
                    setPhoneError("");
                  }}
                  className="lux-phone-input"
                />
                {phoneError && (
                  <span className="error-text">{phoneError}</span>
                )}
              </div>

              {/* CITY INPUT (Auto-fetched) */}
              <input
                type="text"
                placeholder="City *"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
                className="input-field"
              />

              {/* MESSAGE TEXTAREA */}
              <div className="message-wrapper">
                <textarea
                    placeholder="How can we help you? (Max 1000 chars)"
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="textarea-field"
                />
                <span className="char-count">{formData.message.length}/1000</span>
              </div>

              {/* CONSENT */}
              <label className="consent">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      consent: e.target.checked
                    });
                    setConsentError("");
                  }}
                />
                I consent to be contacted by FERNWEHS via WhatsApp, email,
                or call regarding my private consultation.
              </label>

              {consentError && (
                <span className="error-text">{consentError}</span>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={!formData.consent}
              >
                Submit Request
              </button>

              <p className="trust-copy">
                Your information is confidential and handled with
                medical-grade privacy standards.
              </p>
            </motion.form>
          )}

          {/* SUCCESS STATE */}
          {showForm && submitted && (
            <motion.div
              key="success"
              className="consultation-drop-form success-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Thank You</h2>
              <p>
                Your private consultation request has been received.
                Our concierge team will reach out to you shortly.
              </p>

              <div className="success-icon">✓</div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}