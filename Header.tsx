import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center space-x-2">
  <img 
    src="https://raw.githubusercontent.com/Tossky/bammygrowthhub/main/logo.png" 
    alt="Bammy Growth Hub" 
    className="h-10 w-auto"
  />
</div>
        <span className="font-bold text-lg text-gray-800">BAMMY GROWTH HUB</span>
    </div>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-[#44001b] transition-colors duration-200 font-medium">
                Services
                <ChevronDownIcon className={isServicesOpen ? 'rotate-180' : ''} />
              </button>
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute -left-1/2 mt-2 w-[800px] transform translate-x-[-25%] p-8 bg-[#44001b] text-white rounded-lg shadow-xl"
                >
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-2 border-b border-gray-500 pb-2">SEO & Visibility</h3>
                      <p className="text-sm text-gray-400 mt-2 mb-4">Boost your organic presence and connect with local customers.</p>
                      <ul className="space-y-3">
                        <li><Link to="/services/seo-visibility#local-seo" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Local SEO & Google Profile</Link></li>
                        <li><Link to="/services/seo-visibility#technical-seo" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Technical & On-Page SEO</Link></li>
                        <li><Link to="/services/seo-visibility#process" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> View Our SEO Process</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 border-b border-gray-500 pb-2">Digital Marketing</h3>
                      <p className="text-sm text-gray-400 mt-2 mb-4">Engage your audience across the entire customer journey.</p>
                      <ul className="space-y-3">
                        <li><Link to="/services/digital-marketing#strategy" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Strategy & Execution</Link></li>
                        <li><Link to="/services/digital-marketing#paid-ads" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Social Media & Paid Ads</Link></li>
                        <li><Link to="/services/digital-marketing#client-results" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> See Client Results</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 border-b border-gray-500 pb-2">Business Growth</h3>
                      <p className="text-sm text-gray-400 mt-2 mb-4">Strategic consulting to scale your operations and revenue.</p>
                      <ul className="space-y-3">
                        <li><Link to="/services/business-growth#consulting" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Business & Financial Consulting</Link></li>
                        <li><Link to="/services/business-growth#ecommerce" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Ecommerce Store Setup & Growth</Link></li>
                        <li><Link to="/services/business-growth#partner" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Why Partner With Us</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 border-b border-gray-500 pb-2">Innovation & Future</h3>
                      <p className="text-sm text-gray-400 mt-2 mb-4">Leverage emerging tech to build a competitive advantage.</p>
                      <ul className="space-y-3">
                        <li><Link to="/services/innovation-future#ai" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> AI & Blockchain Implementation</Link></li>
                        <li><Link to="/services/innovation-future#consultation" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Request a Free Consultation</Link></li>
                        <li><Link to="/services/innovation-future#pricing" className="hover:text-gray-300 transition-colors duration-200 flex items-center"><span className="text-gray-400 mr-2">&rsaquo;</span> Example Pricing</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/about" className="text-gray-700 hover:text-[#44001b] transition-colors duration-200 font-medium">About</NavLink>
            <NavLink to="/industries" className="text-gray-700 hover:text-[#44001b] transition-colors duration-200 font-medium">Industries</NavLink>
            <NavLink to="/become-a-client" className="text-gray-700 hover:text-[#44001b] transition-colors duration-200 font-medium">Become a Client</NavLink>
            <NavLink to="/pricing" className="text-gray-700 hover:text-[#44001b] transition-colors duration-200 font-medium">Pricing</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.google.com/maps/dir/Bammy+Growth+Hub,+Ayetoro+Scheme,+Oyo/No+31.+Lane+5+Ayetoro+Scheme,+Ayetoro,+Oyo+202104,+Oyo/@8.1573726,3.5322524,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1030c9f3934933f9:0x6763882554d49bfb!2m2!1d3.6146534!2d8.1573809!1m5!1m1!1s0x1030c9f3934933f9:0x6763882554d49bfb!2m2!1d3.6146534!2d8.1573809?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="View our location on Google Maps"
            >
              <LocationIcon />
            </a>
            <Link to="/free-seo-audit" className="bg-[#44001b] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center space-x-2">
              <span>Free SEO Audit</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
