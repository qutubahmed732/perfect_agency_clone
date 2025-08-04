import { Clock, ArrowRight } from "lucide-react"

function Cta_section() {
    return (
        <section className="w-full py-20 px-5 bg-white relative overflow-hidden">
            <div className='max-w-[1230px] py-10 px-5 mx-auto rounded-3xl flex flex-col items-center gap-7 bg-gradient-to-br from-[#059669] to-[#0d8b82] text-white'>
                <div className='flex items-center gap-3'>
                    <span><Clock size={45} color="#a7f3d0" /></span>
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">Just 1 Hour Daily</h1>
                        <p className="text-[1rem] text-[#a7f3d0]">Transform your marketing forever</p>
                    </div>
                </div>
                <p className="max-w-2xl text-xl text-[#a7f3d0] text-center px-3 md:px-0">That's less time than most people spend on social media, but it will revolutionize your business growth.</p>
                <button className="text-[#059669] text-xl font-bold flex items-end gap-2 bg-white px-8 py-5 rounded-2xl cursor-pointer transition-all duration-500 scale-100 hover:scale-110">Start Your Transformation Today <ArrowRight /></button>
            </div>
        </section>
    )
}

export default Cta_section