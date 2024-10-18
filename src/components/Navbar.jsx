import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="text-2xl font-bold">BlockHire</div>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        />
      </div>
      <div className="flex space-x-8 ml-10"> {/* Add margin-left here */}
        <a href="#contact-us" className="text-lg text-black">
          Contact Us
        </a>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform transition-transform duration-300 hover:scale-110">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;