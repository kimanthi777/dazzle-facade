
import React from 'react';
import { Notification as OriginalNotification } from '@mantine/core';
import { MdErrorOutline, MdWarning, MdCheckCircle, MdInfoOutline, MdHourglassEmpty } from 'react-icons/md';

import clsx from 'clsx';


type CustomNotificationProps = {
  className?: string;
  title: string;
  type?: "error" | "warning" | "success" | "info" | "loading";
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export function Notification({ title, className, type = "info", children, icon }: CustomNotificationProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "success":
        return "bg-green-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  // Generate class names for the Notification component
  const notificationClassName = clsx('rounded-md', 'p-4', getBackgroundColor(), className);

  return (
    <OriginalNotification className={notificationClassName} title={title} icon={icon}>
      {children}
    </OriginalNotification>
  );
}

// Usage

 
 /*clsx is used to generate class names for the custom Notification component based on the type prop, 
 which determines the background color of the notification. The className prop allows you to add 
 additional tailwind class names to the Notification component. 
 You can also pass in children to display the content of the notification.
 */