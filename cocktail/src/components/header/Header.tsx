import React from "react";
import { GoHome, GoHeart } from "react-icons/go";

export const Header: React.FC = () => {
    return (
        <header className="relative bg-white w-screen h-16 flex justify-around mt-0 items-center p-4">
            <div className=" absolute md:right-9 flex gap-10 md:gap-5">
                <a href="/">
                    <span className="text-principalTitleColor">
                        <GoHome size={28} />
                    </span>
                </a>

                <a href="/favorites">
                    <span className="text-principalTitleColor">
                        <GoHeart size={28} />
                    </span>
                </a>
            </div>
        </header>
    );
};
