import heroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Discover Your Perfect <br />
          <span>AI Skincare Routine</span>
        </h1>

        <p>
          Upload a selfie and let AI analyze your skin and recommend
          the perfect skincare routine based on your skin type.
        </p>

        <div className="hero-buttons">
          <Link to="/scanner">
            <button className="primary-btn">Scan My Face</button>
          </Link>

          <Link to="/quiz">
            <button className="secondary-btn">Take Skin Quiz</button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img
  src={heroImage}
  alt="GlowSense AI"
/>
      </div>
    </section>
  );
}