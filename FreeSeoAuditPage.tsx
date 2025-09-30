import React, { useState } from 'react';

interface AuditFeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AuditFeature: React.FC<AuditFeatureProps> = ({ icon, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#44001b] text-white">
                {icon}
            </div>
        </div>
        <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);


const FreeSeoAuditPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        website: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle form submission here (e.g., send to an API)
        alert('Thank you for requesting your audit! The Bammy Growth Hub team will be in touch shortly with your personalized report.');
        setFormData({ name: '', company: '', email: '', website: '', message: '' });
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Get Your Free, In-Depth SEO Audit</h1>
                    <p className="text-xl text-gray-600">
                        Uncover the hidden opportunities to rank higher, drive more traffic, and increase revenue. Our comprehensive audit provides a clear, actionable roadmap for SEO success.
                    </p>
                </div>
            </section>

            {/* Main Content: Features + Form */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* What Your Audit Includes */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Your Free Audit Includes</h2>
                        <div className="space-y-10">
                            <AuditFeature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                title="Technical Health Check"
                                description="We analyze your site's speed, mobile-friendliness, crawlability, and indexation to ensure search engines can effectively read and rank your pages."
                            />
                            <AuditFeature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                title="On-Page & Content Analysis"
                                description="Our team reviews your content, keyword targeting, meta tags, and internal linking to identify opportunities for quick ranking improvements."
                            />
                            <AuditFeature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                                title="Competitor SEO Snapshot"
                                description="We'll give you a high-level overview of where you stand against your main competitors in the search landscape."
                            />
                            <AuditFeature
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v- உண்மையில்" /></svg>}
                                title="Actionable Roadmap"
                                description="You won't just get data; you'll get a clear, prioritized list of the top 3-5 actions you can take to immediately improve your SEO performance."
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#F6F1EC] p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Claim Your Free Audit</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" name="company" id="company" required value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]" />
                            </div>
                             <div>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website URL</label>
                                <input type="url" name="website" id="website" required value={formData.website} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">What is your biggest SEO challenge?</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-[#44001b] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg">
                                    Get My Free Audit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Direct Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions Before You Request?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                         Feel free to reach out directly. We're happy to answer any questions you have about our process or how we can help your business.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                         <div className="text-lg flex items-center">
                            <svg className="w-6 h-6 text-[#44001b] mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:toluwalopeakano21@gmail.com" className="font-semibold text-[#44001b] hover:underline">toluwalopeakano21@gmail.com</a>
                         </div>
                         <div className="text-lg flex items-center">
                            <svg className="w-6 h-6 text-[#44001b] mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a href="tel:09131125328" className="font-semibold text-[#44001b] hover:underline">09131125328</a>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeSeoAuditPage;