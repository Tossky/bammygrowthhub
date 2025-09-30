import React from 'react';
import { Link, useParams } from 'react-router-dom';

const IndustryDetailPage = () => {
    const { industryName } = useParams();

    // A simple function to format the industry name for display
    const formatTitle = (slug: string | undefined) => {
        if (!slug) return "Industry Details";
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const title = formatTitle(industryName);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#F6F1EC] pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{`Specialized Strategies for ${title}`}</h1>
                    <p className="text-xl text-gray-600">
                        Learn how Bammy Growth Hub delivers custom-tailored solutions to meet the unique challenges and opportunities within the {title} sector.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Insights Coming Soon</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We are currently developing a detailed page for the {title} industry, which will include specific case studies, targeted strategies, and client success stories. Please check back soon!
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#44001b] text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">{`Ready to Discuss Your ${title} Business?`}</h2>
                    <p className="text-lg text-gray-300 mt-4 mb-8">
                        You don't have to wait. Contact us today for a free consultation to discuss how Bammy Growth Hub can drive growth in your specific industry.
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

export default IndustryDetailPage;