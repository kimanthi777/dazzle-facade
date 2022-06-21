
import Apps9 from "../images/apps-9.svg"
import Apps10 from "../images/apps-10.svg"
import Apps11 from "../images/apps-11.svg"

const Pricing = () => {
  return (
    <section id="price">
        <div className="mx-auto px-5 py-20 bg-gray-100">
            <div className="text-center">
                <span className="text-blue-500">Pricing</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-medium">Check Our Valuble Price</h2>
                <p className="lg:w-1/2 mx-auto leading-relaxed">
                    The complete stack for your business. <br/>
                    Our plans will offer a unique approach adjustable just to your needs
                </p>
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
                <span className="w-60 flex items-center m-4">
                    <i className="mr-2 p-3 rounded-full bg-blue-200"><img
                                className="w-4 h-4"
                                src={Apps9}
                                alt="" /></i>
                                No credit card needed</span>
                <span className="w-60 flex items-center m-4"><i className="mr-2 p-3 rounded-full bg-blue-200"><img
                                className="w-4 h-4"
                                src={Apps10}
                                alt="" /></i> Get 30 day free trial</span>
                <span className="w-60 flex items-center m-4"><i className="mr-2 p-3 rounded-full bg-blue-200"><img
                                className="w-4 h-4"
                                src={Apps11}
                                alt="" /></i> Cancel Plans anytime</span>

                </div>
            </div>
            <div className="flex flex-wrap -m-4 justify-center mt-2">
                <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                    <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">
                        <span className= "text-blue-500">Lite</span>
                        <div className="flex items-end mt-1">
                            <span className="font-medium text-4xl">$12</span>
                            <span className="mb-1 ml-1">/month</span>
                        </div>
                        <ul className="mt-1">
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> 1 Team</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> 1 Installed Agent</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Real Time Feedback</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Video Support</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Reporting Tools and Analytics</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Team Collaboration Tools</li>
                            <li><span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1"></span>Authorized updated features</li>
                            <li><span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1"></span> No 24/7 Life Time Support</li>
                        </ul>
                        <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">Buy Now</a>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                    <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">

                        <span className= "text-blue-500">Pro</span>
                        <div className="flex items-end mt-1">
                            <span className="font-medium text-4xl">$20</span>
                            <span className="mb-1 ml-1">/month</span>
                        </div>
                        <ul className="mt-1">
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Upto 10 Teams</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> 10 Installed Agents</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Real Time Feedback</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Video Support</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Reporting Tools and Analytics</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Team Collaboration Tools</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Authorized updated features</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> 24/7 Life Time Support</li>
                            
                        </ul>
                        <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">Buy Now</a>
                    </div>

                </div>
                <div className="p-4 sm:w-1/2  lg:w-1/3 w-full">
                    <div className="border-2 rounded-lg border-slate-500 p-8 shadow-lg">
                        <span className= "text-blue-500">ProMax</span>
                        <div className="flex items-end mt-1">
                            <span className="font-medium text-4xl">$49</span>
                            <span className="mb-1 ml-1">/month</span>
                        </div>
                        <ul className="mt-1">
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Unlimited Team Members</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Unlimited Installed Agents</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Real Time Feedback</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Video Support</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Reporting Tools and Analytics</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Exclusive Team Features &amp; Tools</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> Authorized updated features</li>
                            <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span> 24/7 Life Time Support</li>
                        </ul>
                        <a href="/" className="mt-4 inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
</section>
    )
}

export default Pricing