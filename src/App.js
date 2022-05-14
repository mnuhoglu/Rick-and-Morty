import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./view/locations/index";
import Residents from "./view/residents/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Locations />}/>
        <Route path="/residents" element={<Residents />}/>
      </Routes>
    </Router>
  );
}

export default App;
