import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Banner from "./components/supportcomponents/Banner";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Volunteer from "./components/Volunteer";
import News from "./components/News";
import { Link } from "react-router-dom";
import Login from "./components/NGOlogin";
import Signup from "./components/NGOsignup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs/>} />
        <Route path="volunteer" element={<Volunteer/>} />     
        <Route path="news" element={<News/>} />     
        <Route path="signup" element={<Signup/>} />     
        <Route path="login" element={<Login/>} />     
      </Routes>
    </Router>
  );
};

export default App;
