import React from 'react';
import { Link } from 'react-router-dom';

interface IndustryCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, link }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
        <div className="text-[#44001b] mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link} className="font-semibold text-[#44001b] hover:text-[#2d0012] transition-colors self-start group mt-auto">
            Learn More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
    </div>
);


const IndustriesPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Bammy Growth Hub: Expertise Across Diverse Industries</h1>
                    <p className="text-xl text-gray-600">
                        We don't believe in one-size-fits-all. We tailor our strategies to the unique challenges and opportunities of your industry, ensuring our approach resonates with your specific audience and market landscape.
                    </p>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            title="E-commerce"
                            description="From Shopify to custom builds, we drive targeted traffic, optimize conversion rates, and increase average order value for online retailers."
                            link="/industry/e-commerce"
                        />
                        <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            title="Local Services"
                            description="For plumbers, electricians, and home service businesses, we dominate local search results to drive phone calls and book appointments."
                            link="/industry/local-services"
                        />
                        <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5m-5-4h.01M9 7h.01M13 7h.01M13 11h.01M13 15h.01M9 15h.01M9 19h.01M13 19h.01" /></svg>}
                            title="B2B & SaaS"
                            description="We generate high-quality MQLs and SQLs for B2B companies through targeted content marketing, account-based marketing, and LinkedIn strategies."
                            link="/industry/b2b-saas"
                        />
                        <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>}
                            title="Healthcare"
                            description="For medical practices and healthcare providers, we build patient trust and increase bookings through HIPAA-compliant marketing strategies."
                            link="/industry/healthcare"
                        />
                        <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                            title="Legal"
                            description="We help law firms attract high-value cases by enhancing online visibility and building authority in their specific practice areas."
                            link="/industry/legal"
                        />
                         <IndustryCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>}
                            title="And More"
                            description="Our foundational principles of growth marketing are adaptable. If you don't see your industry, let's talk about a custom solution."
                            link="/become-a-client"
                        />
                    </div>
                </div>
            </section>
            
            {/* Client Success Spotlight */}
            <section className="py-20 bg-[#F6F1EC]">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/600/500?random=12" alt="Client success" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="pr-8">
                        <h3 className="text-sm font-bold text-[#44001b] uppercase tracking-wide">Success Spotlight: E-commerce</h3>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">How Bammy Growth Hub Grew an Online Retailer by 320%</h2>
                        <p className="text-lg text-gray-600 mb-8">For 'Modern Threads,' a boutique clothing store, we implemented a multi-channel strategy focusing on technical SEO, targeted Google Shopping ads, and an influencer marketing campaign. The result was a 320% increase in year-over-year revenue and a 6:1 return on ad spend.</p>
                        <div className="flex space-x-8">
                            <div>
                                <p className="text-4xl font-bold text-[#44001b]">320%</p>
                                <p className="font-semibold text-gray-700">Revenue Growth</p>
                            </div>
                             <div>
                                <p className="text-4xl font-bold text-[#44001b]">6:1</p>
                                <p className="font-semibold text-gray-700">Return on Ad Spend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Is Your Industry Next?</h2>
                    <p className="text-lg text-gray-600 mt-4 mb-8">
                        No matter your field, Bammy Growth Hub's data-driven approach can uncover hidden growth opportunities. Let's create a strategy tailored for your market.
                    </p>
                    <Link 
                        to="/become-a-client" 
                        className="inline-block bg-[#44001b] text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg"
                    >
                        Start Your Growth Plan
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default IndustriesPage;