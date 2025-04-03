import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import SecondPage from "./SecondPage.jsx";
import ThirdPage from "./ThirdPage.jsx";
import FourthPage from "./FourthPage.jsx";
import SignupPage from "./SignupPage.jsx";
import Loginpage from "./Loginpage.jsx";
import Resetpassword from "./Resetpassword.jsx";
import ResetConfirmation from "./ResetConfirmation.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
      </Routes>
    </Router>
  );
}
export default App;
