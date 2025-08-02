import { Link } from "react-router-dom"
import { Shield, ArrowLeft, UserCheck, Eye, FileText, Lock, Mail } from "lucide-react";

function PrivacyPolicy() {
    return (
        <div>
            <header className="bg-gradient-to-r from-[#059669] to-[#0d9488] text-white py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-4">
                        <Link className="inline-flex items-center gap-2 text-[#d1fae5] hover:text-white transition-colors mr-6" to="/"><ArrowLeft size={20} />Back to Home</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Shield size={32} />
                        <div>
                            <h1 className="text-3xl font-bold">Privacy Policy</h1>
                            <p className="text-primary-100 mt-2">How we protect and handle your personal information</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-none">
                    <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg p-6 mb-8">
                        <div className="flex items-start">
                            <UserCheck size={40} color="#059669" className="mr-3" />
                            <div>
                                <h1 className="text-lg font-semibold mb-2 text-[#065f46]">Your Privacy Matters</h1>
                                <p className="text-[#047857] text-sm leading-relaxed">At Pfeifer Media, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-neutral-600 mb-8"><strong>Last Updated:</strong> January 1, 2025</p>
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Eye color="#059669" className="mr-3" />
                            <h2 className="text-2xl font-bold text-neutral-900">Information We Collect</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Personal Information</h3>
                                <p className="text-neutral-700 mb-4">When you interact with our services, we may collect the following personal information:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>Name (first and last)</li>
                                    <li>Email address</li>
                                    <li>Company name and position</li>
                                    <li>Phone number (if provided)</li>
                                    <li>Business information and marketing needs</li>
                                </ul>
                            </div>
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Automatically Collected Information</h3>
                                <p className="text-neutral-700 mb-4">We automatically collect certain information when you visit our website:</p>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li>IP address and location data</li>
                                    <li>Browser type and version</li>
                                    <li>Device information</li>
                                    <li>Pages visited and time spent on our site</li>
                                    <li>Referring website information</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <FileText color="#059669" className="mr-3" />
                            <div className="text-2xl font-bold text-neutral-900">
                                How We Use Your Information
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-[#10b981] pl-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Service Delivery</h3>
                                <p className="text-neutral-700">We use your information to provide our marketing training services, schedule strategy sessions, and deliver personalized content and recommendations.</p>
                            </div>
                            <div className="border-l-4 border-[#14b8a6] pl-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Communication</h3>
                                <p className="text-neutral-700">We may contact you with important updates about our services, marketing insights, and educational content that aligns with your interests.</p>
                            </div>
                            <div className="border-l-4 border-[#3b82f6] pl-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Improvement and Analytics</h3>
                                <p className="text-neutral-700">We analyze usage patterns to improve our website, services, and user experience. This helps us create better content and more effective training programs.</p>
                            </div>
                            <div className="border-l-4 border-[#8b5cf6] pl-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Legal Compliance</h3>
                                <p className="text-neutral-700">We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Lock color="#059669" className="mr-3" />
                            <h2 className="text-2xl font-bold text-neutral-900">Data Protection and Security</h2>
                        </div>
                        <div className="bg-gradient-to-r from-[#ecfdf5] to-[#f0fdfa] rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Security Measures</h3>
                            <p className="text-neutral-700 mb-4">We implement industry-standard security measures to protect your personal information:</p>
                            <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                <li>SSL encryption for data transmission</li>
                                <li>Secure servers with regular security updates</li>
                                <li>Access controls and authentication protocols</li>
                                <li>Regular security audits and monitoring</li>
                                <li>Employee training on data protection practices</li>
                            </ul>
                        </div>
                        <div className="bg-[#fffbeb] border border-[#fde68a] rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#92400e] mb-3">Data Retention</h3>
                            <p className="text-[#b45309]">We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. You may request deletion of your data at any time.</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <UserCheck color="#059669" className="mr-3" />
                            <h2 className="text-2xl font-bold text-neutral-900">Your Rights and Choices</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Access and Correction</h3>
                                <p className="text-neutral-700 text-sm">You have the right to access, update, or correct your personal information. Contact us to review or modify your data.</p>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Data Portability</h3>
                                <p className="text-neutral-700 text-sm">You can request a copy of your personal data in a structured, machine-readable format.</p>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Deletion</h3>
                                <p className="text-neutral-700 text-sm">You may request deletion of your personal information, subject to legal and contractual obligations.</p>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Opt-Out</h3>
                                <p className="text-neutral-700 text-sm">You can unsubscribe from marketing communications at any time using the unsubscribe link in our emails.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Cookies and Tracking Technologies</h2>
                        <div className="space-y-4">
                            <p className="text-neutral-700">We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. These technologies help us understand how you interact with our site and improve our services.</p>
                            <div className="bg-neutral-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Types of Cookies We Use</h3>
                                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
                                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
                                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                                </ul>
                            </div>
                            <p className="text-neutral-700">You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Third-Party Services</h2>
                        <p className="text-neutral-700 mb-4">We may use third-party services to enhance our offerings. These services have their own privacy policies:</p>
                        <div className="space-y-4">
                            <div className="border border-neutral-200 rounded-lg p-4">
                                <h3 className="font-semibold text-neutral-900">Analytics Providers</h3>
                                <p className="text-neutral-700 text-sm mt-1">We use analytics services to understand website usage and improve user experience.</p>
                            </div>
                            <div className="border border-neutral-200 rounded-lg p-4"><h3 className="font-semibold text-neutral-900">Email Marketing Platforms</h3>
                                <p className="text-neutral-700 text-sm mt-1">We use email marketing services to send newsletters and marketing communications.</p>
                            </div>
                            <div className="border border-neutral-200 rounded-lg p-4">
                                <h3 className="font-semibold text-neutral-900">Payment Processors</h3>
                                <p className="text-neutral-700 text-sm mt-1">We use secure payment processors to handle transactions and billing information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Children's Privacy</h2>
                        <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-6">
                            <p className="text-[#1e40af]">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">International Data Transfers</h2>
                        <p className="text-neutral-700 mb-4">Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your personal information.</p>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Changes to This Privacy Policy</h2>
                        <p className="text-neutral-700 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.</p>
                        <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg p-6">
                            <p className="text-[#065f46]">We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Mail color="#059669" className="mr-3" />
                            <h2 className="text-2xl font-bold text-neutral-900">Contact Us</h2>
                        </div>
                        <div className="bg-gradient-to-r from-[#059669] to-[#0d9488] rounded-lg p-8 text-white">
                            <h3 className="text-xl font-semibold mb-4">Questions About Your Privacy?</h3>
                            <p className="mb-6">If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.</p>
                            <div className="space-y-2 text-primary-100">
                                <p><strong>Email:</strong> info@beenburnedbefore.com</p>
                                <p><strong>Address:</strong> Pfeifer Media, Privacy Department</p>
                                <p><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="bg-[#111827] text-neutral-400 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">© 2025 Pfeifer Media. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default PrivacyPolicy;