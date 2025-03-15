import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/jobs" className="hover:underline">Jobs</NavLink>
        </div>
        <div className="flex justify-center space-x-4 text-xl mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-300" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Jobs Market. All rights reserved by Heshan Rajitha.</p>
      </div>
    </footer>
  );
};

export default Footer;
