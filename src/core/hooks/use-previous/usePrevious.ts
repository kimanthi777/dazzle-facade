import { useRef } from "react"
import { useIsomorphicEffect } from "../use-isomorphic-effect"

export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>()

    useIsomorphicEffect(()=>{
        ref.current = value
    }, [value])

    return ref.current
}