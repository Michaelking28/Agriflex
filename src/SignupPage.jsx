import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        <span className="dot-active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Title and Description */}
      <h2>Create your account</h2>
      <p>Enter the following information below to create your account</p>

      {/* Signup Form */}
      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="User name" required />
        <input type="email" placeholder="Email address" required />

        {/* Password Field */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
           {showPassword ? "👁" : "👁"} 
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showPassword ? "👁" : "👁"} 
          </button>
        </div>

        {/* Terms and Agreement */}
        <label className="terms">
          <input type="checkbox" required />
          By using Agriflex, you agree to the
          <span className="terms-link" onClick={() => navigate("/terms")}>
            Terms
          </span>{" "}
          and{" "}
          <span className="terms-link" onClick={() => navigate("/privacy")}>
            Privacy Policy
          </span>
        </label>

        {/* Create Account Button */}
        <button type="submit" className="create-account-button">
          Create account
        </button>
      </form>

      {/* Social Sign-Up */}
      <p className="or-text">Or sign up using</p>
      <div className="social-icons">
        <button className="google-btn">G</button>
        <button className="apple-btn">A</button>
      </div>

      {/* Log In Link */}
      <p className="login-text">
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/login")}>
          Log In
        </span>
      </p>
    </div>
  );
}

export default SignupPage;