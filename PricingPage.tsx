import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
    tier: string;
    price: string;
    originalPrice?: string;
    period?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    discount?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, price, originalPrice, period = "/mo", description, features, isPopular = false, discount }) => (
    <div className={`relative border rounded-lg p-8 shadow-lg bg-white flex flex-col ${isPopular ? 'border-2 border-[#44001b] shadow-2xl' : ''}`} >
        {isPopular && <span className="absolute top-0 -translate-y-1/2 bg-[#44001b] text-white px-3 py-1 text-sm font-bold rounded-full self-center z-10">Most Popular</span>}
        {discount && (
            <span 
                className={`absolute bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-full self-center z-10 
                ${isPopular ? 'top-8' : 'top-0'} -translate-y-1/2`}
            >
                {discount}
            </span>
        )}
        
        <h3 className="font-bold text-2xl mb-2 text-center pt-5">{tier}</h3>
        <p className="text-gray-500 mb-6 text-center">{description}</p>
        
        {originalPrice ? (
            <div className="text-center">
                <p className="text-2xl text-gray-400 line-through">{originalPrice}<span className="text-lg font-normal">{period}</span></p>
                <p className="text-5xl font-bold text-gray-900 mb-2">{price}<span className="text-lg font-normal text-gray-500">{period}</span></p>
            </div>
        ) : (
            <p className="text-5xl font-bold text-gray-900 mb-2 text-center">{price}<span className="text-lg font-normal text-gray-500">{period}</span></p>
        )}

        <div className="border-t my-6"></div>
        <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Link to="/become-a-client" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-200 text-lg ${isPopular ? 'bg-[#44001b] text-white hover:bg-opacity-90' : 'bg-gray-100 text-[#44001b] hover:bg-gray-200'}`}>
            Get Started
        </Link>
    </div>
);


interface FAQItemProps {
    question: string;
    answer: string;
}
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-5 text-left">
                <span className="font-semibold text-lg">{question}</span>
                <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && <div className="pb-5 pr-10 text-gray-600">{answer}</div>}
        </div>
    );
};

const PricingPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Transparent Pricing for Sustainable Growth</h1>
                    <p className="text-xl text-gray-600">
                        No hidden fees, no confusing contracts. Just straightforward pricing for results-driven strategies. Find the perfect plan from Bammy Growth Hub to fuel your business's journey.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-bold text-green-700 bg-green-100 border border-green-200 rounded-full inline-block px-6 py-2">
                            LIMITED TIME OFFER: New clients get 20% OFF for the first 2 months!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <PricingCard
                            tier="Starter SEO"
                            price="$1,200"
                            originalPrice="$1,500"
                            discount="20% OFF"
                            description="For small businesses & startups building their foundation."
                            features={[
                                "Comprehensive Website Audit",
                                "Keyword Research (up to 50 keywords)",
                                "On-Page SEO Optimization",
                                "Google Business Profile Setup & Optimization",
                                "Local Citation Building (20 listings)",
                                "Monthly Performance Report",
                            ]}
                        />
                        <PricingCard
                            tier="Growth Pro"
                            price="$2,800"
                            originalPrice="$3,500"
                            discount="20% OFF"
                            description="For established businesses ready to scale and increase market share."
                            features={[
                                "Everything in Starter SEO",
                                "Advanced Technical SEO Audit",
                                "Content Strategy & Creation (2 articles/mo)",
                                "High-Quality Backlink Building",
                                "Conversion Rate Optimization (CRO) Insights",
                                "Dedicated Account Manager",
                                "Quarterly Strategy Review"
                            ]}
                            isPopular={true}
                        />
                        <PricingCard
                            tier="Enterprise"
                            price="Custom"
                            period=""
                            description="For large-scale businesses in competitive industries."
                            features={[
                                "Everything in Growth Pro",
                                "Full-Funnel Digital Strategy",
                                "Multi-channel Campaign Management (SEO, PPC, Social)",
                                "Advanced Analytics & Custom Dashboards",
                                "Dedicated Team of Specialists",
                                "Weekly Strategy Calls",
                                "API & Platform Integrations"
                            ]}
                        />
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-20 bg-[#F6F1EC]">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <FAQItem question="Do you require long-term contracts?" answer="We believe in earning your business every month. For our Starter and Growth Pro plans, we work on a flexible month-to-month basis after an initial 3-month commitment to allow our strategies to take effect. Enterprise plans are typically based on a 6 or 12-month agreement." />
                    <FAQItem question="What if I need a custom package?" answer="We understand that every business is unique. We frequently create custom packages tailored to specific goals and budgets. The best way to start is to book a free consultation so we can learn more about your needs and build a plan that's right for you." />
                    <FAQItem question="How is reporting and communication handled?" answer="Transparency is a core value at Bammy Growth Hub. You'll receive a detailed monthly report outlining key metrics, progress against our goals, and our plans for the upcoming month. Your dedicated account manager will be your primary point of contact for any questions." />
                     <FAQItem question="What's the difference between Starter SEO and Growth Pro?" answer="Starter SEO focuses on building a strong, essential foundation—perfect for new businesses or those new to SEO. Growth Pro is more aggressive, adding content marketing and backlink building to actively scale your visibility and authority, making it ideal for businesses in more competitive markets." />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Not Sure Which Plan is Right for You?</h2>
                    <p className="text-lg text-gray-600 mt-4 mb-8">
                        Let's figure it out together. Schedule a free, no-pressure strategy call with a Bammy Growth Hub expert. We'll analyze your goals and recommend the perfect path forward.
                    </p>
                    <Link 
                        to="/become-a-client" 
                        className="inline-block bg-[#44001b] text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg"
                    >
                        Schedule My Free Consultation
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default PricingPage;