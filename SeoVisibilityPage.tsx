import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className={` ${imageLeft ? 'md:col-start-2' : ''}`}>
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
      <div className={` ${imageLeft ? 'md:col-start-1' : ''}`}>
        <img src={imageUrl} alt={title} className="rounded-lg shadow-xl" />
      </div>
    </div>
  </section>
);


interface ProcessStepProps {
    step: number;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({step, title, description}) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full border-[#44001b]">
                    <span className="font-bold text-[#44001b]">{step}</span>
                </div>
            </div>
            <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900">{title}</p>
            <p className="text-gray-600">{description}</p>
        </div>
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


const SeoVisibilityPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Dominate Search with SEO & Visibility by Bammy Growth Hub</h1>
          <p className="text-xl text-gray-600">
            Increase your organic traffic, connect with your local audience, and build a technically sound website that search engines love. Our holistic SEO approach ensures you're seen by the right people at the right time.
          </p>
        </div>
      </section>

      <ServiceSection
        id="local-seo"
        title="Local SEO & Google Profile Optimization"
        description="Connect with customers in your community. Bammy Growth Hub optimizes your Google Business Profile and local citations to ensure you rank high in local searches and on Google Maps, driving foot traffic and local leads."
        imageUrl="https://picsum.photos/600/400?random=1"
        benefits={[
          "Higher local search rankings",
          "Increased calls and direction requests",
          "Improved brand trust in your community",
          "Optimized for 'near me' searches"
        ]}
      />

      <ServiceSection
        id="technical-seo"
        title="Technical & On-Page SEO Mastery"
        description="A solid technical foundation is key to ranking. We conduct comprehensive audits to fix issues like slow site speed, poor mobile usability, and crawl errors. We then optimize your on-page content to perfectly match search intent."
        imageUrl="https://picsum.photos/600/400?random=2"
        benefits={[
          "Faster website load times",
          "Enhanced user experience",
          "Better search engine crawlability",
          "Higher rankings for target keywords"
        ]}
        imageLeft={true}
      />
      
      <section id="process" className="py-20 bg-[#F6F1EC]">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Proven SEO Process at Bammy Growth Hub</h2>
            <div className="grid grid-cols-1">
                <ProcessStep step={1} title="Discovery & Strategy" description="We start by understanding your business, goals, and competitors. This allows us to build a custom SEO strategy tailored for maximum impact."/>
                <ProcessStep step={2} title="Implementation" description="Our team gets to work, implementing technical fixes, optimizing content, and building high-quality backlinks to boost your authority."/>
                <ProcessStep step={3} title="Analysis & Reporting" description="We track everything. You'll receive clear, concise reports showing your progress, keyword rankings, traffic growth, and ROI."/>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                      <div>
                          <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-[#44001b] border-[#44001b]">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                      </div>
                  </div>
                  <div className="pt-1">
                      <p className="text-xl font-bold text-gray-900">Continuous Growth</p>
                      <p className="text-gray-600">SEO is an ongoing process. We continuously refine our strategy based on data to ensure long-term, sustainable growth.</p>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            <FAQItem question="How long does it take to see SEO results?" answer="SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 4-6 months. This is because it takes time for search engines to crawl, index, and rank your updated site, and for authority to build." />
            <FAQItem question="What is the difference between on-page and off-page SEO?" answer="On-page SEO refers to optimizing elements on your website, like content, keywords, and HTML tags. Off-page SEO refers to actions taken outside of your website to impact your rankings, such as backlink building and social media marketing." />
            <FAQItem question="Why is Local SEO important?" answer="If you are a business that serves a specific geographic area, Local SEO is crucial. It helps you appear in 'near me' searches and on Google Maps, connecting you directly with customers who are actively looking for your services in your area." />
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-[#44001b] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Dominate Search?</h2>
            <p className="text-lg text-gray-300 mt-4 mb-8">
                Your customers are searching for you. Let's make sure they find you. Get a free, no-obligation SEO audit from Bammy Growth Hub and discover your roadmap to the top of the search results.
            </p>
            <Link 
                to="/free-seo-audit" 
                className="inline-block bg-white text-[#44001b] font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg"
            >
                Get My Free SEO Audit
            </Link>
        </div>
      </section>

    </div>
  );
};

export default SeoVisibilityPage;