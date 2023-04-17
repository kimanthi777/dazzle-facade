import React, { DragEvent, useState } from "react";

import AppLayout from './AppLayout'

import { Calendar } from './core';
import { Notification } from './core/components';
import { MdErrorOutline, MdWarning, MdCheckCircle, MdInfoOutline, MdHourglassEmpty } from 'react-icons/md';

//   type?: "error" | "warning" | "success" | "info" | "loading";

function App() {

  return (
    <AppLayout>
      {/* <Calendar /> */}
      {/* <TestDnD /> */}
      {/* <Notification title="Notification Example"/> */}
      <Notification title="test" type="success" icon={<MdCheckCircle/>} />
      <Notification title="test" type="error" icon={<MdErrorOutline/>} />
      <Notification title="test" type="warning" icon={<MdWarning/>} />
      <Notification title="test" type="info" icon={<MdInfoOutline/>} />
      <Notification title="test" type="loading" icon={<MdHourglassEmpty/>} className="w-[60vw] m-auto text-white">
        This is a test one,, loading notification
      </Notification>
    </AppLayout>
  );
}

export default App; 