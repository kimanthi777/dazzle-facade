import React, { DragEvent, useState } from "react";

import AppLayout from './AppLayout'

import { Calendar } from './core';

function App() {

  return (
    <AppLayout>
      {/* <Calendar /> */}
      <TestDnD />
    </AppLayout>
  );
}

export default App; 

const TestDnD = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleDragStart = (event: DragEvent<HTMLDivElement>, containerType: string) => {
    event.dataTransfer.setData("text/plain", containerType);
    console.log(`Started dragging... container ${containerType}`);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>, containerType: string) => {
    event.preventDefault();
    console.log(`Dropped... container ${containerType}`);
    setX(event.clientX);
    setY(event.clientY);
  };

  const handleDragEnd = (containerType: string) => {
    console.log(`Ended dragging... container ${containerType}`);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div className="flex gap-6">
      <div
        className="my-10 bg-gray-600 text-green-400 w-[200px] h-[300px] text-center"
        draggable
        onDragStart={(event) => handleDragStart(event, "1")}
        onDragEnd={() => handleDragEnd("1")}
        onDrag={(event) => handleDrag(event)}
      >
        1
      </div>

      <div
        className="my-10 bg-slate-500 text-white w-[200px] h-[300px] text-center"
        draggable
        onDragStart={(event) => handleDragStart(event, "2")}
        onDragEnd={() => handleDragEnd("2")}
        onDrag={(event) => handleDrag(event)}
        onDrop={(event) => handleDrop(event, "2")} // Add onDrop event handler
        onDragOver={(event) => event.preventDefault()} // Add onDragOver event handler to allow dropping
      >
        2
      </div>
      <p>
        Current Mouse Position: X: {x}, Y: {y}
      </p>
    </div>
  );
};