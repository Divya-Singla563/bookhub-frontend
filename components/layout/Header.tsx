"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGlobe,
  FaInstagram,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";
import { containerClass } from "@/lib/variables";

const Header = () => {
  const [cartCount] = useState(2);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0C0C0C] text-white text-sm">
        <div className={containerClass}>
          <div className="flex items-center justify-between py-3">
            {/* Left Section - Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:text-[#d2d1cc] transition">
                <FaClock className="w-4 h-4" />
                <span>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#d2d1cc] transition cursor-pointer">
                <FaPhone className="w-4 h-4" />
                <span>1-800-458-56987</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#d2d1cc] transition">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>47 Bakery Street, London, UK</span>
              </div>
            </div>

            {/* Right Section - Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hover:text-[#d2d1cc] transition"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#d2d1cc] transition"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#d2d1cc] transition"
                aria-label="Website"
              >
                <FaGlobe className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="hover:text-[#d2d1cc] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className={containerClass}>
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center">
                <span className="text-red-500 text-2xl font-bold">📚</span>
                <div className="ml-2">
                  <h1 className="text-2xl font-bold text-gray-900 leading-none">
                    <span className="text-red-500">BOOK</span>
                    <span className="italic font-serif text-red-400">
                      lovers
                    </span>
                  </h1>
                  <p className="text-[10px] text-gray-500 tracking-wide">
                    Your Favorite Bookshelf!
                  </p>
                </div>
              </div>
            </Link>
            {/* <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Blacks</span>
            </Link> */}

            <div className="flex items-center justify-between w-1/2">
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-sm text-gray-600 font-medium hover:text-red-600 transition"
                >
                  HOME
                </Link>
                <Link
                  href="/pages"
                  className="text-sm text-gray-600 font-medium hover:text-red-600 transition"
                >
                  PAGES
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 font-medium hover:text-red-600 transition"
                >
                  BLOG
                </Link>
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 font-medium hover:text-red-600 transition"
                >
                  SHOP
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 font-medium hover:text-red-600 transition"
                >
                  CONTACT US
                </Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center gap-6">
                {/* Shopping Cart */}
                <Link
                  href="/cart"
                  className="relative hover:text-red-600 transition"
                  aria-label="Shopping Cart"
                >
                  <FaShoppingBag className="w-6 h-6 text-gray-900" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Search */}
                <button
                  className="hover:text-red-600 transition"
                  aria-label="Search"
                >
                  <FaSearch className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
