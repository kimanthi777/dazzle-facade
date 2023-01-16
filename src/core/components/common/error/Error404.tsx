import React from 'react'
import { Link } from 'react-router-dom'

export function Error404() {
    return (
        <div className="my-20 py-12 flex justify-center items-center text-3xl text-red-500 font-extrabold">Oops! You just hit a URL that does not exist. <Link to='/' className='underline pl-2'> Go Home</Link> </div>
    )
}

Error404.displayName = '@Error404'