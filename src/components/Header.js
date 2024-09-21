import React from 'react';
import header from "../images/header.jpg";
import hammer from "../images/hammer.svg";
import arrow from "../images/arrow.svg";
import chat from "../images/chat.svg";
import blob1 from "../images/blob1.svg";

const Header = () => {
    return (
        <header className="font-poppins relative w-full h-[560px] bg-cover bg-center bg-no-repeat mt-20" style={{ backgroundImage: `url(${header})` }}>
            {/* Overlay to make text more visible */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4">
                <p className="text-white justify-self-start text-2xl font-[500] mb-6">
                    Waarmee kunnen we je helpen?
                </p>
                <div className="flex space-x-3 text-base text-[#39468C] font-semibold z-30 pb-8">
                    <button className="flex justify-start items-center bg-white w-[288px] h-[64px] rounded-xl ps-4">
                        <span>
                            <img src={hammer} alt='icon' />
                        </span>
                        <span className='ml-3'>
                            Reparatie melden
                        </span>
                    </button>
                    <button className="flex justify-start items-center bg-white w-[288px] h-[64px] rounded-xl ps-4">
                        <span>
                            <img src={arrow} alt='icon' />
                        </span>
                        <span className='ml-3'>Huur betalen</span>
                    </button>
                    <button className="flex justify-start items-center bg-white w-[288px] h-[64px] rounded-xl ps-4">
                        <span>
                            <img src={chat} alt='icon' />
                        </span>
                        <span className='ml-3'>Contact</span>
                    </button>
                </div>
                {/* <div className='relative flex justify-center bottom-0 w-[1088.58px] h-[514.13px] z-10 rotate-[-7.13deg]'>
                    <img src={blob1} alt='blog' className='mix-blend-multiply w-[70%]'/>
                </div> */}
            </div>
        </header>
    );
};

export default Header;
