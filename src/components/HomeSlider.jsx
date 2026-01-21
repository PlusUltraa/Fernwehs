import "../styles/home-slider.css";

// IMAGES / VIDEO
import confidentWoman from "../assets/images/woman.jpg";
import luxuryRecovery from "../assets/images/recovery.jpg";
import glowingSkin from "../assets/images/glowing-skin.jpg";
import seamlessTravel from "../assets/images/seamless-travel.jpg";
import luxuryVideo from "../assets/videos/experience.mp4";

export default function HomeSlider() {
  return (
    <section className="slider-band">
      <div className="slider-inner">
        <div className="slider-track">

          <div className="slider-item">
            <img src={confidentWoman} alt="Refined Confidence" />
          </div>

          <div className="slider-item">
            <img src={luxuryRecovery} alt="Luxury Recovery" />
          </div>

          <div className="slider-item video">
            <video
              src={luxuryVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="slider-item">
            <img src={glowingSkin} alt="Precision Aesthetics" />
          </div>

          <div className="slider-item">
            <img src={seamlessTravel} alt="Seamless Medical Travel" />
          </div>

        </div>
      </div>
    </section>
  );
}
