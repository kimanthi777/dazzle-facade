import React from 'react'
import { Text } from '../../../core/components'

function PriceList({ plan, price, featureList }: any) {
    return (
        <>
            <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">
                    <Text as='span' className="text-blue-500">{plan}</Text>
                    <div className="flex items-end mt-1">
                        <Text as='span' className="font-medium text-4xl">${price}</Text>
                        <Text as='span' className="mb-1 ml-1">/month</Text>
                    </div>
                    <ul className='mt-2'>
                        {/** ! A hacky way of defining children!I doubt if I'll even remember this myself in coming years */}
                        {featureList.map((feature: any, index: any) => (
                            <li><Text as='span' key={index} className='w-3 h-3 bg-blue-500 rounded-full inline-block mr-1'>{''}</Text>{feature}</li>
                        ))}

                    </ul>
                    <a href="/"
                        className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500 hover:bg-slate-400 hover:text-white">
                        BOOK FREE DEMO
                    </a>
                </div>
            </div>
        </>
    )
}

export default PriceList

/**

 */