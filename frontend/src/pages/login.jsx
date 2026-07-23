import { Link } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    alert("Login Successful! (Backend will be connected later)");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>GlowSense AI ✨</h1>

        <p>Welcome Back</p>

        <form onSubmit={handleLogin}>

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
            Login
          </button>

        </form>

        <button className="google-btn">
          <FaGoogle />
          Continue with Google
        </button>

        <p className="signup-text">

          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}