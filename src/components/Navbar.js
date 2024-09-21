import React from 'react';
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import profile from '../images/profile.svg';

const Navbar = () => {
    return (
        <nav className="font-poppins bg-white fixed top-0 left-0 w-full shadow-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
                <div className="flex justify-between items-center h-20">
                    {/* Logo section */}
                    <div className="flex-shrink-0">
                        <img src={logo} className="w-[208px] h-[40px]" alt="logo" />
                    </div>

                    {/* Navigation items */}
                    <div className="text-base font-semibold hidden md:flex space-x-10">
                        <a href="/" className="text-[#39468C] hover:text-gray-900">
                            Ik huur
                        </a>
                        <a href="/" className="text-[#39468C] hover:text-gray-900">
                            Ik zoek
                        </a>
                        <a href="/" className="text-[#39468C] hover:text-gray-900">
                            Over ons
                        </a>
                        <a href="/" className="text-[#39468C] hover:text-gray-900">
                            Projecten
                        </a>
                    </div>

                    {/* Search & Profile Icons */}
                    <div className="flex items-center space-x-4">
                        <img src={search} className="w-12 h-12" alt="logo" />
                        <img src={profile} className="w-12 h-12" alt="logo" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
