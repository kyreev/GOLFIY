import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const MenuLinks = [
  { id: 1, name: "Golf Balls", link: "/#" },
  { id: 2, name: "Golf Clubs", link: "/#" },
  { id: 3, name: "Golf Bags", link: "/#" },
  { id: 4, name: "Clothing", link: "/#" },
  { id: 5, name: "Shoes", link: "/#" },
  { id: 6, name: "Accessories", link: "/#" },
];

const MenuLink = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible((prevState) => !prevState);
  };

  const closeSearchBar = () => {
    setSearchVisible(false);
  };

  return (
    <div className="duration-200 relative z-40">
      <div className="py-2">
        <div className="container mx-auto flex items-center px-10">
          {/* Logo */}
          {!searchVisible && (
            <div className="flex-shrink-0 pb-1">
              <a href="#" className="font-medium uppercase text-2xl">
                GOLFIY.
              </a>
            </div>
          )}

          {/* Centered Menu Items */}
          {!searchVisible && (
            <div className="flex-grow flex justify-center">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block px-4">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navbar Right Section */}
          <div
            className={`flex-shrink-0 flex items-center gap-4 ${
              searchVisible ? "w-full" : "w-auto"
            }`}
          >
            {/* Search Bar */}
            <div
              className={`relative flex-grow py-1 ${
                searchVisible ? "flex justify-center" : "inline-flex"
              }`}
            >
              {searchVisible && (
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full transition-all duration-300 border border-gray-500 px-4 py-1 focus:outline-none"
                />
              )}
              <IoMdSearch
                onClick={toggleSearchBar}
                className={`text-xl cursor-pointer hover:text-red-950 absolute top-1/2 -translate-y-1/2 right-3 duration-200 ${
                  searchVisible ? "hidden" : "block"
                }`}
              />
              {searchVisible && (
                <CgClose
                  onClick={closeSearchBar}
                  className="text-xl cursor-pointer hover:text-red-950 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                />
              )}
            </div>

            {/* Account Section */}
            {!searchVisible && (
              <div className="flex items-center">
                <VscAccount className="text-xl hover:text-red-950 duration-200" />
              </div>
            )}

            {/* Cart Button */}
            {!searchVisible && (
              <button className="relative p-3">
                <FaCartShopping className="text-xl" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  4
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLink;
