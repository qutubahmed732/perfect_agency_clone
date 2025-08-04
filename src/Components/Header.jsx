import { Zap, ArrowRight, CheckCircle, Mouse } from "lucide-react"
import "../index.css";

function Header() {
    return (
        <header className='relative border w-full h-[100svh] bg-gradient-to-br from-[#0f1628] via-[#0e1421] to-[#1a2434]'>
            <section className="w-full h-max mt-80 md:mt-20 flex flex-col items-center justify-start gap-4 md:gap-4">
                <div className='mb-2 border border-[#34d3994d] flex items-center gap-2 text-[#aff3da] py-2 px-4 w-[max-content] rounded-full bg-[#10b98133] font-semibold text-[14px]'>
                    <Zap color='#34d399' size={15} /> Stop Paying for Ads Forever
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-none text-white">
                    We Don't Run Ads
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#3ddad7] to-[#1ec686]">We Teach You How</span>
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed text-center text-balance">Build your own internal marketing team in just 6 weeks for $100/week. No more expensive agencies. No more dependency. Just results.</p>
                <div className="flex justify-center mb-12">
                    <a className="bg-gradient-to-r from-[#059669] to-[#0d9488] hover:from-[#047857] hover:to-[#0f766e] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2" href="#">Get Your Free Strategy Session <ArrowRight size={20} />
                    </a>
                </div>
                <ul className="flex items-center justify-center flex-wrap gap-10 text-white text-[14px] opacity-70">
                    <li className="flex items-center gap-2"><CheckCircle color='#1ec686' size={18} />1 Hour Daily Commitment</li>
                    <li className="flex items-center gap-2"><CheckCircle color='#1ec686' size={18} />Money-Back Guarantee</li>
                    <li className="flex items-center gap-2"><CheckCircle color='#1ec686' size={18} />Proven Results</li>
                </ul>
            </section>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-[-0.5rem] animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;