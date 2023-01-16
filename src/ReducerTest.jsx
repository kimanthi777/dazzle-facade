import React, { createContext, useReducer, useContext } from 'react'


let initialValue = 0
const TestContext = createContext(initialValue)

function TestProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc': {
                console.log(state)
                let newState = state + action.payload
                console.log(newState)
                return newState
            }
            case 'dec': {
                console.log(state)
                let newState = state - action.payload
                console.log(newState)
                return state - action.payload
            }
            case 'reset': {
                return initialValue
            }
            default:

                alert('Wrong!')
                return initialValue
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <TestContext.Provider value={{ state, dispatch }}>
            {children}
        </TestContext.Provider>
    )

}

export default function TestCase() {
    const value = useContext(TestContext)
    console.log(value)


    return (
        <TestProvider>
            <div className='h-[40vw] bg-white w-[100vw] text-blue-400 mt-5 grid place-items-center'>
                <h1
                    className='text-gray-900 font-semibold text-2xl'>Value is:
                    <span className='underline text-green-400 ml-2'>{'state'}</span>
                </h1>
                <button
                    className='border border-solid border-blue-400 hover:border-white 
                    rounded-md p-4 bg-slate-400 text-white w-[200px] mx-3'
                // onClick={() => dispatch({ type: 'inc', payload: 5 })}
                >Inc</button>
                <button
                    className='border border-solid border-blue-400 hover:border-white 
                    rounded-md p-4 bg-slate-400 text-white w-[200px] mx-3'
                // onClick={() => dispatch({ type: 'dec', payload: 10 })}
                >Dec</button>
                <button
                    className='border border-solid border-blue-400 hover:border-white rounded-md 
                     p-4 bg-red-400 text-white w-[200px] mx-3'
                // onClick={() => dispatch({ type: 'reset' })}
                >Reset
                </button>
            </div>
        </TestProvider>
    )
}

// Uncaught TypeError: react__WEBPACK_IMPORTED_MODULE_0__.useContext(...) is not iterable