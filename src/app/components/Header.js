"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Link from "next/link";
import { MdKeyboardArrowDown, MdClose, MdMenu } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop & Tablet Header */}
      <div
        className={`hidden md:flex bg-[#1e3593] mx-3 lg:mx-5 my-3 lg:my-5 items-center justify-between rounded-full p-3 px-4 lg:px-7 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={assets.logo} alt="logo" width={40} height={40} priority />
          <h1 className="text-lg lg:text-xl text-white font-bold whitespace-nowrap">
            Contataxpay
          </h1>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-3 lg:gap-6 font-normal text-sm lg:text-base text-white">
          <Link
            href="/hire_accountant"
            className="hover:text-gray-200 transition whitespace-nowrap"
          >
            Hire Accountant
          </Link>
          <Link href="/" className="hover:text-gray-200 transition">
            Features
          </Link>

          {/* Desktop Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-gray-200 transition"
              onClick={() => router.push("/services")}
            >
              Services{" "}
              <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 first:rounded-t-lg"
              >
                Tax Consultation
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
              >
                Bookkeeping
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 last:rounded-b-lg"
              >
                Payroll Services
              </Link>
            </div>
          </div>

          <Link href="/" className="hover:text-gray-200 transition">
            E invoices
          </Link>
          <Link href="/" className="hover:text-gray-200 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>

          {/* Language Selector */}
          <div className="flex items-center text-[#0077B6] gap-1 p-2 rounded-xl bg-white border-2 border-[#0077B64D] cursor-pointer hover:shadow-md transition">
            <IoIosGlobe />
            <select className="outline-none cursor-pointer text-sm bg-transparent">
              <option>ENG</option>
              <option>URDU</option>
            </select>
          </div>

          <Link href="/" className="hover:text-gray-200 transition">
            Help
          </Link>
          <Link href="/login" className="hover:text-gray-200 transition">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-[#3d70ff] py-2 px-4 lg:px-5 rounded-xl hover:bg-[#2a5aeb] transition whitespace-nowrap"
          >
            Signup
          </Link>
        </nav>
      </div>

      {/* Mobile Header */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 shadow-md z-50 ${
          (pathname === "/contact" ? "bg-[#1E3594]" : "bg-[white] ",
          pathname === "/hire_accountant"
            ? "bg-[#E8F3FF] rounded-bl-[40px] rounded-br-[40px]"
            : "bg-[white] ")
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={` text-3xl focus:outline-none active:scale-95 transition-transform ${
                pathname === "/contact" ? "text-white" : "text-[#1e3593]"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src={assets.logo}
                alt="logo"
                width={32}
                height={32}
                priority
              />
              <h1
                className={`text-base sm:text-lg text-[#1e3593] font-bold ${
                  pathname === "/contact" ? "text-white" : "text-[#1e3593]"
                }`}
              >
                Contataxpay
              </h1>
            </Link>
          </div>

          {/* Right: Language + Signup */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="py-1.5 px-2 flex items-center border-2 border-[#0077B64D] gap-1 bg-white text-[#0077B6] rounded-lg">
              <IoIosGlobe className="text-lg" />
              <select className="outline-none cursor-pointer text-xs sm:text-sm bg-transparent">
                <option>ENG</option>
                <option>URDU</option>
              </select>
            </div>

            <Link
              href="/signup"
              className="bg-[#3d70ff] py-1.5 px-3 sm:px-4 rounded-lg text-white font-medium hover:bg-[#2a5aeb] transition text-xs sm:text-sm active:scale-95"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-[#1e3593] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <Image
                src={assets.logo}
                alt="logo"
                width={32}
                height={32}
                priority
              />
              <h1 className="text-lg text-white font-bold">Contataxpay</h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl"
            >
              <MdClose />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col p-4 gap-1 overflow-y-auto h-[calc(100%-80px)]">
            <Link
              href="/hire_accountant"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Accountant
            </Link>

            <Link
              href="/"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              >
                Services
                <MdKeyboardArrowDown
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  <Link
                    href="/services"
                    className="py-2 px-4 text-white/90 hover:bg-white/10 rounded-lg transition text-sm active:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tax Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="py-2 px-4 text-white/90 hover:bg-white/10 rounded-lg transition text-sm active:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bookkeeping
                  </Link>
                  <Link
                    href="/services"
                    className="py-2 px-4 text-white/90 hover:bg-white/10 rounded-lg transition text-sm active:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Payroll Services
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              E invoices
            </Link>

            <Link
              href="/"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>

            <Link
              href="/login"
              className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition active:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed mobile header */}
      <div className="md:hidden h-[60px]" />
    </>
  );
};

export default Header;
