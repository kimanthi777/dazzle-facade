import React from 'react'

function usePrevious(val: any) {
    const ref = React.useRef()
    React.useEffect(() => {
        ref.current = val

    }, [val])
    return ref.current
}

export default function Count() {
    const [count, setCount] = React.useState(0)

    const prevCount = usePrevious(count)

    return (
        <div>
            <h1>Now: {count}, before:{prevCount}</h1>

            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}