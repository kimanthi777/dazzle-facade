import { useIsomorphicEffect } from "../use-isomorphic-effect";

// GET Mouse position
// Incomplete code
export function useMouseEvents(){

    const fn = ()=>{}

    const bindMouseEvents = () => {
        document.addEventListener('mouseleave', fn)
        document.addEventListener('mousemove', fn)
        document.addEventListener('mouseup', fn)
        document.addEventListener('touchmove', fn)
        document.addEventListener('touchend', fn)
    }

    const unbindMouseEvents = () => {
        document.removeEventListener('mouseleave', fn)
        document.removeEventListener('mousemove', fn)
        document.removeEventListener('mouseup', fn)
        document.removeEventListener('touchmove', fn)
        document.removeEventListener('touchend', fn)
    }

    useIsomorphicEffect(()=>{
        bindMouseEvents()
        return ()=> unbindMouseEvents()
    }, [])
}