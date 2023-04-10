import React, { DragEvent, useState } from "react";

import AppLayout from './AppLayout'

import { Calendar } from './core';

function App() {

  return (
    <AppLayout>
      <Calendar />
      {/* <TestDnD /> */}
    </AppLayout>
  );
}

export default App; 