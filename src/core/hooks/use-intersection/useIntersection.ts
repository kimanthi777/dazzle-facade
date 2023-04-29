import { useRef, useCallback, useState } from "react";
// import { useSafeState, } from "../use-safe-state";

export function useIntersection<T extends HTMLElement | null>(){
    // const [entry, setEntry] = useSafeState() TODO: useSafeState
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

    const observer = useRef<IntersectionObserver | null>(null)

      const ref = useCallback((element: T | null) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      if (element === null) {
        setEntry(null);
        return;
      }

      observer.current = new IntersectionObserver(([_entry]) => {
        setEntry(_entry);
      });

      observer.current.observe(element);
    },[]); // TODO: Add options

    return [ref, entry]
}