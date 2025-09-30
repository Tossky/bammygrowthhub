import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Reusable components
interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  services: string[];
  imageLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ id, title, description, imageUrl, services, imageLeft = false }) => (
  <section id={id} className="py-20 px-4">
    <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${imageLeft ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`${imageLeft ? 'md:col-start-2' : ''}`}>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-[#44001b] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium">{service}</span>
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


const DigitalMarketingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Full-Funnel Digital Marketing That Drives Revenue</h1>
          <p className="text-xl text-gray-600">
            At Bammy Growth Hub, we architect and execute data-driven digital marketing campaigns that guide customers from initial awareness to becoming loyal brand advocates, maximizing your ROI at every stage.
          </p>
        </div>
      </section>

      {/* The Sales Funnel Section */}
      <section id="strategy" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Strategic Funnel Framework</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Every customer journey is a funnel. Bammy Growth Hub deploys the right tactics at the right time to move your audience seamlessly towards conversion and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Stage 1: Awareness */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F6F1EC] text-[#44001b] mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Awareness</h3>
                <p className="text-gray-600">Introducing your brand to a wide, yet targeted, audience who has never heard of you before.</p>
            </div>
            {/* Stage 2: Consideration */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F6F1EC] text-[#44001b] mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consideration</h3>
                <p className="text-gray-600">Engaging potential customers, educating them on your solutions, and building trust and credibility.</p>
            </div>
            {/* Stage 3: Conversion */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F6F1EC] text-[#44001b] mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conversion</h3>
                <p className="text-gray-600">Compelling qualified leads to take action, whether it's making a purchase, booking a demo, or signing up.</p>
            </div>
             {/* Stage 4: Loyalty */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F6F1EC] text-[#44001b] mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Loyalty</h3>
                <p className="text-gray-600">Delighting existing customers to encourage repeat business and turn them into vocal brand advocates.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection
        id="awareness"
        title="Top-of-Funnel: Building Awareness & Authority"
        description="We cast a wide net to capture the attention of your ideal customers. Our top-of-funnel strategies focus on driving qualified traffic and establishing your brand as a trusted voice in your industry."
        imageUrl="https://picsum.photos/600/400?random=3"
        services={[
          "Content Marketing (Blogs, Articles)",
          "Organic Social Media Management",
          "Search Engine Optimization (SEO)",
          "Public Relations & Outreach"
        ]}
      />
      
       <ServiceSection
        id="paid-ads"
        title="Precision-Targeted Social Media & Paid Ads"
        description="Accelerate your funnel with paid advertising. Bammy Growth Hub creates and manages campaigns that target users with precision based on demographics, interests, and online behavior. This allows us to capture high-intent leads and re-engage prospects to maximize conversions."
        imageUrl="https://picsum.photos/600/400?random=13"
        services={[
          "Facebook & Instagram Ads",
          "Google Search & Display Ads (PPC)",
          "LinkedIn Advertising (B2B)",
          "Funnel-Based Retargeting"
        ]}
        imageLeft={true}
      />


      <ServiceSection
        id="conversion"
        title="Bottom-of-Funnel: Driving Conversions & Revenue"
        description="This is where we turn interest into action. Our bottom-of-funnel strategies are hyper-focused on persuading high-intent prospects to make a purchase or commitment."
        imageUrl="https://picsum.photos/600/400?random=8"
        services={[
          "Conversion Rate Optimization (CRO)",
          "Email Marketing Automation",
          "E-commerce Promotions",
          "Landing Page Design & Testing"
        ]}
      />

      <section id="client-results" className="py-20 bg-[#44001b] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">The Results of a Full-Funnel Approach</h2>
          <p className="text-lg text-gray-300 mb-12">By optimizing the entire customer journey, we don't just increase traffic—we build sustainable revenue engines for our clients at Bammy Growth Hub.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <p className="text-5xl font-bold text-white">182%</p>
              <p className="mt-2 font-semibold">Avg. Increase in Organic Traffic</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <p className="text-5xl font-bold text-white">320%</p>
              <p className="mt-2 font-semibold">Avg. Growth in Qualified Leads</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <p className="text-5xl font-bold text-white">6:1</p>
              <p className="mt-2 font-semibold">Avg. Return on Ad Spend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Digital Marketing FAQs</h2>
            <FAQItem question="What is the difference between SEO and SEM?" answer="SEO (Search Engine Optimization) focuses on earning organic (non-paid) traffic from search engines. SEM (Search Engine Marketing) is a broader term that includes SEO but also incorporates paid advertising (like Google Ads) to achieve search visibility." />
            <FAQItem question="How do you measure the ROI of a digital marketing campaign?" answer="At Bammy Growth Hub, we measure ROI by tracking key performance indicators (KPIs) tied directly to your business goals. This includes metrics like Cost Per Acquisition (CPA), Customer Lifetime Value (CLV), conversion rates, and of course, the total revenue generated versus the campaign spend." />
            <FAQItem question="Which social media platform is right for my business?" answer="The best platform depends on your target audience and industry. LinkedIn is typically best for B2B, while platforms like Instagram and TikTok are great for B2C brands targeting younger demographics. We conduct audience research to determine the most effective channels for your specific business." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#44001b] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Build Your Revenue Engine?</h2>
            <p className="text-lg text-gray-300 mt-4 mb-8">
                Let's architect a full-funnel digital marketing strategy that drives predictable, profitable growth. Contact Bammy Growth Hub for a free consultation and let's map out your journey to success.
            </p>
            <Link 
                to="/become-a-client" 
                className="inline-block bg-white text-[#44001b] font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg"
            >
                Get My Free Consultation
            </Link>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketingPage;