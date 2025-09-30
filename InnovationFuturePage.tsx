import React from 'react';
import { Link } from 'react-router-dom';

// Reusable components could be moved to a separate file, but are kept here for simplicity as requested.
interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  imageLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ id, title, description, imageUrl, benefits, imageLeft = false }) => (
  <section id={id} className="py-20 px-4">
    <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${imageLeft ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`${imageLeft ? 'md:col-start-2' : ''}`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-[#44001b] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${imageLeft ? 'md:col-start-1' : ''}`}>
        <img src={imageUrl} alt={title} className="rounded-lg shadow-xl" />
      </div>
    </div>
  </section>
);

const InnovationFuturePage = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Innovation & Future-Proofing with Bammy Growth Hub</h1>
          <p className="text-xl text-gray-600">
            Stay ahead of the curve. We help businesses leverage emerging technologies like AI and blockchain to create competitive advantages, streamline operations, and prepare for the future.
          </p>
        </div>
      </section>

      <ServiceSection
        id="ai"
        title="AI & Blockchain Implementation"
        description="Explore the potential of cutting-edge technology. Bammy Growth Hub consults on and implements AI-powered tools for marketing automation, data analysis, and customer service, as well as blockchain solutions for enhanced security and transparency."
        imageUrl="https://picsum.photos/600/400?random=7"
        benefits={[
          "Automate repetitive tasks",
          "Gain deeper data insights",
          "Enhance security and trust",
          "Create innovative business models"
        ]}
      />

      <section id="pricing" className="py-20 bg-[#F6F1EC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Pricing & Packages</h2>
            <p className="text-lg text-gray-600 mb-8">We offer flexible packages tailored to your specific needs and budget. Our pricing is transparent and focused on value.</p>
            <div className="mb-12">
                <p className="font-bold text-green-700 bg-green-100 border border-green-200 rounded-full inline-block px-6 py-2">
                    LIMITED TIME: 20% OFF for new clients for the first 2 months!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="border rounded-lg p-8 shadow-lg bg-white">
                    <h3 className="font-bold text-xl mb-2">Starter SEO</h3>
                    <p className="text-gray-500 mb-4">For small businesses and startups.</p>
                    <p className="text-xl text-gray-400 line-through">$1,500/mo</p>
                    <p className="text-4xl font-bold text-gray-900 mb-4">$1,200<span className="text-lg font-normal text-gray-500">/mo</span></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Local SEO Optimization</li>
                      <li>✓ On-Page SEO</li>
                      <li>✓ Monthly Reporting</li>
                    </ul>
                </div>
                <div className="border-2 border-[#44001b] rounded-lg p-8 shadow-2xl bg-white relative">
                    <span className="absolute top-0 -translate-y-1/2 bg-[#44001b] text-white px-3 py-1 text-sm font-bold rounded-full">Most Popular</span>
                    <h3 className="font-bold text-xl mb-2">Growth Pro</h3>
                    <p className="text-gray-500 mb-4">For established businesses aiming to scale.</p>
                    <p className="text-xl text-gray-400 line-through">$3,500/mo</p>
                    <p className="text-4xl font-bold text-gray-900 mb-4">$2,800<span className="text-lg font-normal text-gray-500">/mo</span></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Everything in Starter</li>
                      <li>✓ Content Marketing</li>
                      <li>✓ Link Building</li>
                    </ul>
                </div>
                <div className="border rounded-lg p-8 shadow-lg bg-white">
                    <h3 className="font-bold text-xl mb-2">Enterprise</h3>
                    <p className="text-gray-500 mb-4">For large-scale, competitive industries.</p>
                    <p className="text-4xl font-bold text-gray-900 mb-4">Custom</p>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Everything in Growth Pro</li>
                      <li>✓ Advanced Technical SEO</li>
                      <li>✓ Custom Strategy</li>
                    </ul>
                </div>
            </div>
             <div className="mt-12">
                <Link to="/pricing" className="inline-block font-bold text-[#44001b] py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Compare Plans & See Full Details &rarr;
                </Link>
            </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Future-Proof Your Business?</h2>
            <p className="text-lg text-gray-600 mt-4 mb-8">
                Let's discuss how emerging technologies can create new opportunities for your brand. Schedule a free, no-obligation consultation with our Bammy Growth Hub innovation experts today.
            </p>
            <Link 
                to="/free-consultation" 
                className="inline-block bg-[#44001b] text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg"
            >
                Request a Free Consultation
            </Link>
        </div>
      </section>

    </div>
  );
};

export default InnovationFuturePage;