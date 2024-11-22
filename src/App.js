import { BrowserRouter , Routes, Route } from "react-router-dom";
import Redux from "./components/redux";
import Eslint from "./components/esLint";
import Hook from "./components/Hook";
import Home from "./home";
import CreateWord from "./components/CreateWord";
import { useState } from 'react';
function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/eslint" element={<Eslint />} />
          <Route path="/create" element={<CreateWord />} />
          <Route path="/days/:day" element={<Hook />} />
        </Routes>
      </BrowserRouter>
      <p>{name}</p>
      <button type="button"
      onClick={() => {
        setName(name === 'Mike' ? 'Jain' : 'Mike')
      }}
      >useState</button>
    </div>
  );
}

export default App;
