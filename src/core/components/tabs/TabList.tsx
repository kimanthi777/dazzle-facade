import React, { useState, ReactNode } from "react";

type TabProps = {
    label: string;
    children: ReactNode;
};


type TabListProps = {
    children: ReactNode;
};

const TabList = ({ children }: TabListProps) => {
    return (
        <ul className="flex border-b border-gray-200">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement<TabProps>(child)) {
                    return React.cloneElement(child, { index } as unknown as any);
                }
                return child;
            })}
        </ul>
    );
};

export default TabList