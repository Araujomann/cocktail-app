import React from "react";
import { GoHome, GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white w-screen h-12 flex justify-around mt-0 items-center p-4">
      <div className=" absolute md:right-9 flex gap-10 md:gap-5">
        <Link to="/">
          <span className="text-principalTitleColor">
            <GoHome size={28} />
          </span>
        </Link>

        <Link to="/favorites">
          <span className="text-principalTitleColor">
            <GoHeart size={28} />
          </span>
        </Link>
      </div>
    </header>
  );
};
