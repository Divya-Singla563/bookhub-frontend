"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaGlobe,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: number;
}

const Footer = () => {
  const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  const bestSellers: Book[] = [
    {
      id: 1,
      title: "The Kingdom",
      image: "/images/book1.jpg",
      price: 56.0,
    },
    {
      id: 2,
      title: "Sea Smoke",
      image: "/images/book2.jpg",
      price: 49.0,
      rating: 5,
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className={containerClass}>
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left Section - About & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold">Blacks</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Ignissimos ducimus qui blanditiis prae sentium voluptatum
              deleniti.
            </p>

            {/* Email Subscription */}
            <div className="space-y-3">
              <div className="flex items-center bg-gray-900 rounded-lg px-4 py-3 border border-gray-700">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent flex-1 text-sm placeholder-gray-500 focus:outline-none"
                />
                <button className="text-gray-400 hover:text-white transition">
                  <FaArrowRight />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-white hover:text-red-600 transition"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              {["Home", "Membership", "About Us", "Features", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white hover:text-red-600 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Socials</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
                aria-label="Website"
              >
                <FaGlobe className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright */}
      <div className={containerClass}>
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>ThemeRex © 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
