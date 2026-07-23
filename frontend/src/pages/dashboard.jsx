import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Welcome to GlowSense AI 👋</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>97%</h2>
            <p>AI Confidence</p>
          </div>

          <div className="stat-card">
            <h2>Combination</h2>
            <p>Skin Type</p>
          </div>

          <div className="stat-card">
            <h2>4</h2>
            <p>Recommended Products</p>
          </div>

          <div className="stat-card">
            <h2>Healthy</h2>
            <p>Skin Status</p>
          </div>

        </div>

        <div className="dashboard-section">

          <h2>Today's Skincare Routine</h2>

          <div className="routine-card">

            <p>🌞 Morning</p>

            <ul>
              <li>CeraVe Cleanser</li>
              <li>Minimalist Niacinamide</li>
              <li>Dot & Key Sunscreen</li>
            </ul>

          </div>

          <div className="routine-card">

            <p>🌙 Night</p>

            <ul>
              <li>CeraVe Cleanser</li>
              <li>Cetaphil Moisturizer</li>
            </ul>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}