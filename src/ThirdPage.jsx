import grocerybasket from "./assets/third.jpg";
import './ThirdPage.css' ;
function ThirdPage() {
  return (
    <div className="onboarding-container">
      <button className="skip-btn">Skip</button>
      <div className="image-container">
        <img
          src={grocerybasket}
          alt="grocery basket"
          className="grocery-image"
        />
      </div>
      <h2 className="title">Spend less for More</h2>
      <p className="description"> Get real-time market trends and pricing</p>
      <div className="pagination">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
      <button className="next-btn">Next</button>
    </div>
  );
}

export default ThirdPage;
