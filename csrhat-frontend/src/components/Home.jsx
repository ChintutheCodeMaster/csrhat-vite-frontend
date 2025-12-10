import React from "react";
import Banner from "./supportcomponents/Banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="pt-20">
    <Banner />
    <div className="min-h-screen flex justify-center gap-4 p-4 bg-gradient-to-b from-purple-100 to-white-100 ">

      {/* Left Section: Profile Card */}
      <div className="w-1/4 sticky top-24 h-fit">
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="font-bold text-xl" onClick={()=>{navigate("signup")}}>SignUp</h2>
          <h4 className="font-bold text-xl" onClick={()=>{navigate("login")}}>Login</h4>
          <p className="text-gray-500 text-sm">Your Title / Role</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-700">
            View Profile
          </button>
        </div>
      </div>

      {/* Middle Section: Posts */}
      <div className="w-1/2 flex flex-col gap-4">
        {/* Post 1 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 1</h3>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 2</h3>
          <p className="text-gray-700 text-sm">
            Another example post. This is placeholder content.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Post Title 3</h3>
          <p className="text-gray-700 text-sm">
            Another post example. You can duplicate this block for more posts.
          </p>
          <div className="mt-2 flex justify-between text-gray-500 text-sm">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>


      </div>

      {/* Right Section: Followers & Following */}
      <div className="w-1/4 sticky top-24 h-fit">
        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <h3 className="font-bold text-lg mb-2">Followers</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Follower 1</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Follower 2</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Follower 3</span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Following</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Following 1</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Following 2</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Following 3</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    </div>
    
  );
};

export default Home;
