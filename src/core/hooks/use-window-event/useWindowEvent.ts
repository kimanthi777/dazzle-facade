import { useIsomorphicEffect } from "../use-isomorphic-effect"

export function useWindowEvent(
    eventType: any, listenerFn: any, options?: boolean | AddEventListenerOptions
    ){

    useIsomorphicEffect(()=>{
        window.addEventListener(eventType, listenerFn, options)

        return ()=> window.removeEventListener(eventType, listenerFn, options)
    },[eventType, listenerFn])
}