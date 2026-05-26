import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
        {" "}
        {/* ================= TOP BAR ================= */}
        <div className="bg-purple-900 text-white text-sm">
          <div className="w-full px-3 sm:px-6 lg:px-10 py-2 flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Left Text */}
            <p className="text-center lg:text-left text-xs sm:text-sm">
              Welcome to India&apos;s Most Trusted Education Portal
            </p>

            {/* Right Section */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm">
              {/* Phone */}
              <div className="flex items-center gap-1 whitespace-nowrap">
                <FaPhoneAlt size={11} />
                <span>Helpline: 0123-456-7890</span>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-4 w-px bg-white/40"></div>

              {/* Email */}
              <div className="flex items-center gap-1 whitespace-nowrap">
                <FaEnvelope size={11} />
                <span className="hidden sm:block">
                  info@dosolcollegedrishti.com
                </span>

                <span className="block sm:hidden">info@gmail.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 ml-1">
                <FaFacebookF
                  size={14}
                  className="cursor-pointer hover:text-yellow-300 transition"
                />

                <FaInstagram
                  size={15}
                  className="cursor-pointer hover:text-yellow-300 transition"
                />

                <FaYoutube
                  size={15}
                  className="cursor-pointer hover:text-yellow-300 transition"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ================= NAVBAR ================= */}
        <div className="bg-white">
          <div className="w-full px-3 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 max-w-[55%] sm:max-w-fit">
              <h1
                className="
            text-base
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            font-bold
            text-purple-900
            tracking-wide
            leading-tight
            wrap-break-word
          "
              >
                DOSOLCOLLEGEDRISHTI
              </h1>
            </Link>

            {/* Nav Links */}
            <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 font-semibold text-gray-800 text-sm 2xl:text-base">
              <Link
                href="/"
                className="relative text-purple-900 after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-purple-700"
              >
                HOME
              </Link>

              <Link
                href="/courses"
                className="hover:text-purple-700 transition"
              >
                COURSES
              </Link>

              <Link
                href="/colleges"
                className="hover:text-purple-700 transition"
              >
                COLLEGES
              </Link>

              <Link
                href="/admission"
                className="hover:text-purple-700 transition"
              >
                ADMISSION
              </Link>

              <Link href="/result" className="hover:text-purple-700 transition">
                RESULT
              </Link>

              <Link href="/news" className="hover:text-purple-700 transition">
                NEWS
              </Link>

              <Link
                href="/contact"
                className="hover:text-purple-700 transition"
              >
                CONTACT
              </Link>
            </nav>

            {/* Enquiry Button */}
            <button
              className="
          bg-yellow-400
          hover:bg-yellow-500
          transition
          px-3 sm:px-4 md:px-5
          py-2 sm:py-2.5 md:py-3
          rounded-md
          font-semibold
          flex
          items-center
          gap-2
          text-black
          text-[11px]
          sm:text-sm
          md:text-base
          whitespace-nowrap
          shrink-0
        "
            >
              <span className="hidden sm:block">ENQUIRY NOW</span>

              <span className="block sm:hidden">ENQUIRY</span>

              <FaUser size={13} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
