import React from 'react';
import { Link } from 'react-router-dom';

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F6F1EC] text-[#44001b] mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

interface TeamMemberProps {
    imageUrl: string;
    name: string;
    title: string;
    bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageUrl, name, title, bio }) => (
    <div className="text-center">
        <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={imageUrl} alt={name} />
        <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-[#44001b] font-medium">{title}</p>
        <p className="mt-2 text-gray-600">{bio}</p>
    </div>
);


const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">We're More Than an Agency. We're Bammy Growth Hub.</h1>
                    <p className="text-xl text-gray-600">
                        Founded on the principle of partnership, Bammy Growth Hub exists to forge lasting relationships with businesses and drive success that goes beyond the balance sheet.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            To empower businesses to achieve sustainable, long-term growth by delivering bespoke, data-driven digital marketing strategies. We are committed to radical transparency and a relentless pursuit of results that create a tangible impact on our clients' success.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600 text-lg">
                            To be the most trusted and results-oriented digital growth consultancy, recognized for our strategic excellence, innovative approach, and the unwavering dedication of the Bammy Growth Hub team to our partners' goals.
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/600/500?random=11" alt="Team discussing strategy" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-[#F6F1EC]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Principles That Guide Bammy Growth Hub</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                            title="Results-Driven"
                            description="We are obsessed with performance. Our strategies are designed not just for traffic, but for meaningful conversions and a strong ROI."
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 14c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM12 20c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" /></svg>}
                            title="True Partnership"
                            description="We act as an extension of your team. Your challenges are our challenges, and your success is our ultimate reward."
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
                            title="Radical Transparency"
                            description="Clear, honest communication is non-negotiable. We provide detailed reports and are always upfront about our process and progress."
                        />
                    </div>
                </div>
            </section>

            {/* Meet The Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">The Experts Behind Your Growth</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        <TeamMember imageUrl="https://picsum.photos/200/200?random=1" name="Toluwalope Akano" title="Founder & CEO" bio="As the visionary behind Bammy Growth Hub, Toluwalope is passionate about crafting holistic strategies that drive transformative growth and uncover the hidden potential in every partner's business." />
                        <TeamMember imageUrl="https://picsum.photos/200/200?random=2" name="Maria Garcia" title="Head of SEO" bio="Maria lives and breathes search engine optimization. Her technical expertise ensures our clients' websites are perfectly tuned for visibility." />
                        <TeamMember imageUrl="https://picsum.photos/200/200?random=3" name="David Chen" title="PPC & Ads Specialist" bio="David is an expert at turning ad spend into revenue. He manages multi-platform campaigns with a laser focus on conversion and ROI." />
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-[#44001b] text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">Ready to Partner for Growth?</h2>
                    <p className="text-lg text-gray-300 mt-4 mb-8">
                        Let's build the future of your business together. Schedule a free strategy call with the Bammy Growth Hub team to see how we can help you achieve your most ambitious goals.
                    </p>
                    <Link
                        to="/free-seo-audit"
                        className="inline-block bg-white text-[#44001b] font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg"
                    >
                        Get Your Free Growth Plan
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;