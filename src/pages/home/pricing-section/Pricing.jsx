import React from 'react'

import { Text } from '../../../core/components/Common'

import Apps9 from "../../../assets/images/apps-9.svg"
import Apps10 from "../../../assets/images/apps-10.svg"
import Apps11 from "../../../assets/images/apps-11.svg"

function Pricing() {
    return (
        <>
            <section id="pricing">
                <div className="mx-auto px-5 py-20 bg-gray-100">
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
                    <div className="flex flex-wrap -m-4 justify-center mt-2">
                        <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                            <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">
                                <Text as='span' className="text-blue-500">Lite</Text>
                                <div className="flex items-end mt-1">
                                    <Text as='span' className="font-medium text-4xl">$12</Text>
                                    <Text as='span' className="mb-1 ml-1">/month</Text>
                                </div>
                                <ul className="mt-1">
                                    {/* A hacky way of defining children! */}
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> 1 Team</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> 1 Installed Agent</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Real Time Feedback</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Video Support</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Reporting Tools and Analytics</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Team Collaboration Tools</li>
                                    <li><Text as='span' className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1">{undefined}</Text>Authorized updated features</li>
                                    <li><Text as='span' className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1">{undefined}</Text> No 24/7 Life Time Support</li>
                                </ul>
                                <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">Buy Now</a>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                            <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">

                                <Text as='span' className="text-blue-500">Pro</Text>
                                <div className="flex items-end mt-1">
                                    <Text as='span' className="font-medium text-4xl">$20</Text>
                                    <Text as='span' className="mb-1 ml-1">/month</Text>
                                </div>
                                <ul className="mt-1">
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Upto 10 Teams</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> 10 Installed Agents</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Real Time Feedback</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Video Support</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Reporting Tools and Analytics</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Team Collaboration Tools</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Authorized updated features</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> 24/7 Life Time Support</li>

                                </ul>
                                <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">Buy Now</a>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                            <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">
                                <Text as='span' className="text-blue-500">ProMax</Text>
                                <div className="flex items-end mt-1">
                                    <Text as='span' className="font-medium text-4xl">$49</Text>
                                    <Text as='span' className="mb-1 ml-1">/month</Text>
                                </div>
                                <ul className="mt-1">
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Unlimited Team Members</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Unlimited Installed Agents</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Real Time Feedback</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Video Support</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Reporting Tools and Analytics</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Exclusive Team Features &amp; Tools</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> Authorized updated features</li>
                                    <li><Text as='span' className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1">{undefined}</Text> 24/7 Life Time Support</li>
                                </ul>
                                <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing