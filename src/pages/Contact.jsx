import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
    consent: false
  });

  const [phoneError, setPhoneError] = useState("");
  const [consentError, setConsentError] = useState("");

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

    fetch("/api/consultation.contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        consent: formData.consent
      })
    });


    console.log("Consultation Request:", formData);

    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="contact-hero">

        {/* BACKGROUND SHAPE */}
        <div className="ambient-shape shape-1" />

        {/* HEADER */}
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Your Private Concierge Awaits</h1>
          <p>Begin your transformation with a confidential consultation.</p>

          <div className="contact-actions">
            <motion.a
              href="#"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                console.log(e)
                setShowForm(true);
              }}
            >
              Book a Private Consultation
            </motion.a>

            <motion.a
              href="https://wa.me/918949466002?text=Hello%20FERNWEHS%20Concierge%2C%0A%0AI%E2%80%99m%20interested%20in%20a%20private%20aesthetic%20consultation%20and%20would%20like%20to%20know%20more%20about%20personalized%20treatment%20options."
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
              {/* GOOGLE SIGN-IN */}
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
              />

              <div className="lux-divider">or continue privately</div>

              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
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
                className="btn-primary"
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
