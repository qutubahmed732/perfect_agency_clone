import { User, Mail, Phone, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Form() {
    return (
        <section className="w-full pb-20">
            <div className="max-w-4xl my-20 mx-auto text-center">
                <h1 className="font-bold text-4xl mb-4">Get Your Free Marketing Strategy Session</h1>
                <p className="text-xl text-neutral-500 px-3">Discover how to build your own marketing team and stop depending on expensive agencies</p>
            </div>

            <div className="bg-gradient-to-br to-[#f0fdfa] from-[#ecfdf5] max-w-[830px] mx-auto rounded-3xl p-8 lg:p-12">
                <form action="#" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-2">First Name *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type="text" id="firstName" name="firstName" required="" className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 disabled:bg-neutral-100 disabled:cursor-not-allowed bg-white outline-none" placeholder="First Name" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-700 mb-2">Last Name *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type="text" id="lastName" name="firstName" required="" className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 disabled:bg-neutral-100 disabled:cursor-not-allowed bg-white outline-none" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">Email Address *</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <input type="email" id="email" name="email" required="" className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 disabled:bg-neutral-100 disabled:cursor-not-allowed bg-white outline-none" placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">Phone Number *</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <input type="tel" id="phone" name="phone" required="" className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 disabled:bg-neutral-100 disabled:cursor-not-allowed bg-white outline-none" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-neutral-200">
                        <div className="flex items-start space-x-3">
                            <input type="checkbox" id="consent" name="consent" className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 disabled:cursor-not-allowed" />
                            <label htmlFor="consent" className="text-sm text-neutral-700 leading-relaxed">
                                By checking this box, I consent to receive transactional, marketing, and promotional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, account notifications, special offers, discounts, and new product updates, among others. Message frequency may vary. Message &amp; Data rates may apply. Reply STOP to opt-out.
                            </label>
                        </div>
                    </div>
                    <button className="flex items-end gap-2 border mx-auto font-bold text-xl px-12 py-4 rounded-lg text-white bg-gradient-to-br to-[#0d9488] from-[#059669] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:to-[#0f766e] hover:from-[#047857]">
                        Get My Free Strategy Session <ArrowRight />
                    </button>
                    <p className="mt-4 text-sm text-neutral-600 mx-auto text-center">
                        <Link to="/privacypolicy" className="text-[#059669] underline hover:no-underline mr-4">Privacy Policy</Link>
                        <span className="text-neutral-400 mr-4">|</span>
                        <Link to="/termsandconditions" className="text-[#059669] underline hover:no-underline">Terms & Conditions</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Form