import { useState, useEffect, useRef } from 'react';

export function useWebWorker<T>(workerFunction: (input: T) => any) {
  const [result, setResult] = useState<any>();
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Create a new web worker and listen for messages
    workerRef.current = new Worker(URL.createObjectURL(new Blob([`(${workerFunction})()`])));
    workerRef.current.onmessage = (event) => setResult(event.data);

    return () => {
      // Terminate the web worker when the component unmounts
      workerRef.current?.terminate();
    };
  }, [workerFunction]);

  const runWorker = (input: T) => {
    // Send a message to the web worker to execute the worker function with the input
    workerRef.current?.postMessage(input);
  };

  return [runWorker, result] as const;
}
