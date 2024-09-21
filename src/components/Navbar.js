import React, { useState } from 'react';
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import profile from '../images/profile.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="font-poppins bg-white fixed top-0 left-0 w-full shadow-nav z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo section */}
                    <div className="flex-shrink-0">
                        <img src={logo} className="w-[208px] h-[40px]" alt="logo" />
                    </div>

                    {/* Navigation items for medium and large screens */}
                    <div className="hidden md:flex space-x-10">
                        <NavItem href="/" text="Ik huur" />
                        <NavItem href="/" text="Ik zoek" />
                        <NavItem href="/" text="Over ons" />
                        <NavItem href="/" text="Projecten" />
                    </div>

                    {/* Search & Profile Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <img src={search} className="w-12 h-12" alt="search" />
                        <img src={profile} className="w-12 h-12" alt="profile" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-[#39468C]">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavItem href="/" text="Ik huur" mobile />
                            <NavItem href="/" text="Ik zoek" mobile />
                            <NavItem href="/" text="Over ons" mobile />
                            <NavItem href="/" text="Projecten" mobile />
                        </div>
                        <div className="flex justify-center space-x-4 pb-3">
                            <img src={search} className="w-12 h-12" alt="search" />
                            <img src={profile} className="w-12 h-12" alt="profile" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

const NavItem = ({ href, text, mobile = false }) => {
    const baseClasses = "text-[#39468C] hover:text-gray-900 font-semibold";
    const mobileClasses = mobile ? "block px-3 py-2 text-base" : "text-base";
    return (
        <a href={href} className={`${baseClasses} ${mobileClasses}`}>
            {text}
        </a>
    );
};

export default Navbar;