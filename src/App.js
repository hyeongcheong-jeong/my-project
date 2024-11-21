import { BrowserRouter , Routes, Route } from "react-router-dom";
import Redux from "./components/redux";
import Eslint from "./components/esLint";
import Hook from "./components/Hook";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/eslint" element={<Eslint />} />
          <Route path="/days/:day" element={<Hook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
