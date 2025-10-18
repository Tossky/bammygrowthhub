import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SeoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.136A1.76 1.76 0 017.166 9.76l13.522-3.11a1.76 1.76 0 001.218-2.311l-2.147-6.137a1.76 1.76 0 00-2.312-1.218L4.25 7.425a1.76 1.76 0 00-1.04 2.183l2.147 6.136a1.76 1.76 0 003.417-.592V5.882z" />
    </svg>
);

const GrowthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const InnovationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="text-[#44001b] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <Link to={link} className="font-semibold text-[#44001b] hover:text-[#2d0012] transition-colors self-start group">
      Learn More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  </div>
);

interface CaseStudyCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, category, title, description, link }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <p className="text-sm font-semibold text-[#44001b] uppercase mb-2">{category}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link to={link} className="font-semibold text-[#44001b] hover:text-[#2d0012] transition-colors">
                Read More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
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
        <div className="border border-gray-300 rounded-lg">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-800">{question}</span>
                <span className="text-2xl font-light text-gray-500">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-5 pb-5 text-gray-600">
                    {answer}
                </div>
            )}
        </div>
    );
};


const HomePage = () => {
  const processSteps = [
    { step: '01', title: 'Discovery & Audit', description: 'We start by deeply understanding your business, goals, and current digital footprint with a comprehensive audit.' },
    { step: '02', title: 'Strategy & Planning', description: 'Using the audit findings, we craft a bespoke, data-driven strategy and a clear roadmap for success.' },
    { step: '03', title: 'Execution & Optimization', description: 'Our team implements the strategy with precision, continuously optimizing for peak performance.' },
    { step: '04', title: 'Reporting & Growth', description: 'We provide transparent reports on progress and KPIs, using the insights to fuel further growth and refinement.' }
  ];

  const faqs = [
      {
          question: "What makes Bammy Growth Hub different?",
          answer: "We're not just an agency; we're a growth partner. We focus on a holistic strategy that integrates deeply with your business goals, ensuring every action delivers a tangible return on investment. Our commitment to radical transparency and bespoke strategies sets us apart."
      },
      {
          question: "How long does it take to see results?",
          answer: "While some wins can be seen in the first few months, sustainable growth takes time. For SEO, significant results typically emerge around the 4-6 month mark. For paid campaigns, results can be much faster. We'll set clear expectations based on your specific goals."
      },
      {
          question: "What types of businesses do you work with?",
          answer: "We partner with businesses of all sizes, from ambitious startups to established enterprises, across a diverse range of industries. Our strength is creating custom strategies for businesses serious about long-term, sustainable growth."
      },
      {
          question: "How much do your services cost?",
          answer: "Our pricing is tailored to the needs of each partner. We offer a range of packages, from our Starter SEO plan to comprehensive Enterprise solutions. For details, please see our Pricing Page or schedule a free consultation for a custom quote."
      },
       {
          question: "Do I need to sign a long-term contract?",
          answer: "We believe in earning your partnership every month. Most of our plans operate on a flexible month-to-month basis after an initial 3-month commitment to allow our strategies to gain traction and show measurable results."
      },
      {
          question: "How will I know if the strategy is working?",
          answer: "Radical transparency is one of our core values. You'll receive detailed monthly reports that focus on the metrics that matter most to your bottom line—traffic, leads, conversions, and ROI. We also schedule regular strategy calls to discuss progress and plan next steps."
      }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F6F1EC] text-center py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Growth Beyond The Best
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              At Bammy Growth Hub, we uncover the hidden strengths in your business, delivering data-driven strategies that produce results far beyond industry standards. Your growth is our mission.
            </p>
            <div className="flex flex-col items-center">
              <Link 
                  to="/free-seo-audit" 
                  className="inline-block bg-[#44001b] text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                  Claim Your Free Growth Blueprint &rarr;
              </Link>
              <p className="text-sm text-gray-500 mt-4">100% free, no obligation.</p>
            </div>
        </div>
      </section>
      
      {/* Social Proof */}
       <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-center text-gray-500 font-semibold uppercase tracking-wider mb-6">Trusted by businesses of all sizes</h3>
            <div className="flex justify-center items-center space-x-8 sm:space-x-12 grayscale opacity-60">
                <span className="font-bold text-2xl text-gray-400">Forbes</span>
                 <span className="font-bold text-2xl text-gray-400">Inc.</span>
                 <span className="font-bold text-2xl text-gray-400">TechCrunch</span>
                 <span className="font-bold text-2xl text-gray-400">Entrepreneur</span>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#F6F1EC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">A Partnership For Growth with Bammy Growth Hub</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            A complete suite of services from Bammy Growth Hub, designed to unlock your full market potential and achieve your most ambitious business goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<SeoIcon />}
              title="SEO & Visibility"
              description="Dominate search with holistic SEO, from Local & Google Profile optimization to deep technical and on-page audits."
              link="/services/seo-visibility"
            />
            <ServiceCard 
              icon={<MarketingIcon />}
              title="Digital Marketing"
              description="Engage your audience with comprehensive campaigns, from high-level strategy to targeted social media & paid ads."
              link="/services/digital-marketing"
            />
            <ServiceCard 
              icon={<GrowthIcon />}
              title="Business Growth"
              description="Go beyond marketing with strategic business & financial consulting and end-to-end ecommerce solutions for long-term success."
              link="/services/business-growth"
            />
            <ServiceCard 
              icon={<InnovationIcon />}
              title="Innovation & Future"
              description="Leverage emerging technologies like AI and blockchain to automate, secure, and future-proof your business."
              link="/services/innovation-future"
            />
          </div>
        </div>
      </section>
      
       {/* Why Partner With Us Section */}
      <section id="partner" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">We're Not Just an Agency. We're Bammy Growth Hub.</h2>
                <p className="text-lg text-gray-600 mb-8">We integrate deeply with your team, aligning our strategies with your core objectives. Your success is our ultimate metric, and we're relentless in its pursuit.</p>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#44001b] text-white flex items-center justify-center font-bold text-lg">1</div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Bespoke Strategies</h3>
                            <p className="text-gray-600 mt-1">No cookie-cutter plans. We build a custom strategy tailored to your unique market position and goals for maximum impact.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg">2</div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Radical Transparency</h3>
                            <p className="text-gray-600 mt-1">Our reports are clear, honest, and focus on the metrics that matter most to your bottom line. No fluff, just facts and progress.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Unwavering Dedication</h3>
                            <p className="text-gray-600 mt-1">Our primary goal is to deliver a significant, positive return on your investment and drive real, sustainable business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div>
                <img src="https://picsum.photos/600/500?random=10" alt="Team collaborating" className="rounded-lg shadow-2xl" />
            </div>
        </div>
      </section>
      
      {/* Our Proven Path to Success Section */}
      <section id="our-process" className="py-20 bg-[#F6F1EC]">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Proven Path to Success</h2>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-20">
                  Our systematic approach ensures every action is purposeful, data-informed, and aligned with your goals.
              </p>

              <div className="relative">
                  {/* Desktop Timeline */}
                  <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
                  <div className="hidden md:block space-y-20">
                      {processSteps.map((item, index) => (
                          <div key={index} className={`flex items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                              <div className="w-5/12">
                                  <div className="bg-white p-6 rounded-lg shadow-lg">
                                      <h3 className="text-xl font-bold text-[#44001b] mb-2">{item.title}</h3>
                                      <p className="text-gray-600">{item.description}</p>
                                  </div>
                              </div>
                              <div className="w-2/12 flex justify-center">
                                  <div className="bg-[#44001b] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                      {item.step}
                                  </div>
                              </div>
                              <div className="w-5/12"></div>
                          </div>
                      ))}
                  </div>

                  {/* Mobile Timeline */}
                  <div className="md:hidden relative">
                       <div className="absolute top-0 left-6 w-0.5 h-full bg-gray-300"></div>
                       <div className="space-y-12">
                           {processSteps.map((item) => (
                               <div key={item.step} className="flex items-start space-x-6">
                                   <div className="bg-[#44001b] text-white w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg z-10">
                                       {item.step}
                                   </div>
                                   <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                                       <h3 className="text-xl font-bold text-[#44001b] mb-2">{item.title}</h3>
                                       <p className="text-gray-600">{item.description}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Results Section */}
       <section id="client-results" className="py-20 bg-[#44001b] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">The Bammy Growth Hub Results Speak For Themselves</h2>
          <p className="text-lg text-gray-300 mb-12">We're proud of the results we achieve. Our strategies lead to significant growth in traffic, leads, and revenue.</p>
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

      {/* Client Success Stories Section */}
      <section id="success-stories" className="py-20 bg-[#F6F1EC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseStudyCard 
                  image="https://picsum.photos/400/300?random=21"
                  category="E-commerce"
                  title="320% Revenue Growth for an Online Retailer"
                  description="A multi-channel strategy focusing on technical SEO and targeted Google Shopping ads led to a massive increase in year-over-year revenue."
                  link="/case-studies"
              />
              <CaseStudyCard 
                  image="https://picsum.photos/400/300?random=22"
                  category="Local SEO"
                  title="Doubled Appointment Bookings for a Dental Clinic"
                  description="By optimizing their Google Business Profile and local citations, we put a local clinic on the map, resulting in a 110% increase in qualified leads."
                  link="/case-studies"
              />
              <CaseStudyCard 
                  image="https://picsum.photos/400/300?random=23"
                  category="B2B Lead Generation"
                  title="5x Increase in MQLs for a SaaS Company"
                  description="Through strategic content marketing and targeted LinkedIn campaigns, we built a predictable pipeline of high-quality marketing qualified leads."
                  link="/case-studies"
              />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Partners Say About Bammy Growth Hub</h2>
                <div className="space-y-10">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-xl italic text-gray-700">"Working with Bammy Growth Hub was a game-changer. Their insights and strategies delivered results beyond our wildest expectations. We didn't just see growth; we saw a transformation."</p>
                        <p className="mt-4 font-bold text-gray-900">Jane Doe</p>
                        <p className="text-sm text-gray-500">CEO, ExampleCo</p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-xl italic text-gray-700">"The level of dedication and transparency at Bammy Growth Hub is unmatched. We finally have a partner who is as invested in our success as we are."</p>
                        <p className="mt-4 font-bold text-gray-900">John Smith</p>
                        <p className="text-sm text-gray-500">Founder, Startup Inc.</p>
                    </div>
                </div>
            </div>
        </section>

      {/* Founder Section */}
       <section id="founder" className="py-20 bg-[#F6F1EC]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Is Toluwalope Akano</h2>
                <p className="text-[#44001b] font-semibold text-lg mb-4">Founder & CEO, Bammy Growth Hub</p>
                <p className="text-lg text-gray-600 mb-6">
                    Toluwalope Akano is a multifaceted marketing expert and agency owner, specializing in ecommerce and business online presence growth, SEO optimization, brand development, and creative design with a passion for driving business success.
                </p>
                <Link to="/about" className="font-semibold text-[#44001b] hover:text-[#2d0012] transition-colors group">
                    Learn More About Our Team <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
                <img 
  src="https://raw.githubusercontent.com/Tossky/bammygrowthhub/main/Bammy%20Growth%20Hub%2C%20BammyGrowthHub%2C%20Marketing%20agency%20(2).png" 
  alt="Bammy Growth Hub" 
  className="h-10 w-auto"
/>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {faqs.map((faq, index) => (
                      <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Ready to Unlock Your True Growth Potential?</h2>
            <p className="text-lg text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">
                Your business has untapped strengths. Let Bammy Growth Hub create a custom roadmap to find them. Get a free, no-obligation analysis and discover what's possible.
            </p>
            <Link 
                to="/free-seo-audit" 
                className="inline-block bg-[#44001b] text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
            >
                Claim My Free Analysis Now
            </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
