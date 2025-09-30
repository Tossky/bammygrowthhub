import React from 'react';
import { Link } from 'react-router-dom';

// Reusable components
interface ServiceDetailCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ icon, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-[#F6F1EC] rounded-lg text-[#44001b]">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);

const BusinessGrowthPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">It’s Time to Evolve Beyond a Plateau</h1>
          <p className="text-xl text-gray-600">
            Marketing drives leads, but true, sustainable growth requires a holistic strategy. At Bammy Growth Hub, we partner with you to build a resilient, scalable business engine that optimizes every facet of your operation for long-term success.
          </p>
        </div>
      </section>

      {/* Strategic Growth Consulting Section */}
      <section id="consulting" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Growth Consulting</h2>
              <p className="text-gray-600 mb-8 text-lg">We dig deep into the core of your business to build a custom roadmap for expansion. This isn't about guesswork; it's about data-driven strategy that aligns your operations, finances, and market positioning for maximum impact.</p>
              <div className="space-y-6">
                <ServiceDetailCard 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                  title="Market Opportunity Analysis"
                  description="We identify untapped market segments, analyze competitor weaknesses, and define your unique value proposition to carve out a dominant position."
                />
                <ServiceDetailCard 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                  title="Financial Modeling & Forecasting"
                  description="Gain clarity on your financial future. We create detailed models to forecast revenue, manage cash flow, and secure profitability as you scale."
                />
                 <ServiceDetailCard 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  title="Operational Efficiency"
                  description="We streamline your workflows, identify automation opportunities, and optimize your processes to reduce costs and improve output."
                />
              </div>
          </div>
          <div>
            <img src="https://picsum.photos/600/700?random=5" alt="Strategic Growth Consulting" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Ecommerce Growth Engine Section */}
      <section id="ecommerce" className="py-20 px-4 bg-[#F6F1EC]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="md:col-start-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The E-commerce Growth Engine</h2>
                <p className="text-gray-600 mb-8 text-lg">We transform online stores into high-performance revenue machines. Our end-to-end approach covers everything from the foundational platform architecture to the sophisticated strategies that increase customer lifetime value.</p>
                <div className="space-y-6">
                     <ServiceDetailCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
                      title="Platform Architecture & Setup"
                      description="Building on the right foundation (Shopify, WooCommerce, Magento) with a focus on speed, mobile experience, and scalability."
                    />
                    <ServiceDetailCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M12 10.5h.01M12 13.5h.01M12 16.5h.01" /></svg>}
                      title="Conversion Rate Optimization (CRO)"
                      description="A/B testing, user journey analysis, and checkout optimization to convert more visitors into paying customers."
                    />
                    <ServiceDetailCard 
                      icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                      title="Customer Retention & Loyalty"
                      description="Implementing email automation, loyalty programs, and personalized experiences to increase Customer Lifetime Value (CLV)."
                    />
                </div>
            </div>
            <div className="md:col-start-1 row-start-1 md:row-start-auto">
                <img src="https://picsum.photos/600/700?random=6" alt="E-commerce Growth" className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>
      
      {/* The Framework Section */}
      <section id="partner" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bammy Growth Hub Framework</h2>
            <p className="text-lg text-gray-600 mb-12">Our proven, four-step process ensures a structured and accountable partnership focused on delivering measurable outcomes.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">1. Diagnose</h3>
                    <p className="text-gray-600">A deep-dive audit of your business, market, and competitors to establish a clear baseline and identify key opportunities.</p>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">2. Strategize</h3>
                    <p className="text-gray-600">Development of a custom, actionable roadmap with clear KPIs, timelines, and defined objectives.</p>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">3. Execute</h3>
                    <p className="text-gray-600">Hands-on implementation of the strategy by our team of dedicated experts, working as an extension of yours.</p>
                </div>
                 <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">4. Iterate</h3>
                    <p className="text-gray-600">Continuous analysis, reporting, and optimization to ensure we are always improving and capitalizing on new insights.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#44001b] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Build Your Growth Engine?</h2>
            <p className="text-lg text-gray-300 mt-4 mb-8">
                Stop leaving growth to chance. Let's build a strategic, data-driven plan to scale your business. Schedule your free consultation with a Bammy Growth Hub strategist today.
            </p>
            <Link 
                to="/become-a-client" 
                className="inline-block bg-white text-[#44001b] font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg"
            >
                Schedule My Free Consultation
            </Link>
        </div>
      </section>

    </div>
  );
};

export default BusinessGrowthPage;
