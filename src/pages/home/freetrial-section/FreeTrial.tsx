import React from 'react'

const FreeTrial = () => {
    return (
        <section className="py-20" id="shop">
            <div className="mx-auto px-5 py-20 text-white text-center bg-[#021049]">
                <span className="text-yellow-400">Get Free Support</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-medium">Start your 14 days Free Trial</h2>
                <p className="lg:w-1/2 mx-auto leading-relaxed">
                    Fast, Easy, and Affordable Payroll &amp; HR for businesses.
                    Sublime makes you feel like an expert.
                </p>

                <a href="/" className="inline-block px-8 py-2 bg-blue-500 mt-3">Try Now</a>

                <ul className="mt-2 max-w-5xl mx-auto flex flex-wrap justify-center items-center sm:flex-row flex-col">
                    <li className=" flex items-center m-4">
                        <span className="mr-2 w-3 h-3 rounded-full bg-white"></span>
                        Free 14 days trial
                    </li>
                    <li className=" flex items-center m-4">
                        <span className="mr-2 w-3 h-3 rounded-full bg-white"></span>No credit card required</li>
                    <li className="flex items-center m-4">
                        <span className="mr-2 w-3 h-3 rounded-full bg-white"></span> Support 24/7</li>
                    <li className=" flex items-center m-4">
                        <span className="mr-2 w-3 h-3 rounded-full bg-white"></span> Cancel anytime</li>
                </ul>
            </div>
        </section>
    )
}

export default FreeTrial