import React, { ReactNode, useState } from "react";

// Define the different types of notifications that can be displayed
type NotificationType = "error" | "warning" | "success" | "info" | "loading"

// Define the props for the Notification component
interface NotificationProps {
    type: NotificationType;
    title: String;
    children: ReactNode;
    onClose?: () => void;
}

// Define the Notification component
const Notification: React.FC<NotificationProps> = ({type, title, children,onClose,}) => {
    // Use state to keep track of whether the notification has been closed
    const [closed, setClosed] = useState(false);

    // Define a function to close the notification and call the onClose callback, if provided
    const handleClose = () => {
        setClosed(true);
        if (onClose) {
            onClose();
        }
    };

    // Define functions to get the background color and icon for the notification based on its type
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

    const getIcon = () => {
        switch (type) {
            case "error":
                return (
                    // <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     className="h-6 w-6"
                    //     fill="none"
                    //     viewBox="0 0 24 24"
                    //     stroke="currentColor"
                    // >
                    //     <path
                    //         strokeLinecap="round"
                    //         strokeLinejoin="round"
                    //         strokeWidth={2}
                    //         d="M6 18L18 6M6 6l12 12"
                    //     />
                    // </svg>
                    null 
                );
            case "warning":
                return (
                    // <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     className="h-6 w-6"
                    //     fill="none"
                    //     viewBox="0 0 24 24"
                    //     stroke="currentColor"
                    // >
                    //     <path
                    //         strokeLinecap="round"
                    //         strokeLinejoin="round"
                    //         strokeWidth={2}
                    //         d="M12 9v2m0 4h.01m-6.938 3.993C5.458 18.784 5 17.95 5 17V7c0-.95.458-1.784 1.073-2.327C6.687 4.14 7.458 4 8.227 4h7.546c.769 0 1.54.14 2.154.673.615.543 1.073 1.377 1.073 2.327v10c0 .95-.458 1.784-1.073 2.327-.614.533-1.385.673-2.154.673H8.227c-.77 0-1.54-.14-2.154-.673z"
                    //     />
                    // </svg>
                    null
                );
            case "success":
                return (
                    // <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     className="h-6 w-6"
                    //     fill="none"
                    //     viewBox="0 0 24 24"
                    //     stroke="currentColor"
                    // >
                    //     <path
                    //         strokeLinecap="round"
                    //         strokeLinejoin="round"
                    //         strokeWidth={2}
                    //         d="M5 13l4 4L19 7"
                    //     />
                    // </svg>
                    null
                );
            case "info":
                return (
                    // <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     className="h-6 w-6"
                    //     fill="none"
                    //     viewBox="0 0 24 24"
                    //     stroke="currentColor"
                    // >
                    //     <path
                    //         strokeLinecap="round"
                    //         strokeLinejoin="round"
                    //         strokeWidth={2}
                    //         d="M12 6v2m0 4h.01M12 18v-6"
                    //     />
                    // </svg>
                    null
                );
            default:
                return null;
        }
    };

    // If the notification has been closed, don't render anything
    if (closed) {
        return null;
    }

    return (
        <div>
            Notifications
        </div>
    )
}

export default Notification;