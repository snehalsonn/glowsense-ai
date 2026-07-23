import { useState } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Scanner() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setImage(URL.createObjectURL(file));
    setResult(null);
  }

  async function analyzeSkin() {
    if (!selectedFile) {
      alert("Please upload a selfie first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data, null, 2));
      } else {
        alert("Cannot connect to backend.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <section className="scanner-page">

        <h1>AI Skin Scanner</h1>

        <p>
          Upload your selfie and let GlowSense AI analyze your skin.
        </p>

        <div className="scanner-box">

          {image ? (
            <img
              src={image}
              alt="Preview"
              className="preview-image"
            />
          ) : (
            <div className="upload-placeholder">
              📷
              <h3>No Image Selected</h3>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          <div className="scanner-buttons">

            <button
              className="primary-btn"
              onClick={analyzeSkin}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Skin"}
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                setImage(null);
                setSelectedFile(null);
                setResult(null);
              }}
            >
              Clear
            </button>

          </div>

          {loading && (
            <h3 style={{ marginTop: 20 }}>
              🔍 AI is analyzing your skin...
            </h3>
          )}

          {result && (
            <div className="result-box">

              <h2>GlowSense AI Report</h2>

              <p><b>Skin Type:</b> {result.skin_type}</p>
              <p><b>Acne:</b> {result.acne}%</p>
              <p><b>Oiliness:</b> {result.oiliness}%</p>
              <p><b>Pigmentation:</b> {result.pigmentation}%</p>
              <p><b>Dark Circles:</b> {result.dark_circles}%</p>
              <p><b>Confidence:</b> {result.confidence}</p>

              <hr />

              <h3>Recommended Products</h3>

              {result.products.map((item, index) => (

                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "15px",
                    textAlign: "left"
                  }}
                >

                  <h4>{item.brand}</h4>

                  <p><b>{item.name}</b></p>

                  <p>Category: {item.category}</p>

                  <p>Price: ₹{item.price}</p>

                  <p>⭐ {item.rating}</p>

                  <p>{item.description}</p>

                </div>

              ))}

            </div>
          )}

        </div>

      </section>

      <Footer />
    </>
  );
}