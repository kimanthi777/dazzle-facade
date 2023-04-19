import React from 'react'
import { Notification } from '../core/components';

export default function Test() {
      const [showNotification, setShowNotification] = React.useState(true);

  const handleClose = () => {
    setShowNotification(false);
    console.log(showNotification)
  };

  return (
    <>
    TEST:
      {showNotification && (
        <Notification title="Notification Title" type="success" onClose={handleClose}>
          Notification Content
        </Notification>
      )}
    </>
  )
}
