import React from 'react';
import header from "../images/header.jpg";
import hammer from "../images/hammer.svg";
import arrow from "../images/arrow.svg";
import chat from "../images/chat.svg";
import blob1 from "../images/blob1.svg";
import blob4 from "../images/blob4.svg";
import blob5 from "../images/blob5.svg";

const Header = () => {
    return (
        <header className="font-poppins relative w-full bg-cover bg-center bg-no-repeat mt-20">
            {/* Background image container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${header})`, // Ideally should have a mobile friend image for mobile
                    backgroundPosition: 'center 25%', // Focus on the upper part of the image
                }}
            >
                {/* Larger screen background */}
                <div
                    className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${header})` }}
                ></div>
            </div>

            {/* Overlay to improve text visibility if needed */}
            <div className="absolute inset-0 bg-black opacity-30 lg:opacity-10"></div>

            {/* Blob 4 (Top-left corner) */}
            <div className='hidden lg:block z-10 absolute top-0 left-0 w-full h-full bg-inherit bg-no-repeat object-cover mix-blend-multiply lg:w-[1088.58px] lg:h-[514.13px]' style={{ backgroundImage: `url(${blob4})`, backgroundPosition: 'top left' }}>
            </div>

            {/* Blob 5 (Right side) */}
            <div className='hidden lg:block z-10 absolute top-0 right-0 w-full h-full bg-inherit bg-no-repeat object-cover mix-blend-multiply lg:w-[1088.58px] lg:h-[580px]' style={{ backgroundImage: `url(${blob5})`, backgroundPosition: 'right' }}>
            </div>

            {/* Foreground Content */}
            <div className="relative flex flex-col items-center justify-end min-h-[400px] lg:min-h-[560px] text-center px-4 py-8 lg:py-16">
                <div className='w-full lg:w-[50%] text-center z-20 mb-6'>
                    <p className="text-white text-left text-xl lg:text-2xl ml-2 font-[500] -mb-2">
                        Waarmee kunnen we je helpen?
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 text-base text-[#39468C] font-semibold z-30">
                    <Button icon={hammer} text="Reparatie melden" />
                    <Button icon={arrow} text="Huur betalen" />
                    <Button icon={chat} text="Contact" />
                </div>

                <div className='hidden lg:block z-10 absolute bg-inherit bg-center bg-no-repeat object-cover mix-blend-multiply lg:bottom-[-152px] lg:right-[420px] lg:w-[1088.58px] lg:h-[514.13px]' style={{ backgroundImage: `url(${blob1})` }}>
                </div>
            </div>
        </header>
    );
};

const Button = ({ icon, text }) => (
    <button className="flex justify-start items-center bg-white w-full lg:w-[288px] h-[64px] rounded-xl ps-4">
        <span>
            <img src={icon} alt='icon' />
        </span>
        <span className='ml-3'>{text}</span>
    </button>
);

export default Header;