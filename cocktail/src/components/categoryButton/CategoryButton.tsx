import React from "react";

interface Props {
    name: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;

}

export const CategoryButton:React.FC<Props> = ({name, onClick, children}) => {
    return (
        <button
            name={name}
            onClick={onClick}
            className="text-white flex items-center justify-center font-sans hover:cursor-pointer text-md w-full h-12 rounded-lg
            shadow-xl hover:focus:outline-none bg-jet/90"
        >
           {children}
        </button>
    );
};
