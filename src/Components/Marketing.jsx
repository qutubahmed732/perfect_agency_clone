import { RocketIcon, BookOpen, CheckCircle, Lightbulb, TrendingUp, Calendar, PlayCircleIcon, BarChart, BarChart3 } from "lucide-react"

function Marketing() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ecfdf580] to-[#f0fdfa80]"></div>
      <div className="flex flex-col items-center gap-5 mb-20">
        <div className='mb-2 flex items-center gap-2 text-[#047857] py-2 px-4 w-[max-content] rounded-full bg-[#10b98133] font-semibold text-[14px]'>
          <RocketIcon color='#047857' size={15} /> 6-Week Transformation
        </div>
        <div className="heading text-center flex flex-col gap-5">
          <h1 className="text-4xl max-w-5xl sm:text-5xl font-bold text-neutral-900 leading-15">
            From Marketing Dependent to
            <span className="ml-2 bg-clip-tex text-transparent bg-clip-text bg-gradient-to-l to-[#0d9488] from-[#059669]">Marketing Independent</span></h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Our proven system transforms your business in just 6 weeks. Here's exactly how we do it.</p>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#a7f3d0] via-[#5eead4] to-[#a7f3d0] rounded-full hidden lg:block"></div>
        <div className="space-y-16 mb-10">

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d1fae5] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center lg:justify-end mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-full flex items-center justify-center shadow-lg"><BookOpen size={40} color="white" /></div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Week 1: Foundation</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">We start by auditing your current marketing efforts and identifying gaps. You'll learn the fundamentals of customer psychology and map out your ideal customer journey.</p>
                <div className="space-y-2 text-sm text-neutral-500"><div className="flex items-center justify-center lg:justify-end"><span className="flex items-center gap-2"><CheckCircle size={20} color="#047857" /> Marketing audit &amp; assessment</span></div><div className="flex items-center justify-center lg:justify-end"><span className="flex items-center gap-2"><CheckCircle size={20} color="#047857" /> Customer persona development</span></div><div className="flex items-center justify-center lg:justify-end"><span className="flex items-center gap-2"><CheckCircle size={20} color="#047857" /> Journey mapping workshop</span>
                </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#0d9488] rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl font-bold text-white">1</span>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-gradient-to-br from-[#ecfdf5] to-[#f0fdfa] rounded-2xl p-6 border border-[#10b981]">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={22} color="#047857" />
                  <span className="text-sm font-semibold text-[#047857]">Daily Commitment</span>
                </div>
                <p className="text-neutral-700 font-medium">1 hour of focused learning and implementation</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d1fae5] hover:shadow-xl transition-shadow duration-300"><div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg"><Lightbulb color="white" size={40} /></div>
              </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Weeks 2-4: Skills Mastery</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">The core of our program. You'll master content creation, campaign management, analytics, and conversion optimization. Each week builds on the last.</p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckCircle size={20} color="#059669" />
                    <span> Content strategy &amp; creation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckCircle size={20} color="#059669" />
                    <span> Campaign setup &amp; management</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckCircle size={20} color="#059669" />
                    <span> Analytics &amp; optimization</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#0d9488] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-lg font-bold text-white">2-4</span>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pr-12">
              <div className="bg-gradient-to-br from-[#ecfdf5] to-[#f0fdfa] rounded-2xl p-6 border border-[#10b981]">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircleIcon size={22} color="#059669" />
                  <span className="text-sm font-semibold text-[#047857]">Live Implementation</span>
                </div>
                <p className="text-neutral-700 font-medium">Real campaigns with real results as you learn</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d1fae5] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center lg:justify-end mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg">
                    <BarChart3 color='white' size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Weeks 5-6: Scale &amp; Optimize
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Now we scale what's working and optimize everything else. You'll build systems for continued growth and learn advanced strategies for long-term success.
                </p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <div className="flex items-center justify-center gap-2 lg:justify-end">
                    <CheckCircle size={20} color="#059669" />
                    <span>Performance optimization</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-end">
                    <CheckCircle size={20} color="#059669" />
                    <span>Scaling strategies</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-end">
                    <CheckCircle size={20} color="#059669" />
                    <span>Long-term growth systems</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#0d9488] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-lg font-bold text-white">5-6</span>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-gradient-to-br from-[#ecfdf5] to-[#f0fdfa] rounded-2xl p-6 border border-[#10b981]">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp size={22} color="#047857" />
                  <span className="text-sm font-semibold text-[#047857]">Results Guaranteed</span>
                </div>
                <p className="text-neutral-700 font-medium">Measurable growth or your money back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marketing