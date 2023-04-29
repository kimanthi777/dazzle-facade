import { useRef } from "react";
import { useIsomorphicEffect } from "../use-isomorphic-effect";

export function useEventListener<T extends HTMLElement = any>(
    eventType: string,
    listenerFn: (ev: any) => any,
    options?: boolean | AddEventListenerOptions
){
    const ref = useRef<T>()

    useIsomorphicEffect(()=>{
    if(ref.current){
        ref.current?.addEventListener(eventType, listenerFn, options)
        return ()=> ref.current?.removeEventListener(eventType, listenerFn, options)
    }
    return undefined

    }, [listenerFn, options])

    return ref
}
