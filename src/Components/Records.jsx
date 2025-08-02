import { Award, Briefcase, Star, TrendingUp, DollarSign, Shield, Quote } from "lucide-react"

function Records() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-10% to-[#111827] py-20 px-5">
      <div className='mb-2 border border-[#34d3994d] flex items-center gap-2 text-[#aff3da] py-2 px-4 w-[max-content] rounded-full bg-[#10b98133] font-semibold text-[14px] mx-auto'>
        <Award color='#34d399' size={18} /> Proven Track Record
      </div>
      <h1 className="text-3xl md:text-5xl text-center text-white font-bold p-2">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3ddad7] to-[#1ec686]">Industry Leaders</span></h1>
      <p className="max-w-3xl text-xl text-white text-center mx-auto mt-4 px-5 md:px-0">Our methodology has transformed businesses across every industry, from startups to Fortune 500 companies</p>

      <div className="grid md:grid-cols-4 gap-8 mb-20 max-w-[1230px] mx-auto mt-20">
        <div className="p-8 flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br to-[#05966933] from-[#0d948833] backdrop-blur-sm border border-[#10b98133] hover:border-[#34d39966] transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-[max-content] rounded-full p-5 bg-gradient-to-bl from-[#14b8a6] to-[#10b981]">
            <Briefcase color="white" size={30} />
          </div>
          <p className="text-4xl text-white font-bold">500+</p>
          <p className="text-[1rem] text-[#a7f3d0] font-medium">Businesses Transformed</p>
          <div className="flex justify-center mt-4">
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
          </div>
        </div>
        <div className="p-8 flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br to-[#0891b233] from-[#0d948833] backdrop-blur-sm border border-[#14b8a633] hover:border-[#2dd4bf66] transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-[max-content] rounded-full p-5 bg-gradient-to-br from-[#14b8a6] to-[#06b6d4]">
            <TrendingUp color="white" size={30} />
          </div>
          <p className="text-4xl text-white font-bold">300%</p>
          <p className="text-[1rem] text-[#99f6e4] font-medium">Average ROI Increase</p>
          <div className="flex justify-center mt-4">
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
          </div>
        </div>
        <div className="p-8 flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br to-[#ea580c33] from-[#d9770633] backdrop-blur-sm border border-[#f59e0b33] hover:border-[#fbbf2466] transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-[max-content] rounded-full p-5 bg-gradient-to-bl from-[#f97316] to-[#f59e0b]">
            <DollarSign color="white" size={30} />
          </div>
          <p className="text-4xl text-white font-bold">$50M+</p>
          <p className="text-[1rem] text-[#fde68a] font-medium">Revenue Generated</p>
          <div className="flex justify-center mt-4">
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
          </div>
        </div>
        <div className="p-8 flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br to-[#db277733] from-[#e11d4833] backdrop-blur-sm border border-[#f43f5e33] transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-[max-content] rounded-full p-5 bg-gradient-to-br to-[#ec4899] from-[#f43f5e]">
            <Shield color="white" size={30} />
          </div>
          <p className="text-4xl text-white font-bold">98%</p>
          <p className="text-[1rem] text-[#fecdd3] font-medium">Success Rate</p>
          <div className="flex justify-center mt-4">
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
            <Star color="#fbbf24" fill="#fbbf24" size={15} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-[1230px] mx-auto">

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-6">
            <Quote color="#34d399" className="mr-3" size={30} />
            <div className="flex">
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
            </div>
          </div>
          <p className="text-neutral-300 mb-6 leading-relaxed">"We went from spending $15K/month on agencies with mediocre results to building our own team that delivers 3x better performance. The ROI is incredible."</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold">SJ</span>
            </div>
            <div>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-neutral-400 text-sm">CEO, TechFlow Solutions</div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-6">
            <Quote color="#2dd4bf" className="mr-3" size={30} />
            <div className="flex">
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
            </div>
          </div>
          <p className="text-neutral-300 mb-6 leading-relaxed">"Pfeifer Media didn't just teach us marketing - they gave us complete control over our growth. We're now scaling faster than ever before."</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold">MC</span>
            </div>
            <div>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-neutral-400 text-sm">Founder, GrowthLab</div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-6">
            <Quote color="#fbbf24" className="mr-3" size={30} />
            <div className="flex">
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
              <Star color="#fbbf24" fill="#fbbf24" size={22} />
            </div>
          </div>
          <p className="text-neutral-300 mb-6 leading-relaxed">"Best investment we've ever made. In 6 weeks, we built a marketing machine that would have taken years to develop on our own."</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold">ER</span>
            </div>
            <div>
              <div className="text-white font-semibold">Emily Rodriguez</div>
              <div className="text-neutral-400 text-sm">CMO, InnovateCorp</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Records