import React from 'react'

import Apps6 from "../../../images/apps-6.svg"
// import CTAIMG2 from "./images/cta-img-2-1.svg"

const Features = () => {
    return (
        <section className="bg-gray-100 grid place-items-center" id="about">
            <div className="container mx-auto px-5 py-20">
                <div className="flex flex-col w-full mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 tracking-wide">With all the Features You Need</h2>
                    <p className="lg:w-1/2 mx-auto leading-relaxed">Credibly grow premier ideas rather than bricks and clicks.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 rounded-lg border-gray-300 p-4">
                            <span className="w-8 h-8 bg-[#175CFF] inline-flex items-center justify-center rounded"><img
                                className="w-4 h-4" src={Apps6} alt="" />
                            </span>
                            <h5 className="font-medium mt-3">Exclusive Features</h5>
                            <p className="mt-1 text-sm"> We offer employee managment system, time tracking, documents verification, and payrolls.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 rounded-lg border-gray-300 p-4">
                            <span className="w-8 h-8 bg-[#F25767] inline-flex items-center justify-center rounded"><img
                                className="w-4 h-4" src={Apps6} alt="" />
                            </span>
                            <h5 className="font-medium mt-3">Effective Pricing Model</h5>
                            <p className="mt-1 text-sm">Appropriately grow competitive rather leadership the leadership process
                                sound without state.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 rounded-lg border-gray-300 p-4">
                            <span className="w-8 h-8 bg-[#0B163F] inline-flex items-center justify-center rounded"><img
                                className="w-4 h-4" src={Apps6} alt="" />
                            </span>
                            <h5 className="font-medium mt-3">Fast Development</h5>
                            <p className="mt-1 text-sm">Appropriately grow competitive rather leadership the leadership process
                                sound without state.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 mt-8">

                    <div className="p-4 md:w-1/2 w-full">
                        <div className="rounded-lg px-4 py-8 relative overflow-hidden bg-[#FCDDE1]">
                            <div className="pr-24">
                                <h3 className="font-medium text-lg text-[#f74589]">Get Real Time Integrations</h3>
                                <p className="mt-3">
                                    We handle a large and complex integrations via our suite of SDKs including: <br />
                                    Sales channels, CRM softwares, Marketing, Mail, Payments(Flutterwave/Mpesa/Stripe), ERP, and more.
                                </p>
                                <a href="/"
                                    className="px-4 py-2 inline-block mt-2 rounded text-[#FE6B7E] border-2 border-solid border-[#FE6B7E]">
                                    Learn More
                                </a>
                            </div>

                            {/* <div className="absolute -bottom-1 right-0">
                            <img className="w-36" src={CTAIMG2} alt="" />
                        </div> */}

                        </div>
                    </div>

                    <div className="p-4 md:w-1/2 w-full">
                        <div className="rounded-lg px-4 py-8 relative overflow-hidden bg-[#CEDDFF]">
                            <div className="pr-24">
                                <h3 className="font-medium text-lg text-[#608dff]">Out of the Box solutions</h3>
                                <p className="mt-3">Progressively reinvent model and niche revolutionary benefits for your business. <br />
                                    We handle your needs from the ground up. Including verifying docs all through funding rounds
                                    for a startup.
                                </p>
                                <a href="/"
                                    className="px-4 py-2 inline-block mt-2 rounded border-2 border-solid border-[#175CFF] text-[#175CFF]">
                                    Learn More
                                </a>

                            </div>
                            <div className="absolute -bottom-1 right-0">
                                <img className="w-36" src="./images/promo-1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features