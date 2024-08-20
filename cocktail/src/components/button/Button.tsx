import React from "react";

interface Props {
    name: string;
    action?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    icon?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
    name,
    action,
    icon,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <button
            value={name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={action}
            className=" hover:bg-hoverBg h-20 md:h-14 text-xl md:text-lg flex items-center justify-center rounded-full 
"
        >
            {name}
            {icon}
        </button>
    );
};
