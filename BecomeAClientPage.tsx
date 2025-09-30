import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProcessStepProps {
    step: string;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#44001b] text-white font-bold text-xl">
                {step}
            </div>
        </div>
        <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);


const BecomeAClientPage = () => {
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
        alert('Thank you for your submission! The Bammy Growth Hub team will be in touch shortly.');
        setFormData({ name: '', company: '', email: '', website: '', message: '' });
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Let's Start Your Growth Journey</h1>
                    <p className="text-xl text-gray-600">
                        Partnering with Bammy Growth Hub is a straightforward and transparent process. We're excited to learn about your business and explore how we can achieve remarkable results together.
                    </p>
                </div>
            </section>

            {/* Main Content: Process + Form */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Onboarding Process */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Onboarding Process</h2>
                        <div className="space-y-10">
                            <ProcessStep 
                                step="1"
                                title="Discovery Call"
                                description="A 30-minute introductory call where we learn about your business, goals, and challenges. This is a chance for us to understand your vision and for you to ask any initial questions."
                            />
                            <ProcessStep 
                                step="2"
                                title="Strategy & Proposal"
                                description="Our team conducts preliminary research and develops a tailored proposal outlining a custom strategy, deliverables, timeline, and pricing. We'll walk you through it to ensure it aligns perfectly with your goals."
                            />
                            <ProcessStep 
                                step="3"
                                title="Onboarding & Kick-off"
                                description="Once we agree to partner, we'll have a formal kick-off meeting. We'll set up all necessary accounts, gain access to your platforms, and establish our communication channels and reporting schedule."
                            />
                            <ProcessStep 
                                step="4"
                                title="Execution & Growth"
                                description="With everything in place, the Bammy Growth Hub team begins executing the strategy. You'll receive regular updates and detailed performance reports as we work collaboratively towards your growth."
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#F6F1EC] p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Start the Conversation</h2>
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
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your goals</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#44001b] focus:border-[#44001b]"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-[#44001b] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Direct Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Or Contact Us Directly</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Prefer to talk? We're here to help. Reach out via phone or email to start the conversation.
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

export default BecomeAClientPage;