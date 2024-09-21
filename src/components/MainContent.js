import React from 'react';
import buildingImage from '../images/building.svg';
import card1 from '../images/card1.svg';
import arrowRight from '../images/arrow-right.svg';
import clock from '../images/clock.svg';
import warehouse from '../images/warehouse.svg';

import inbox from '../images/inbox.svg';
const MainContent = () => {
    return (
        <div className="bg-white">
            {/* First Div with Image and Text */}
            <div className="w-full h-[500px] flex flex-col lg:flex-row items-center justify-center">
                {/* Image */}
                <div className="flex justify-center">
                    <img src={buildingImage} alt="view" className="w-[496px] h-[372px]" />
                </div>

                {/* Text Section */}
                <div className="w-[596px] h-[372px] text-left">
                    <h2 className="text-[32px] text-[#35BCE7] lg:text-4xl font-bold mb-4">
                        We verbeteren onze woningen
                    </h2>
                    <p className="font-poppins text-base font-normal text-black">
                        Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.

                        <span className='pt-2'>
                            <br />Wilt u meer weten over onze energiebesparende maatregelen?
                        </span>
                    </p>
                    {/* Button */}
                    <button className="w-[131px] h-10 text-white text-base font-[500] px-6 py-2 rounded-lg" style={{
                        background: 'linear-gradient(84.67deg, #BFE27D 0%, #35BCE7 100%)',
                    }}>
                        Lees meer
                    </button>
                </div>
            </div>

            {/* Second div with cards */}
            <div className="bg-[#9AA4D9] w-full h-[572px] flex flex-col lg:flex-row items-center justify-center">
                <div className='font-poppins'>
                    <h3 className='text-[#39468C] font-bold text-[32px] mb-4'>Laatste nieuws</h3>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center justify-start'>
                            <div className='relative bg-white w-[288px] h-[336px] rounded-xl shadow-xl'>
                                <img src={card1} alt="card 1" className='w-[288px] h-[160px] rounded-t-xl rounded-b-0' />
                                <div className='w-[264px] h-[152px] mx-auto'>
                                    <p className='text-[11px] text-[#999999] font-semibold uppercase mt-3'>
                                        5 maart 2024
                                    </p>
                                    <h5 className='text-[#39468C] font-overlock text-xl font-bold mt-2'>
                                        Telefoonstoring
                                    </h5>
                                    <p className='text-[#39468C] text-sm mt-2'>
                                        Update: Telefoonstoring verholpen
                                    </p>
                                    <button type='button' className='absolute flex items-center text-sm font-[500] text-[#39468C] bottom-2 right-2'>
                                        Lees meer <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-start'>
                            <div className='relative bg-white w-[288px] h-[336px] rounded-xl shadow-xl'>
                                <img src={clock} alt="card 1" className='w-[288px] h-[160px] rounded-t-xl rounded-b-0' />
                                <div className='w-[264px] h-[152px] mx-auto'>
                                    <p className='text-[11px] text-[#999999] font-semibold uppercase mt-3'>
                                        5 maart 2024
                                    </p>
                                    <h5 className='text-[#39468C] font-overlock text-xl font-bold mt-2'>
                                        Telefoonstoring
                                    </h5>
                                    <p className='text-[#39468C] text-sm mt-2'>
                                        Update: Telefoonstoring verholpen
                                    </p>
                                    <button type='button' className='absolute flex items-center text-sm font-[500] text-[#39468C] bottom-2 right-2'>
                                        Lees meer <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-start'>
                            <div className='relative bg-white w-[288px] h-[336px] rounded-xl shadow-xl'>
                                <img src={warehouse} alt="card 1" className='w-[288px] h-[160px] rounded-t-xl rounded-b-0' />
                                <div className='w-[264px] h-[152px] mx-auto'>
                                    <p className='text-[11px] text-[#999999] font-semibold uppercase mt-3'>
                                        5 maart 2024
                                    </p>
                                    <h5 className='text-[#39468C] font-overlock text-xl font-bold mt-2'>
                                        Telefoonstoring
                                    </h5>
                                    <p className='text-[#39468C] text-sm mt-2'>
                                        Update: Telefoonstoring verholpen
                                    </p>
                                    <button type="button" className='absolute flex items-center text-sm font-[500] text-[#39468C] bottom-2 right-2'>
                                        Lees meer <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='cursor-pointer text-right flex items-center justify-end text-sm font-[500] text-[#39468C] mt-4'>
                        Bekijk alle nieuwsberichten <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
                    </p>
                </div>
            </div>

            {/* Third div */}
            <div className="w-full h-[500px] flex flex-col lg:flex-row items-center justify-center">
                {/* Text Section */}
                <div className="relative w-[597px] h-[372px] text-left">
                    <h2 className="font-overlock text-[32px] text-[#FF6B38] lg:text-4xl font-bold mb-4">
                        Schrijf je in voor onze nieuwsbrief
                    </h2>
                    <p className="font-poppins text-base font-normal text-black">
                        Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.

                        <span className='pt-2'>
                            <br />Wilt u meer weten over onze energiebesparende maatregelen?
                        </span>
                    </p>
                    {/* Button */}
                    <button className="absolute w-[131px] h-10 text-white text-base font-[500] rounded-lg bottom-8" style={{
                        background: 'linear-gradient(84.67deg, #FF6B38 0%, #FFD201 100%)'
                    }}>
                        Inschrijven
                    </button>
                </div>

                {/* Image */}
                <div className="w-[498px] h-[372px]">
                    <img src={inbox} alt="view" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
