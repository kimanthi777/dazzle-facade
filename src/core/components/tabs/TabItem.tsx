import React, { useState, ReactNode } from "react";

type TabItemProps = {
    index: number;
    onClick: (index: number) => void;
    isSelected: boolean;
    children: ReactNode;
};

export const TabItem = ({ index, onClick, isSelected, children }: TabItemProps) => {
    const handleClick = () => {
        onClick(index);
    };

    return (
        <li
            className={`-mb-px mr-1 flex-grow ${isSelected ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
                }`}
        >
            <a
                className={`inline-block py-2 px-4 font-semibold ${isSelected ? "text-blue-500" : "text-gray-500"
                    } hover:text-blue-800 hover:border-blue-800`}
                onClick={handleClick}
            >
                {children}
            </a>
        </li>
    );
};
