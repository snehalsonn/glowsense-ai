import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          No product selected.
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="checkout-page">

        <h1>Secure Checkout</h1>

        <div className="checkout-card">

          <img src={product.image} alt={product.name} />

          <div>

            <h2>{product.name}</h2>

            <p><b>Brand:</b> {product.brand}</p>

            <p><b>Price:</b> ₹{product.price}</p>

            
            <div className="summary-card">

  <h3>📦 Order Summary</h3>

  <div className="summary-row">
    <span>Subtotal</span>
    <span>₹{product.price}</span>
  </div>

  <div className="summary-row">
    <span>Delivery</span>
    <span style={{color:"green"}}>FREE</span>
  </div>

  <div className="summary-row">
    <span>Discount</span>
    <span style={{color:"#ff4f87"}}>-₹100</span>
  </div>

  <hr />

  <div className="summary-row total">
    <span>Total</span>
    <span>₹{product.price-100}</span>
  </div>

</div>

<div className="coupon-box">

<input
placeholder="Coupon Code"
/>

<button>
Apply
</button>

</div>

<div className="delivery-box">
🚚 Free Delivery • Arrives in 2-4 Days
</div>

<div className="secure-box">
🔒 100% Secure Checkout
</div>

            <div className="checkout-form">

              <div className="input-group">
                <label>👤 Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="input-group">
                <label>📱 Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="input-group">
                <label>📧 Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="input-group">
                <label>🏠 Delivery Address</label>
                <textarea
                  rows="4"
                  placeholder="House No, Street, City, State, Pincode"
                ></textarea>
              </div>

              <div className="input-group">
                <label>💳 Payment Method</label>

                <select>
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                </select>
              </div>

            </div>

            <button
              className="place-order-btn"
              onClick={() => {
                alert("🎉 Order Placed Successfully!");
                navigate("/");
              }}
            >
              Place Order • ₹{product.price}
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}