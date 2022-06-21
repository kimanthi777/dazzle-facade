

const primaryLinks = [
    'Home',
    'About',
    'Contact',
    'Service'
]

const serviceLinks = [
    'Pricing',
    'Blog',
    'Features',
    'Careers',
    'Why Sublime',
    'Get Social'
]

const productsLinks = [
    'Time and Attendance',
    'Human Resource',
    'Payroll, compliance, & payouts',
    'Perks and Benefits',
    'Performance Management',
    'Expense claims',
    'Leaves and Time off'
]


const Footer = () => {
  return (
    <footer className="bg-[#021049]" id="contacts">
        <div className="container mx-auto px-5 py-32 text-white">
            <div className="flex flex-wrap">
                <div className="lg:w-1/2 md:w-2/3 w-full mb-10">
                    <h2 className="font-medium tracking-widest text-lg mb-2">SUBLIME</h2>
                    <p className="max-w-sm">No spam. Suscribe for updates </p>
                    <form action="" className="mt-2 flex sm:flex-row flex-col">
                        <input className="px-4 py-2 rounded-md text-black" type="email" placeholder="youremail@domain.com" />
                        <button type="submit" className="sm:ml-2 px-4 py-2 hover:bg-[#5a5df5] rounded-md sm:mt-0 mt-2 ml-0 self-start bg-[#175CFF]">Subscribe</button>
                    </form>
                </div>
                <div className="lg:w-1/6 md:w-1/3 w-full">
                    <h2 className="font-medium tracking-widest text-sm mb-4">{'primary'.toUpperCase()}</h2>
                    <nav className="list-none">
                        {
                            primaryLinks.map((link, index)=>(
                                <li key={index}>
                                    <a href="/" className="hover:text-[#5a5df5]">{link}</a>
                                </li>
                            ))
                        }
                    </nav>
                </div>
                <div className="lg:w-1/6 md:w-1/3 sm:mt-0 mt-4 w-full">
                    <h2 className="font-medium tracking-widest text-sm mb-4">{'service'.toUpperCase()}</h2>
                    <nav className="list-none">
                        {
                            serviceLinks.map((serviceLink, index)=>(
                                <li key={index}>
                                    <a href="/" className="hover:text-[#5a5df5]">{serviceLink}</a>
                                </li>
                            ))
                        }
                    </nav>
                </div>
                <div className="lg:w-1/6 md:w-1/3 sm:mt-0 mt-4 w-full">
                    <h2 className="font-medium tracking-widest text-sm mb-4">{'products'.toUpperCase()}</h2>
                    <nav className="list-none">
                        {
                            productsLinks.map((productsLink, index) =>(
                                <li key={index}>
                                    <a href="/" className="hover:text-[#5a5df5]">{productsLink}</a>
                                </li>
                            ))
                        }
                    </nav>
                </div>
                
            </div>
            
        </div>
        <div className="container mx-auto text-center px-5 pb-10 text-white">
            <p>2022 Sublime - All Rights Reserved : : Sublime</p>
            <p>Check Source Code <a href='lol.com' _blank="true" className="text-slate-500 underline">@GitHub</a></p>
        </div>
    </footer>
)
}

export default Footer 