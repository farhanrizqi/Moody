"use client";
import react from "react";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

const Footer = () => {
  const [logoImageUrl, setLogoImageUrl] = useState(
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/gknjmxfdn1mm9osnmrr7.png"
  );

  return (
    <footer className="w-full h-56 bg-primary">
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
      </div>
    </footer>
  );
};

export default Footer;
