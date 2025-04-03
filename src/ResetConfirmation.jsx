import { useNavigate } from "react-router-dom";
import "./ResetConfirmation.css";

const ResetConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="reset-confirm-container">
            <h2 className="reset-confirm-title">Reset Password</h2>
            <img 
                src="src/assets/Capture-removebg-preview.png"  
                alt="Email Sent"
                className="reset-confirm-icon"
            />
            <p className="reset-confirm-text">
                We have sent an email to example@gmail.com with instructions to reset your password.
            </p>
            <button className="reset-confirm-btn" onClick={() => navigate("/login")}>
                Back to login
            </button>
        </div>
    );
};

export default ResetConfirmation;
