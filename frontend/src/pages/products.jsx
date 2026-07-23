import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar />

      <section className="products-page">

        <h1>Discover Premium Skincare</h1>

        <p>
          AI-selected skincare from the world's best brands.
        </p>

        <div className="filters">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Cleanser</option>
            <option>Serum</option>
            <option>Moisturizer</option>
            <option>Sunscreen</option>
            <option>Toner</option>
            <option>Mask</option>
            <option>Eye Care</option>
            <option>Essence</option>
            <option>Ampoule</option>
            <option>Acne Treatment</option>
            <option>Night Care</option>
          </select>

        </div>

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="brand">{product.brand}</p>

              <p className="rating">
                ⭐ {product.rating}
              </p>

              <h2>₹{product.price}</h2>

              <button
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}