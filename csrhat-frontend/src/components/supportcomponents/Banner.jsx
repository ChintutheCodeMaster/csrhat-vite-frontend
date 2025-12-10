import Navbar from "../Navbar";

const Banner = () => {
  return (
    <div className="w-full bg-purple-100 pt-6 px-8 pb-16 flex flex-col gap-10">

      

      {/* Banner Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Welcome to Our Website
          </h1>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
