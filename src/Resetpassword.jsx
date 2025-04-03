import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Resetpassword.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const isEmailFilled = email.trim() !== "";

    const handleReset = () => {
        navigate("/reset-confirmation");
    };

    return (
        <div className="reset-container">
            <h2 className="reset-title">Reset Password</h2>
            <p className="reset-subtext">
                We will email you a link to reset your password.
            </p>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className="reset-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
            />
            <button
                className={isEmailFilled ? "reset-btn active" : "reset-btn"}
                disabled={!isEmailFilled}
                onClick={handleReset}
            >
                Send
            </button>
        </div>
    );
};

export default ResetPassword;
