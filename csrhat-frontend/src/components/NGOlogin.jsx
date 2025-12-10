import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Credentials:", credentials);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 to-purple-400 flex items-center justify-center p-6">
      
      {/* Floating Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          NGO Login
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Access your dashboard with your registered credentials.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <input
            type="email"
            name="email"
            placeholder="Official Email"
            value={credentials.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Login →
          </button>

        </form>

        {/* Footer Links */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account? 
          <span className="text-purple-600 font-semibold cursor-pointer hover:underline"> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
