"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoImage from "../../../public/img/logoMoody.jpg";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarSolid(true);
    } else {
      setNavbarSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        navbarSolid ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image
            src={LogoImage}
            alt="Moody Shirt"
            width={40}
            height={40}
            className="w-10 h-10 mr-2 rounded-full"
          />

          <h1 className="text-xl font-bold text-gray-800">Moody Shirt</h1>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=123456789"
          target="_blank"
          className={`bg-primary py-2 px-4 rounded-full text-red-500 hover:bg-red-600 transition-colors ${
            navbarSolid ? "bg-white" : "text-red-500"
          }`}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
