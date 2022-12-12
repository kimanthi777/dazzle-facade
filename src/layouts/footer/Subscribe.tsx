import React from 'react'

import { Text } from '../../core/components'

function Subscribe() {
    return (
        <>
            <Text as='p' className='max-w-sm'>No spam. Subscribe for updates. </Text>
            <form action='' className='mt-2 flex sm:flex-row flex-col'>
                <input className='px-4 py-2 rounded-md text-black' type='email' placeholder='youremail@domain.com' />
                <button type='submit' className='sm:ml-2 px-4 py-2 hover:bg-[#5a5df5] rounded-md sm:mt-0 mt-2 ml-0 self-start bg-[#175CFF]'>Subscribe</button>
            </form>
        </>
    )
}

export default Subscribe