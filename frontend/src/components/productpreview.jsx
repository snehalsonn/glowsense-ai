import cerave from "../assets/product/cerave-cleanser.png";
import minimalist from "../assets/product/minimalist-niacinamide.png";
import cetaphil from "../assets/product/cetaphil-moisturizer.png";

export default function ProductPreview() {
  return (
    <section className="products-preview">

      <h2>Trending Products</h2>

      <div className="product-grid">

        <div className="product-card">
          <img src={cerave} alt="CeraVe Cleanser" />

          <h3>CeraVe Hydrating Cleanser</h3>

          <p>★★★★★</p>

          <h4>₹1,299</h4>

          <button>View Product</button>
        </div>

        <div className="product-card">
          <img src={minimalist} alt="Minimalist Niacinamide" />

          <h3>Minimalist Niacinamide</h3>

          <p>★★★★★</p>

          <h4>₹599</h4>

          <button>View Product</button>
        </div>

        <div className="product-card">
          <img src={cetaphil} alt="Cetaphil Moisturizer" />

          <h3>Cetaphil Moisturizer</h3>

          <p>★★★★★</p>

          <h4>₹649</h4>

          <button>View Product</button>
        </div>

      </div>

    </section>
  );
}