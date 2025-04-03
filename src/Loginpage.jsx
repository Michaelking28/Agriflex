import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
const Loginpage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isFormFilled = email.trim() !== "" && password.trim() !== "";

    return (
        <div className='login-container'>
            <button className='back-button' onClick={() => navigate(-1)}>&larr;</button> 
            <h2 className='login-title'>Log into account</h2>
            <p className='login-subtitle'>Welcome back!</p>

            <div className='input-group'>
                <input type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='input-field' />
            </div>

            {/* Password field with simple eye icon */}
            <div className='input-group password-group'>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input-field'
                />
                <button className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "👁️‍🗨️" : "👁️"}  
                </button>
            </div>

            <a href="#" className='forgot-password' onClick={() => navigate("/reset-password")}> Forgot Password?  </a>
            <button className={isFormFilled ? "login-btn active" : 'login-button'} disabled={!isFormFilled}
            >Log in</button>
        </div>
    );
}

export default Loginpage;
