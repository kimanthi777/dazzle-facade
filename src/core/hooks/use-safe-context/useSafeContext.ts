import { createContext, useContext } from "react";

const ctx = createContext<any | null>(null)

export function useSafeContext() {
    if(ctx === null){
        console.log(`Cannot access context`, null)
    }

    return ctx
}
