import { useState } from "react";
const BASE_URL=import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    registrationId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/ngo/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        console.log(data);
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      alert("Server Error");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-600 to-purple-400 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          NGO Registration
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Please fill in the details below to create your NGO profile.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            name="name"
            placeholder="NGO Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Official Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="text"
            name="registrationId"
            placeholder="Govt. Reg. Number"
            value={formData.registrationId}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Office Address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:border-purple-500 outline-none md:col-span-2"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg md:col-span-2 shadow-lg"
          >
            Sign Up →
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
