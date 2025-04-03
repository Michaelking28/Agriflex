import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import SecondPage from "./SecondPage.jsx";
import ThirdPage from "./ThirdPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
}
export default App;
