import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Banner from "./components/supportcomponents/Banner";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Volunteer from "./components/Volunteer";
import { Link } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs/>} />
        <Route path="volunteer" element={<Volunteer/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
