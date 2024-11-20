import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Redux from "./components/redux";
import Eslint from "./components/esLint";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/eslint" element={<Eslint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
