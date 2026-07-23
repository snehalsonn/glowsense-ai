import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import products from "../data/products";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { WishlistContext } from "../context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToWishlist } = useContext(WishlistContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Product Not Found
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-left">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-right">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <h2>₹ {product.price}</h2>

          <p className="rating">
            ⭐ {product.rating} / 5
          </p>

          <div className="detail-box">
            <h3>Brand</h3>
            <p>{product.brand}</p>
          </div>

          <div className="detail-box">
            <h3>Suitable Skin Types</h3>
            <p>{product.skinTypes.join(", ")}</p>
          </div>

          <div className="detail-box">
            <h3>Main Ingredients</h3>
            <ul>
              {product.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-box">
            <h3>Best For</h3>
            <ul>
              {product.concerns.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-box">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="action-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                navigate("/checkout", {
                  state: { product },
                })
              }
            >
              🛒 Buy Now
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                addToWishlist(product);
                alert("Added to Wishlist ❤️");
                navigate("/wishlist");
              }}
            >
              ❤️ Add to Wishlist
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}