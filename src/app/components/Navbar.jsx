"use client";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [logoImageUrl, setLogoImageUrl] = useState(
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/gknjmxfdn1mm9osnmrr7.png"
  );

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
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

          <h1 className="text-xl font-bold text-white ps-4">Moody Shirt</h1>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=123456789"
          target="_blank"
          className={`py-2 px-4 rounded-full  transition-colors ${
            navbarSolid
              ? "bg-white text-red-500 hover:bg-red-600"
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
