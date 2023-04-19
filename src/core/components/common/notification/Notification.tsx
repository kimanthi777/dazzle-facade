import React from 'react';
import { Notification as OriginalNotification } from '@mantine/core';
import { MdErrorOutline, MdWarning, MdCheckCircle, MdInfoOutline, MdHourglassEmpty } from 'react-icons/md';

import { IconCircle,IconCheck, IconX } from '@tabler/icons-react';


import clsx from 'clsx';

type CustomNotificationProps = {
  className?: string;
  title: string;
  type?: "error" | "warning" | "success" | "info" | "loading";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
};

export function Notification({ title, className, type = "info", children, icon, onClose }: CustomNotificationProps) {

  const getIconType = () => {
    switch(type){
      case 'error':
        return <IconX color="red"/> //<MdErrorOutline />
      case 'warning':
        return <MdWarning />
      
      case 'success':
        return <IconCheck />//<MdCheckCircle />
      
      // case 'info':
      //   return <MdInfoOutline />
      
      default:
        return <MdHourglassEmpty />
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case "error":
        return "bg-red-500 text-white";
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

  const notificationClassName = clsx('rounded-md', 'p-4', '',getBackgroundColor(), className);

  return (
    <OriginalNotification className={notificationClassName} title={title} icon={getIconType()} onClose={onClose} closeButtonProps={{ color: 'white' }}>
      <span className='text-white'>
      {children}
      </span>
    </OriginalNotification>
  );
}

/*clsx is used to generate class names for the custom Notification component based on the type prop, 
which determines the background color of the notification. The className prop allows you to add 
additional tailwind class names to the Notification component. 
You can also pass in children to display the content of the notification.
 */