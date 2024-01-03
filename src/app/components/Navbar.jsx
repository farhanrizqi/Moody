"use client";
import react from "react";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [logoImageUrl, setLogoImageUrl] = useState(
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/gknjmxfdn1mm9osnmrr7.png"
  );
  const phoneNumber = "+6289505895330"; // Ganti dengan nomor telepon yang benar
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarSolid(true);
      setLogoImageUrl(
        "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/ylnuyavsymotn5lcdzih.png"
      );
    } else {
      setNavbarSolid(false);
      setLogoImageUrl(
        "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/gknjmxfdn1mm9osnmrr7.png"
      );
    }
  };

  const cloudinaryCore = new Cloudinary({ cloud_name: "ddrecezrk" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed -top-2  w-full transition-all duration-300 z-50 lg:px-20 ${
        navbarSolid ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="rounded-full">
            <Image
              cloudName="ddrecezrk"
              publicId={logoImageUrl} // Gunakan variabel state untuk URL gambar
              alt="Moody Shirt"
              width={30}
              height={10}
              className="w-10 h-10 mr-2"
            />
          </div>

          <h1 className="hidden text-xl font-bold text-white ps-4 md:flex">
            Moody Shirt
          </h1>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          className={`py-2 px-4 rounded-full  transition-colors ${
            navbarSolid
              ? "bg-white text-red-500 hover:bg-red-600 hover:text-white hover:border-2 hover:border-white"
              : "bg-primary text-white hover:bg-red-600"
          }`}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
