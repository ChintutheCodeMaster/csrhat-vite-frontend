import React from "react";
import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-10 px-4 bg-gradient-to-b from-purple-50 to-purple-200 min-h-screen">

      {/* Title + Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-800 tracking-tight">
          Empower Change Together 🌱
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Discover, connect, and volunteer for causes that matter.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* LEFT SECTION */}
        <div className="col-span-2">

          {/* Glass Search Bar */}
          <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl shadow-lg p-5 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input placeholder="Search Name" className="bg-white/70 border border-purple-200 rounded-lg p-3 text-sm focus:ring-2 ring-purple-300 outline-none"/>
              <input placeholder="Search Location" className="bg-white/70 border border-purple-200 rounded-lg p-3 text-sm focus:ring-2 ring-purple-300 outline-none"/>
              <input placeholder="Search Role" className="bg-white/70 border border-purple-200 rounded-lg p-3 text-sm focus:ring-2 ring-purple-300 outline-none"/>
            </div>

            <div className="flex flex-wrap mt-4 gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all text-white px-6 py-2 rounded-lg shadow-md text-sm font-medium">
                🔍 Search
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 transition-all text-white px-6 py-2 rounded-lg shadow-md text-sm font-medium">
                + Post Opportunity
              </button>
            </div>
          </div>

          {/* Modern Cards */}
          <div className="space-y-5">
            
            {[1, 2].map((i) => (
              <div key={i} className="group bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-xl transition-all cursor-pointer flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white font-bold flex items-center justify-center text-xs">
                    NO LOGO
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                      Opportunity Title
                    </h2>
                    <p className="text-sm text-gray-600"><span className="font-medium">Organization:</span> ABC Trust</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> Mumbai</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Volunteers Needed:</span> 40</p>
                    <p className="text-xs text-gray-500 mt-1">Posted: 30 Nov, 2025</p>
                  </div>
                </div>

                <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all">
                  View →
                </button>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-fit">

          <div className="flex gap-3 mb-6">
            <button className="bg-purple-700 hover:bg-purple-800 w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
              🤝 Become a Volunteer
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
              👁️ View All
            </button>
          </div>

          <h3 className="text-lg font-semibold text-purple-700 mb-4">Top Volunteers</h3>

          <div className="space-y-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 border-b pb-4 last:border-b-0">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-medium text-gray-800">Volunteer Name</p>
                  <p className="text-sm text-gray-500">Specialization</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Volunteer;
