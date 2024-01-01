// components/ColorPalette.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ColorPalette.css"; // Buat file ColorPalette.module.css untuk gaya tambahan

const ColorPalette = () => {
  const colorPalette = [
    { name: "Solid Black", color: "#202020" },
    { name: "White", color: "#fff" },
    { name: "Maroon", color: "#490107" },
    { name: "Solid Red", color: "#CE2332" },
    { name: "Mint", color: "#A0ECE3" },
    { name: "Sage Green", color: "#909984" },
    { name: "Mustard", color: "#C27F02" },
    { name: "Caramel", color: "#7D501B" },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {colorPalette.map((item, index) => (
        <div className="w-full h-full px-1 flex ">
          <div
            key={index}
            className={`rounded-xl border-2 border-primary ${item.color}`}
            style={{
              backgroundColor: item.color,
              height: "6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-white text-center px-4 flex justify-center items-center rounded-xl bg-primary">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ColorPalette;
