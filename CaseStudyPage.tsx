import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Client Success Stories</h1>
                    <p className="text-xl text-gray-600">
                        Discover how Bammy Growth Hub has partnered with businesses to deliver tangible results, overcome challenges, and drive sustainable growth.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We are currently compiling our detailed case studies to share with you. Check back soon to see in-depth examples of our strategic work and the incredible results we've achieved for our partners.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#44001b] text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">Ready to Write Your Own Success Story?</h2>
                    <p className="text-lg text-gray-300 mt-4 mb-8">
                        While our case studies are being prepared, let's talk about you. Schedule a free consultation with Bammy Growth Hub and let's start outlining the strategy for your future success.
                    </p>
                    <Link 
                        to="/become-a-client" 
                        className="inline-block bg-white text-[#44001b] font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg"
                    >
                        Start My Growth Story
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPage;