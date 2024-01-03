// components/DiscountButton.jsx
import React from "react";

const DiscountButton = ({
  whatsappLink,
  originalPrice,
  discountedPrice,
  navbarSolid,
}) => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-center md:h-full">
        <a
          href={whatsappLink}
          target="_blank"
          className={`w-full h-full flex items-center justify-center text-center py-2 px-4 rounded-full transition-colors md:text-2xl md:mt-4 ${
            navbarSolid
              ? "bg-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary"
              : "bg-white text-primary hover:bg-red-600"
          }`}
        >
          Order Now
        </a>
      </div>
      <div className="flex relative items-center justify-center bottom-16 md:bottom-20">
        {originalPrice && discountedPrice && (
          <div className="text-primary md:text-xl line-through me-2">
            {originalPrice}
          </div>
        )}
        {discountedPrice && (
          <div className="text-white md:text-xl">{discountedPrice}</div>
        )}
      </div>
    </div>
  );
};

export default DiscountButton;
