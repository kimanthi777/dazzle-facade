import React from 'react'

import PriceList from './PriceList'
import CTAPricingInfo from './CTAPricingInfo'

import {
    Lite as LitePrice,
    Pro as ProPrice,
    ProMax as ProMaxPrice
} from '../../../data'

function Pricing() {
    return (
        <>
            <section id="pricing">
                <div className="mx-auto px-5 py-20 bg-gray-100">

                    {/* CTAInfo */}
                    <CTAPricingInfo />

                    {/* PriceList */}
                    <div className="flex flex-wrap -m-4 justify-center mt-2">
                        <PriceList plan={'Lite'} price={12} featureList={LitePrice} />
                        <PriceList plan={'Pro'} price={28} featureList={ProPrice} />
                        <PriceList plan={'ProMax'} price={45} featureList={ProMaxPrice} />
                    </div>


                </div>
            </section>
        </>
    )
}

export default Pricing