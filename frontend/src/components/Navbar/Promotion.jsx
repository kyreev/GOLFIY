import React, { useState } from "react";
import { RiCoupon2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Promotion = () => {
  const [visible, setVisible] = useState(true);

  const closePromotion = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-emerald-400 py-2 relative">
      <div className="container mx-auto flex items-center px-4 font-semibold">
        {/* Close Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <CgClose
            className="text-xl cursor-pointer"
            onClick={closePromotion}
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex-grow flex items-center justify-center space-x-2.5">
          {/* Coupon Icon */}
          <RiCoupon2Fill className="text-xl" />

          {/* Text and Link */}
          <div className="flex items-center relative">
            <div className="text-center mr-2.5">
              30% off storewide — Limited time!
            </div>
            <a href="#" className="flex items-center relative">
              <span className="flex items-center">
                Shop Now
                <IoIosArrowRoundForward className="text-xl ml-1" />
              </span>
              <span className="absolute inset-x-0 bottom-0 border-b border-black"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
