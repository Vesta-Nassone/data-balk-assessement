import React from 'react';
import buildingImage from '../images/building.svg';
import card1 from '../images/card1.svg';
import arrowRight from '../images/arrow-right.svg';
import clock from '../images/clock.svg';
import warehouse from '../images/warehouse.svg';
import inbox from '../images/inbox.svg';
import blob2 from '../images/blob2.svg';
import blob3 from '../images/blob3.svg';

const MainContent = () => {
    return (
        <div className="bg-white">
            {/* First Div with Image and Text */}
            <div className="w-full px-4 py-8 flex flex-col lg:flex-row items-center justify-center">
                {/* Image */}
                <div className="relative flex justify-center mb-8 lg:mb-0">
                    <img src={buildingImage} alt="view" className="w-full max-w-[496px] h-auto object-cover z-20 rounded-xl" />
                    <div className='absolute w-1/2 h-1/2 top-[-10%] left-[-10%] transform rotate-[108.85deg] lg:w-[254px] lg:h-[274px] lg:top-[-48px] lg:left-[-64px]'>
                        <img src={blob2} alt="view" className="absolute top-0 left-0 w-full h-full z-10 transform rotate-[-108.85deg] mix-blend-multiply" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-[596px] lg:h-[372px] text-left lg:ml-8">
                    <h2 className="font-overlock text-2xl lg:text-4xl text-[#35BCE7] font-bold mb-4">
                        We verbeteren onze woningen
                    </h2>
                    <p className="font-poppins text-sm lg:text-base font-normal text-black mb-4">
                        Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                        <span className='block mt-4'>
                            Wilt u meer weten over onze energiebesparende maatregelen?
                        </span>
                    </p>
                    {/* Button */}
                    <button className="w-full lg:w-[131px] h-10 text-white text-base font-[500] px-6 py-2 mt-5 rounded-lg" style={{
                        background: 'linear-gradient(84.67deg, #BFE27D 0%, #35BCE7 100%)',
                    }}>
                        Lees meer
                    </button>
                </div>
            </div>

            {/* Second div with cards */}
            <div className="bg-[#9AA4D9] w-full py-8 px-4">
                <div className='font-poppins'>
                    <h3 className='font-overlock text-[#39468C] font-bold text-2xl lg:text-[32px] mb-4 text-center'>Laatste nieuws</h3>
                    <div className='flex flex-col lg:flex-row justify-center gap-5'>
                        <NewsCard
                            image={card1}
                            date="5 maart 2024"
                            title="Telefoonstoring"
                            content="Update: Telefoonstoring verholpen"
                        />
                        <NewsCard
                            image={clock}
                            date="17 februari 2024"
                            title="Energiebesparing - Wat doet KnusWonen?"
                            content="KnusWonen werkt hard aan het energiezuiniger maken van ..."
                        />
                        <NewsCard
                            image={warehouse}
                            date="30 januari 2024"
                            title="Energietoeslag: Heeft u er recht op?"
                            content="Steeds meer mensen hebben moeite om hun energierekening te ..."
                        />
                    </div>
                    <div className='flex items-center justify-center w-full lg:w-[927px] mx-auto'>
                        <p className='cursor-pointer ml-auto mr-2 flex items-center justify-end text-sm font-[500] text-[#39468C] mt-4'>
                            Bekijk alle nieuwsberichten <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Third div */}
            <div className="w-full px-4 py-8 flex flex-col lg:flex-row items-center justify-center">
                {/* Text Section */}
                <div className="relative w-full lg:w-[597px] text-left mb-8 lg:mb-0">
                    <h2 className="font-overlock text-2xl lg:text-4xl text-[#FF6B38] font-bold mb-4">
                        Schrijf je in voor onze nieuwsbrief
                    </h2>
                    <p className="font-poppins text-sm lg:text-base font-normal text-black mb-3">
                        Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                        <span className='block mt-4'>
                            Wilt u meer weten over onze energiebesparende maatregelen?
                        </span>
                    </p>
                    {/* Button */}
                    <button className="w-full lg:w-[131px] h-10 text-white text-base font-[500] rounded-lg mt-3" style={{
                        background: 'linear-gradient(84.67deg, #FF6B38 0%, #FFD201 100%)'
                    }}>
                        Inschrijven
                    </button>
                </div>

                {/* Image */}
                <div className="relative flex justify-center">
                    <img src={inbox} alt="view" className="w-full max-w-[498px] h-auto object-cover z-20 rounded-xl" />
                    <div className='hidden lg:block absolute w-1/3 h-1/3 bottom-[-5%] right-[-5%] transform rotate-[18.66deg] lg:w-[140.3px] lg:h-[171.3px] lg:bottom-[-12px] lg:right-[-38px]'>
                        <img src={blob3} alt="view" className="absolute bottom-0 right-0 w-full h-full z-10 transform rotate-[-18.66deg] mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsCard = ({ image, date, title, content }) => (
    <div className='relative bg-white w-full lg:w-[288px] rounded-xl shadow-xl mb-5 lg:mb-0'>
        <img src={image} alt={title} className='w-full h-[160px] object-cover rounded-t-xl' />
        <div className='w-full px-4 py-3'>
            <p className='text-[11px] text-[#999999] font-semibold uppercase'>{date}</p>
            <h5 className='text-[#39468C] font-overlock text-xl font-bold mt-2'>{title}</h5>
            <p className='text-[#39468C] text-sm mt-2 pb-10'>{content}</p>
            <button type='button' className='absolute flex items-center text-sm font-[500] text-[#39468C] bottom-2 right-2'>
                Lees meer <span className='ml-1'><img src={arrowRight} alt="arrow right" /></span>
            </button>
        </div>
    </div>
);

export default MainContent;