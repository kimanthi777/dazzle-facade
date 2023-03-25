import React, { useState, ReactNode } from "react";
import { TabItem } from './TabItem'

type TabProps = {
    label: string;
    children: ReactNode;
};

type TabsProps = {
    children: ReactNode;
};


const Tab = ({ children }: TabProps) => {
    return <div>{children}</div>;
};

const Tabs = ({ children }: TabsProps) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedTabIndex(index);
    };

    const tabs = React.Children.map(children, (child, index) => {
        if (React.isValidElement<TabProps>(child)) {
            return (
                <TabItem
                    index={index}
                    onClick={handleTabClick}
                    isSelected={selectedTabIndex === index}
                >
                    {child.props.label}
                </TabItem>
            );
        }
        return child;
    });

    const tabContent = React.Children.toArray(children).find(
        (child, index) => selectedTabIndex === index
    );

    return (
        <div>
            {/* <TabList>{tabs}</TabList> */}
            {tabContent}
        </div>
    );
};


export default Tab