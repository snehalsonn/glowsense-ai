import { Link } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);

  function handleSignup(e) {
    e.preventDefault();

    alert("Account Created Successfully!");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Create Account</h1>

        <p>Join GlowSense AI</p>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <button className="login-btn">
            Create Account
          </button>

        </form>

        <button className="google-btn">
          <FaGoogle />
          Sign up with Google
        </button>

        <p className="signup-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}