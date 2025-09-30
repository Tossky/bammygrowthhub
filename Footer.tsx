import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#44001b] text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 0L29.3923 10H10.6077L20 0Z" fill="#F6F1EC"/>
                                    <path d="M10 12.5L20 30L30 12.5L20 12.5H10Z" fill="#FFFFFF"/>
                                </svg>
                            </div>
                            <span className="font-bold text-lg text-white">Bammy Growth Hub</span>
                        </div>
                        <p className="text-gray-300 text-base">
                            At Bammy Growth Hub, we drive measurable results and sustainable growth for businesses through expert SEO and digital marketing strategies.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/Bammy.pro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://x.com/bammyrvg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/toluwalope-akano/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                             <a href="https://www.instagram.com/bammy_rvg_?igsh=bjRnNWJrajJsaDA1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.16.242 2.91.565.753.324 1.355.77 1.95 1.37s1.045 1.196 1.37 1.95c.323.75.507 1.64.565 2.91.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.242 2.16-.565 2.91-.324.753-.77 1.355-1.37 1.95s-1.196 1.045-1.95 1.37c-.75.323-1.64.507-2.91.565-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.16-.242-2.91-.565-.753-.324-1.355-.77-1.95-1.37s-1.045-1.196-1.95-1.37c-.323-.75-.507-1.64-.565-2.91-.058 1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058 1.27.242 2.16.565 2.91.324.753.77 1.355 1.37 1.95s1.196-1.045 1.95-1.37c.75-.323 1.64-.507 2.91-.565C8.416 2.175 8.796 2.163 12 2.163zm0 1.442c-3.142 0-3.504.012-4.72.068-1.192.054-1.96.23-2.61.493-.66.26-1.18.59-1.7.96-.52.37-1 .85-1.37 1.37-.37.52-.69 1.04-.96 1.7-.263.65-.44 1.418-.493 2.61C2.175 8.496 2.163 8.858 2.163 12c0 3.142.012 3.504.068 4.72.054 1.192.23 1.96.493 2.61.26.66.59 1.18.96 1.7.37.52.85 1 1.37 1.37.52.37 1.04.69 1.7.96.65.263 1.418.44 2.61.493 1.216.056 1.578.068 4.72.068 3.142 0 3.504-.012 4.72-.068 1.192-.054 1.96-.23 2.61-.493.66-.26 1.18-.59 1.7-.96.52-.37 1-.85 1.37-1.37.37-.52.69-1.04.96-1.7.263-.65.44-1.418-.493-2.61.056-1.216.068-1.578.068-4.72 0-3.142-.012-3.504-.068-4.72-.054-1.192-.23-1.96-.493-2.61-.26-.66-.59-1.18-.96-1.7-.37-.52-.85-1-1.37-1.37-.52-.37-1.04-.69-1.7-.96-.65-.263-1.418-.44-2.61-.493C15.504 3.617 15.142 3.605 12 3.605zM12 6.883c-2.822 0-5.117 2.295-5.117 5.117s2.295 5.117 5.117 5.117 5.117-2.295 5.117-5.117-2.295-5.117-5.117-5.117zm0 8.792c-1.99 0-3.607-1.617-3.607-3.607s1.617-3.607 3.607-3.607 3.607 1.617 3.607 3.607-1.617 3.607-3.607 3.607zM17.44 6.832a1.442 1.442 0 100-2.884 1.442 1.442 0 000 2.884z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://medium.com/@bammy-rvg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Medium</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7.002 4.25c.343 0 .686.03 1.028.09c.343.06.687.149 1.03.27v.18l-.24.12c-.06.03-.12.06-.18.09c-.18.09-.389.199-.628.319c-.24.12-.48.27-.72.45c-.24.18-.469.379-.687.598c-.22.22-.42.45-.6.7s-.33.52-.45.81c-.12.29-.21.598-.27.93c-.06.33-.09.679-.09 1.028c0 .348.03.697.09 1.047c.06.348.15.688.27.998c.12.31.27.6.45.87s.39.52.6.75c.21.229.439.439.687.628c.249.19.51.36.78.5s.54.27.84.389c.3.12.599.21.9.27c.3.06.6.09.9.09c.343 0 .687-.03 1.028-.09c.343-.06.687-.15 1.03-.27c.343-.12.687-.27 1.028-.45c.343-.18.67-.39.97-.63l.21-.18l.21-.21l.18-.21c.12-.15.21-.32.27-.499c.06-.18.09-.36.09-.54s-.03-.36-.09-.54c-.06-.18-.15-.34-.27-.499c-.12-.15-.25-.289-.39-.409c-.14-.12-.29-.21-.45-.27c-.16-.06-.32-.09-.48-.09s-.33.03-.48.09c-.16.06-.31.15-.45.27c-.14.12-.27.27-.39.45c-.12.18-.21.39-.27.63c-.06.24-.09.499-.09.778c0 .3.05.57.14.81c.09.24.22.45.39.63c.17.18.38.32.63.42c.25.1.51.15.78.15c.36 0 .69-.07.99-.21c.3-.14.56-.33.78-.57c.22-.24.4-.52.54-.84c.14-.32.21-.689.21-1.088c0-.36-.05-.69-.14-.99c-.09-.3-.22-.57-.39-.81c-.17-.24-.37-.45-.6-.63c-.23-.18-.48-.33-.75-.45c-.27-.12-.54-.21-.81-.27c-.27-.06-.52-.09-.78-.09c-.3 0-.57.04-.81.12c-.24.08-.45.2-.63.36c-.18.16-.33.36-.45.6s-.18.52-.18.81c0 .19.02.38.06.57c.04.19.1.36.18.51c.08.15.18.27.3.36c.12.09.25.13.4.13c.19 0 .36-.05.51-.15c.15-.1.27-.24.36-.42c.09-.18.13-.39.13-.63c0-.18-.02-.35-.06-.51c-.04-.16-.1-.3-.18-.42c-.08-.12-.18-.21-.3-.27c-.12-.06-.25-.09-.4-.09s-.28.03-.4.09c-.12.06-.22.15-.3.27c-.08.12-.15.27-.18.45c-.03.18-.05.37-.05.57v.21zm6.998 0c0 .348.03.697.09 1.047c.06.348.15.688.27.998c.12.31.27.6.45.87s.39.52.6.75c.21.229.439.439.687.628c.249.19.51.36.78.5s.54.27.84.389c.3.12.599.21.9.27c.3.06.6.09.9.09s.6-.03.9-.09c.3-.06.599-.15.9-.27c.3-.12.57-.27.84-.42c.27-.15.52-.33.78-.54c.26-.21.5-.45.72-.72c.22-.27.42-.57.57-.9c.15-.33.27-.69.36-1.08c.09-.39.13-.81.13-1.26c0-.54-.06-.103-.18-.15c-.12-.51-.3-.989-.54-1.409c-.24-.42-.54-.78-.9-.108c-.36-.3-.78-.54-1.26-.72c-.48-.18-.99-.27-1.53-.27c-.36 0-.69.05-1.02.15c-.33.1-.63.24-.9.42c-.27.18-.51.39-.72.63c-.21.24-.39.51-.54.78s-.27.57-.36.9c-.09.33-.13.66-.13 1zm1.53-3.69c.12-.24.27-.45.45-.63c.18-.18.39-.33.63-.45c.24-.12.51-.21.78-.27c.27-.06.55-.09.84-.09c.36 0 .69.05 1.02.15c.33.1.63.24.9.42c.27.18.51.39.72.63c.21.24.39.51.54.78c.15.27.27.57.36.9c.09.33.13.66.13 1c0 .42-.06.81-.18 1.17c-.12.36-.28.69-.48.99s-.45.57-.72.81c-.27.24-.57.45-.9.63c-.33.18-.69.33-1.08.45c-.39.12-.78.18-1.17.18c-.48 0-.93-.08-1.35-.24c-.42-.16-.81-.38-1.17-.66c-.36-.28-.68-.62-1.02-1.02c-.34-.4-.59-1.08-.75-1.41c-.06-.12-.09-.24-.12-.36c-.03-.12-.04-.24-.04-.36c0-.24.04-.48.12-.69c.08-.21.18-.39.3-.54z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
                            <ul className="mt-4 space-y-4">
                                <li><a href="/#/services/seo-visibility" className="text-base text-gray-300 hover:text-white">SEO & Visibility</a></li>
                                <li><a href="/#/services/digital-marketing" className="text-base text-gray-300 hover:text-white">Digital Marketing</a></li>
                                <li><a href="/#/services/business-growth" className="text-base text-gray-300 hover:text-white">Business Growth</a></li>
                                <li><a href="/#/services/innovation-future" className="text-base text-gray-300 hover:text-white">Innovation & Future</a></li>
                            </ul>
                        </div>
                        <div className="mt-0">
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-4">
                                <li><a href="/#/about" className="text-base text-gray-300 hover:text-white">About</a></li>
                                <li><a href="/#/case-studies" className="text-base text-gray-300 hover:text-white">Case Studies</a></li>
                                <li><a href="/#/become-a-client" className="text-base text-gray-300 hover:text-white">Become a Client</a></li>
                                <li><a href="/#/pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
                             <ul className="mt-4 space-y-4">
                                <li>
                                    <a href="mailto:toluwalopeakano21@gmail.com" className="text-base text-gray-300 hover:text-white flex items-start">
                                         <svg className="w-5 h-5 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <span className="ml-3">toluwalopeakano21@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:09131125328" className="text-base text-gray-300 hover:text-white flex items-start">
                                        <svg className="w-5 h-5 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="ml-3">09131125328</span>
                                    </a>
                                </li>
                                 <li>
                                    <div className="text-base text-gray-300 flex items-start">
                                        <svg className="w-5 h-5 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-3">No 31, Lane 5, Ayetoro Scheme, Oyo, Oyo State</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Bammy Growth Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;