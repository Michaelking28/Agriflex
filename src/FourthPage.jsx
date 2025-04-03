import React from "react";
import { useNavigate } from "react-router-dom";
import farmtoolsimage from "./assets/farm-tools-removebg-preview.png";
import "./fourthPage.css";

const FourthPage = () => {
    const navigate = useNavigate();

    return (
        <div className="fourth-page">
            <img src={farmtoolsimage} alt="farm tools" className="farm-tools-image"/>
            <h1>Hir or Rent Farm Tools at your convenience</h1>
            <p> Connecting farmers to vendors and companies that have farming equipment for hire and for sale</p>

            <div className="pagination">
                <span></span>
                <span></span>
                <span className="active"></span>
            </div>
            <button className="sign-up-btn" onClick={() => navigate("/signup")}>Sign up</button>
            <button className="login-btn" onClick={() => navigate("/login")}>Log in</button>
        </div>

    );
};
export default FourthPage;