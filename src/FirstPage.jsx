import logo from "./assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";
function FirstPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/second");
  };
  return (
    <div className="first-page-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-name">Agriflex</h1>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1f401d"
          fill0pacity="1"
          d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,250.7C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <button onClick={handleGetStarted} className="get-started-button">
        Get Started
      </button>
    </div>
  );
}
export default FirstPage;
