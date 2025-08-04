

function ClientsResults() {
    return (

        <div className="h-max md:h-screen w-full bg-gradient-to-br from-[#0f172a] via-10% to-[#111827] px-4 md:px-20 pt-20 md:pt-30 pb-20">

            <div className="flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between text-neutral-300 max-w-7xl m-auto mt-0 md:mt-10">
                
                <div className="w-full md:w-[55%] mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Don’t hire marketers.<br />
                        Hire a team of growth<br />
                        experts who know<br />
                        what it takes to win.
                    </h1>
                </div>

                
                <div className="md:w-[45%] flex flex-col gap-6 items-start">
                    <h2 className="text-3xl md:text-4xl font-bold">Our results over the last year</h2>

                    <div>
                        <p className="text-4xl md:text-5xl font-bold flex items-start gap-1 mb-2"><span className="text-5xl">$</span>1,300,000,000+</p>
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

                    <button className="text-xl mt-4 bg-gradient-to-r from-[#059669] to-[#0d9488] hover:from-[#047857] hover:to-[#0f766e] text-white transition-transform duration-500 font-bold py-4 px-7 rounded-xl cursor-pointer transform hover:scale-105 shadow-xl hover:shadow-2xl">
                        Click Here To Go <span className="font-extrabold">BAD</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientsResults