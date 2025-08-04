import { DollarSign, Users, TargetIcon, CheckCircle } from 'lucide-react'

function AdvisingSection() {
    return (
        <section className='bg-neutral-50 w-full py-20'>
            <div className="flex flex-col items-center gap-5 heading w-[90%] lg:w-[80%] mx-auto">
                <h1 className='text-center text-3xl lg:text-4xl font-bold'>Stop Being Dependent on Expensive Agencies</h1>
                <p className='text-center text-[1.2rem] w-full lg:w-[70%] text-gray-500 px-1 lg:px-15'>Most businesses waste thousands on agencies that promise the world but deliver mediocre results. There's a better way</p>
            </div>

            <div className="max-w-[1250px] mt-10 mx-auto p-5 flex justify-between items-start gap-10 mb-10 flex-col lg:flex-row">
                <div className="flex flex-col gap-10 w-full lg:w-1/2">
                    <div className='flex items-start gap-4'>
                        <div className="image text-[#dc2626] rounded-2xl p-4 bg-[#fee2e2]"><DollarSign /></div>
                        <div className="text flex flex-col gap-1">
                            <h2 className='text-[1.10rem] font-semibold'>Expensive Monthly Retainers</h2>
                            <p className='text-gray-500'>Agencies charge $5,000-$15,000+ monthly with no guarantee of results</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className="image text-[#dc2626] rounded-2xl p-4 bg-[#fee2e2]"><Users /></div>
                        <div className="text flex flex-col gap-1">
                            <h2 className='text-[1.10rem] font-semibold'>Loss of Control</h2>
                            <p className='text-gray-500'>Your marketing becomes a black box that you don't understand</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className="image text-[#dc2626] rounded-2xl p-4 bg-[#fee2e2]"><TargetIcon /></div>
                        <div className="text flex flex-col gap-1">
                            <h2 className='text-[1.10rem] font-semibold'>Misaligned Incentives</h2>
                            <p className='text-gray-500'>Agencies profit from your ad spend, not your business growth</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-full lg:w-1/2 p-8 rounded-2xl bg-gradient-to-br from-[#059669] to-[#0d9488] text-white">
                    <h3 className="text-2xl font-bold mb-6">Pfeifer Media Way</h3>
                    <div className='space-y-4'>
                        <div className="flex items-start space-x-3"><CheckCircle color='#a7f3d0' /><span>Build your own expert marketing team</span></div>
                        <div className="flex items-start space-x-3"><CheckCircle color='#a7f3d0' /><span>Complete control over your marketing</span></div>
                        <div className="flex items-start space-x-3"><CheckCircle color='#a7f3d0' /><span>Fraction of the cost (just $100/week)</span></div>
                        <div className="flex items-start space-x-3"><CheckCircle color='#a7f3d0' /><span>Keep all the knowledge in-house</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvisingSection;