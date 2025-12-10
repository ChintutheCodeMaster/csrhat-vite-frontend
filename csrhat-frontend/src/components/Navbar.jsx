import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();


  return (
    <nav className="w-full flex justify-between items-center rounded-full py-3 my-2 px-6 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="font-bold text-lg text-gray-800">CSRHAT</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-purple-600" onClick={()=>{navigate("/")}}>Home</li>
        <li className="cursor-pointer hover:text-purple-600" onClick={()=>{navigate("/jobs")}}>Jobs</li>
        <li className="cursor-pointer hover:text-purple-600" onClick={()=>{navigate("/volunteer")}}>Volunteer</li>
        <li className="cursor-pointer hover:text-purple-600">Awards</li>
        <li className="cursor-pointer hover:text-purple-600">News</li>
        <li className="cursor-pointer text-blue-600 hover:text-blue-600">Socio Partners</li>
      </ul>

      {/* Button */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-medium">
        View Profile
      </button>

    </nav>
  );
};

export default Navbar;
