import React from 'react'
import { Text } from '../../../core/components'
import Apps9 from '../../../assets/images/apps-9.svg'
import Apps10 from '../../../assets/images/apps-10.svg'
import Apps11 from '../../../assets/images/apps-11.svg'

function CTAPricingInfo() {
    return (
        <div className="text-center">
            <Text as='span' className="text-blue-500">Pricing</Text>
            <Text as='h2' className="mt-2 text-2xl md:text-3xl font-medium">Check Our Valuble Price</Text>
            <Text as='p' className="lg:w-1/2 mx-auto leading-relaxed">
                The complete stack for your business. <br />
                Our plans will offer a unique approach adjustable just to your needs
            </Text>
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                <Text as='span' className="w-60 flex items-center m-4">
                    <i className="mr-2 p-3 rounded-full bg-blue-200"><img
                        className="w-4 h-4"
                        src={Apps9}
                        alt="" /></i>
                    No credit card needed</Text>
                <Text as='span' className="w-60 flex items-center m-4"><i className="mr-2 p-3 rounded-full bg-blue-200">
                    <img className="w-4 h-4" src={Apps10} alt="" />
                </i> Get 30 day free trial</Text>
                <Text as='span' className="w-60 flex items-center m-4"><i className="mr-2 p-3 rounded-full bg-blue-200"><img
                    className="w-4 h-4"
                    src={Apps11}
                    alt="" /></i> Cancel Plans anytime</Text>

            </div>
        </div>
    )
}

export default CTAPricingInfo