import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./screen/Checkout";
import HomePage from "./screen/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
