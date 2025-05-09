"use client";
import { useState } from 'react';
import Image from "next/image";
import HeaderSection from "../../components/HeaderSection"
import ScenarioSection from "../../components/ScenarioSection"
import HowItWorksSection from "../../components/HowItWorks"
import GetAQuoteSection from "../../components/QuoteForm"
import FooterSection from "../../components/Footer"
import smartNavIcon from "../../public/images/smartNavIcon.png"; // Save your drone image here
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      {/* Top Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-700 sticky top-0 bg-black z-10">
        {/* Left: Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src={smartNavIcon}
            alt="SmartNav Logo"
            width={150}
            height={60}
            className="rounded-md"
          />
        </div>

        <nav className="hidden md:flex gap-10 text-lg uppercase text-white mr-20">
        <a href="#" className="hover:text-orange-500 active:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500 active:text-orange-500">About</a>
        <a href="#" className="hover:text-orange-500 active:text-orange-500">Services</a>
      </nav>


        {/* Right: Call Button */}
        <a
          href="tel:+14793105053"
          className="text-white border border-orange-500 text-lg font-bold px-3 py-1.5 rounded hover:bg-orange-500 hover:text-white transition hidden md:block"
        >
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +1 479 310 5053
          </p>
        </a>

        {/* Mobile Call Button (Right corner) */}
        <a
          href="tel:+14793105053"
          className="md:hidden text-orange-500 text-xl"
        >
          <FaPhoneAlt />
        </a>

        {/* Mobile Side Menu */}
        {menuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-gray-900 text-white rounded-md shadow-lg z-50 p-4 flex flex-col gap-4 text-sm uppercase">
            <a href="#" className="hover:text-orange-500 active:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500 active:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500 active:text-orange-500">Services</a>
          </div>
        )}
      </header>

      <HeaderSection />
      <ScenarioSection />
      <HowItWorksSection />
      <GetAQuoteSection />
      <FooterSection />
    </main>
  );
}
