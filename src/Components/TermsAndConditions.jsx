import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Scale, FileText, Users, AlertTriangle, CreditCard, Shield, Clock } from 'lucide-react'

function TermsAndConditions() {
    return (
        <>
            <header className="bg-gradient-to-r to-[#1f2937] from-[#1e293b] text-white py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-4">
                        <Link to="/" className='text-neutral-300 hover:text-white transition-colors mr-6 inline-flex items-center gap-3'>
                            <ArrowLeft />
                            Back to Home
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Scale size={32} className='mr-3' />
                        <div>
                            <h1 className="text-3xl font-bold">Terms &amp; Conditions</h1>
                            <p className="text-neutral-300 mt-2">Legal terms governing your use of our services</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-none">
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6 mb-8">
                        <div className="flex items-start">
                            <FileText color='#475569' size={32} className='mr-3' />
                            <div>
                                <h3 className="text-lg font-semibold text-[#1e293b] mb-2">Agreement Overview</h3>
                                <p className="text-[#334155] text-sm leading-relaxed">These Terms and Conditions govern your use of Pfeifer Media's services. By accessing our website or using our services, you agree to be bound by these terms.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-neutral-600 mb-8"><strong>Last Updated:</strong> January 1, 2025</p>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Users size={25} color='#475569' className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Acceptance of Terms</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-neutral-700">By accessing and using Pfeifer Media's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
                            <div className="bg-[#fffbeb] border border-[#fde68a] rounded-lg p-6">
                                <div className="flex items-start">
                                    <AlertTriangle color='#d97706' className='mr-3' />
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#92400e] mb-2">Important Notice</h3>
                                        <p className="text-[#b45309] text-sm">If you do not agree with any part of these terms, you must not use our services. Continued use of our services constitutes acceptance of any updates to these terms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <FileText size={25} color='#475569' className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Service Description</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">What We Provide</h3>
                                <p className="text-neutral-700 mb-4">Pfeifer Media provides marketing education and training services designed to help businesses build their own internal marketing capabilities. Our services include:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>6-week marketing training program</li>
                                    <li>Strategy consultation sessions</li>
                                    <li>Educational content and resources</li>
                                    <li>Implementation guidance and support</li>
                                    <li>Performance tracking and optimization advice</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-[#64748b] pl-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Service Limitations</h3>
                                <p className="text-neutral-700">Our services are educational in nature. We provide training and guidance, but we do not guarantee specific business outcomes or results. Success depends on your implementation of the strategies and techniques we teach.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <CreditCard size={25} color='#475569' className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Pricing and Payment Terms</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-[#065f46] mb-3">Program Pricing</h3>
                                    <ul className="text-[#047857] space-y-2 text-sm">
                                        <li>• 6-week program: $600 total ($100/week)</li>
                                        <li>• Payment plans available</li>
                                        <li>• No hidden fees or additional costs</li>
                                        <li>• All materials and resources included</li>
                                    </ul>
                                </div>
                                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-[#1e40af] mb-3">Payment Terms</h3>
                                    <ul className="text-[#1d4ed8] space-y-2 text-sm">
                                        <li>• Payment due upon enrollment</li>
                                        <li>• Secure payment processing</li>
                                        <li>• Refunds subject to our refund policy</li>
                                        <li>• Prices subject to change with notice</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Refund Policy</h3>
                                <p className="text-neutral-700 mb-4">We offer a satisfaction guarantee for our services:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>Full refund available within 14 days of program start</li>
                                    <li>Partial refunds may be available for unused portions of the program</li>
                                    <li>Refund requests must be submitted in writing</li>
                                    <li>Processing time: 5-10 business days</li>
                                    <li>Refunds issued to original payment method</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Shield className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">User Responsibilities</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-neutral-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Your Obligations</h3>
                                <p className="text-neutral-700 mb-4">As a user of our services, you agree to:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>Provide accurate and complete information</li>
                                    <li>Maintain the confidentiality of your account credentials</li>
                                    <li>Use our services only for lawful purposes</li>
                                    <li>Respect intellectual property rights</li>
                                    <li>Not share or redistribute our proprietary content</li>
                                    <li>Participate actively and professionally in training sessions</li>
                                </ul>
                            </div>
                            <div className="border border-neutral-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Prohibited Activities</h3>
                                <p className="text-neutral-700 mb-4">You may not:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>Copy, modify, or distribute our content without permission</li>
                                    <li>Use our services to compete with us or create similar offerings</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with other users' experience</li>
                                    <li>Violate any applicable laws or regulations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Scale color='#475569' className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Intellectual Property</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-[#f8fafc] rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Our Content</h3>
                                <p className="text-neutral-700 mb-4">All content provided through our services, including but not limited to text, graphics, logos, videos, audio, software, and training materials, is the property of Pfeifer Media and is protected by copyright and other intellectual property laws.</p><p className="text-neutral-700">You are granted a limited, non-exclusive, non-transferable license to access and use our content solely for your personal business development purposes.</p>
                            </div>
                            <div className="bg-[#f8fafc] rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Your Content</h3>
                                <p className="text-neutral-700">Any content you provide to us (such as feedback, questions, or case studies) may be used by us for improving our services, creating testimonials, or developing new content, unless you specifically request otherwise.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <AlertTriangle color='#475569' className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Disclaimers and Limitations</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-[#991b1b] mb-3">No Guarantee of Results</h3>
                                <p className="text-[#b91c1c] text-sm leading-relaxed">While we provide proven strategies and methodologies, we cannot guarantee specific business results, revenue increases, or marketing outcomes. Success depends on various factors including your implementation, market conditions, and business circumstances.</p>
                            </div>
                            <div className="bg-[#fffbeb] border border-[#fde68a] rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-[#92400e] mb-3">Service Availability</h3>
                                <p className="text-[#b45309] text-sm leading-relaxed">We strive to provide uninterrupted access to our services, but we cannot guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue services with reasonable notice.</p>
                            </div>
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Limitation of Liability</h3>
                                <p className="text-neutral-700 text-sm leading-relaxed">To the maximum extent permitted by law, Pfeifer Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Clock className='mr-3' />
                            <h2 className="text-2xl font-bold text-neutral-900">Termination</h2>
                        </div><div className="space-y-4">
                            <div className="border border-neutral-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Termination by You</h3>
                                <p className="text-neutral-700">You may terminate your participation in our program at any time by contacting us. Refunds will be handled according to our refund policy outlined above.</p>
                            </div>
                            <div className="border border-neutral-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Termination by Us</h3>
                                <p className="text-neutral-700 mb-4">We reserve the right to terminate or suspend your access to our services if you:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                                    <li>Violate these Terms and Conditions</li>
                                    <li>Engage in prohibited activities</li>
                                    <li>Fail to make required payments</li>
                                    <li>Behave inappropriately toward staff or other participants</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Privacy and Data Protection</h2>
                        <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg p-6">
                            <p className="text-[#059669] mb-4">Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy.</p>
                            <Link className="inline-flex items-center text-[#059669] hover:text-[#065f46] font-medium" to="/privacypolicy">Read our Privacy Policy <ArrowRight size={20} className='ml-1' />
                            </Link>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Changes to Terms</h2>
                        <div className="space-y-4">
                            <p className="text-neutral-700">We reserve the right to modify these Terms and Conditions at any time. We will notify users of material changes by posting the updated terms on our website and updating the "Last Updated" date.</p>
                            <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-6">
                                <p className="text-[#1e40af]">Continued use of our services after changes are posted constitutes acceptance of the new terms. We encourage you to review these terms periodically.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2>
                        <div className="bg-gradient-to-r from-[#1e293b] to-[#1f2937] rounded-lg p-8 text-white">
                            <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
                            <p className="mb-6 text-neutral-300">If you have any questions about these Terms and Conditions, please contact us using the information below.</p>
                            <div className="space-y-2 text-neutral-300">
                                <p><strong>Email:</strong> info@beenburnedbefore.com</p>
                                <p><strong>Address:</strong> Pfeifer Media, Legal Department</p>
                                <p><strong>Response Time:</strong> We aim to respond to all legal inquiries within 48 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Severability</h2>
                        <p className="text-neutral-700">If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining terms will remain in full force and effect.</p>
                    </div>
                </div>
            </div>
            <footer className="bg-[#111827] text-neutral-400 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">© 2025 Pfeifer Media. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default TermsAndConditions