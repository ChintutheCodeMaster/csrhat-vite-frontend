import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Jobs = () => {
  return (
    <div className="w-full min-h-screen py-16 px-6 bg-gradient-to-b from-purple-100 to-purple-50">

      

      {/* Floating Search Bar */}
      <div className="flex justify-center mb-6 mt-12">
        <div className="bg-white shadow-lg rounded-full px-6 py-4 flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">

          <input
            type="text"
            placeholder="Job Role"
            className="w-full md:w-auto flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full md:w-auto flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
          />

          <input
            type="number"
            placeholder="Experience (Years)"
            className="w-full md:w-auto flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
          />

          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition font-medium shadow">
            Search
          </button>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Job Card 1 */}
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800">Frontend Developer</h3>
          <p className="text-gray-500 text-sm">Google • Bengaluru</p>
          <p className="text-gray-700 mt-3 text-sm">
            Looking for a skilled React developer with Tailwind expertise.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Apply Now
          </button>
        </div>

        {/* Job Card 2 */}
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800">Backend Engineer</h3>
          <p className="text-gray-500 text-sm">Microsoft • Hyderabad</p>
          <p className="text-gray-700 mt-3 text-sm">
            Required strong Node.js + Express skills with SQL experience.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Apply Now
          </button>
        </div>

        {/* Job Card 3 */}
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800">UI/UX Designer</h3>
          <p className="text-gray-500 text-sm">Meta • Remote</p>
          <p className="text-gray-700 mt-3 text-sm">
            Designing clean and sleek interfaces. Figma knowledge required.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Apply Now
          </button>
        </div>

      </div>

    </div>
  );
};

export default Jobs;
