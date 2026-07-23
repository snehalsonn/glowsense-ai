import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Wishlist() {

  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="products-page">

        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (

          <h2 style={{ textAlign: "center", marginTop: "60px" }}>
            Your wishlist is empty.
          </h2>

        ) : (

          <div className="product-grid">

            {wishlist.map((product) => (

              <div className="product-card" key={product.id}>

                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>

                <p>{product.brand}</p>

                <h2>₹{product.price}</h2>

                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View
                </button>

                <button
                  style={{ marginTop: "10px" }}
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}