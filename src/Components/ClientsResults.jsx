

function ClientsResults() {
    return (

        <div className="h-max md:h-screen w-full bg-gradient-to-br from-[#0f172a] via-10% to-[#111827] md:px-20 pt-30 pb-20">

            <div className="flex flex-col md:flex-row items-end md:items-start justify-start md:justify-between text-white max-w-7xl m-auto mt-0 md:mt-10">
                
                <div className="w-full md:w-[55%] mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight ml-8 md:ml-0">
                        Don’t hire marketers.<br />
                        Hire a team of growth<br />
                        experts who know<br />
                        what it takes to win.
                    </h1>
                </div>

                
                <div className="md:w-[45%] flex flex-col gap-6 items-start ml-8 md:ml-40">
                    <h2 className="text-4xl font-bold">Our results over the last year</h2>

                    <div>
                        <p className="text-5xl font-bold flex items-start gap-1 mb-2"><span className="text-5xl">$</span>1,300,000,000+</p>
                        <p className="text-xl text-gray-300">Annual Client Revenue</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold flex items-start gap-1 mb-2"><span className="text-5xl">$</span>250,000,000+</p>
                        <p className="text-xl text-gray-300">Ad spend per year</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold mb-2">150+</p>
                        <p className="text-xl text-gray-300">Growth Experts</p>
                    </div>

                    <button className="text-xl mt-4 bg-[#ee4250] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-500 text-black font-bold py-2 px-7 rounded-xl cursor-pointer">
                        Click Here To Go <span className="font-extrabold">BAD</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientsResults