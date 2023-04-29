type scrollPositionProps = {
    x: number,
    y: number
}

export function getScrollPosition() {

   return typeof window !== 'undefined'? {
        x: window.pageXOffset, //scrollY, scrollX
        y: window.pageYOffset
    }: {x: 0, y: 0}
}