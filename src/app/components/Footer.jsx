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
        <div className="flex-col w-28 items-center justify-center">
          <div className="flex justify-end items-end mb-4 px-2">
            <Image
              cloudName="ddrecezrk"
              publicId={logoImageUrl} // Gunakan variabel state untuk URL gambar
              alt="Moody Shirt"
              width={30}
              height={10}
              className="w-10 h-10 mr-2"
            />
          </div>

          <h1 className=" text-3xl font-bold text-white px-4 tracking-wide text-end md:flex">
            Moody Shirt
          </h1>
        </div>
        <div className="w-full h-44 flex-col gap-8 items-center pt-4">
          {/* Informasi Instagram */}
          <div className="text-white">
            <p className="tracking-wide">Instagram</p>
            <p>@moody.shirt</p>
          </div>

          {/* Informasi Email */}
          <div className="text-white">
            <p className="tracking-wide">Email</p>
            <p>moodys.ventures@gmail.com</p>
          </div>

          {/* Informasi Nomor */}
          <div className="text-white">
            <p className="tracking-wide">Nomor</p>
            <p>+123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
