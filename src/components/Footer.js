import React from 'react';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-[#E5E5E5]">
            {/* Grid section */}
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h5 className="font-overlock text-[20px] font-bold mb-2">Bel of mail ons</h5>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">012 - 345 67 89</p>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">klantenservice@knuswonen.nu</p>
                </div>
                <div>
                    <h5 className="font-overlock text-[20px] font-bold mb-2">Openingstijden</h5>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">
                        Maandag t/m donderdag van 8:30 tot 16:30 uur.
                    </p>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">
                        Vrijdag van 8:30 tot 12:00 uur
                    </p>
                </div>
                <div>
                    <h5 className="font-overlock text-[20px] font-bold mb-2">Kom langs op afspraak</h5>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">
                        Straatweglaan 123
                    </p>
                    <p className="font-poppins text-base font-normal text-[#1E1E1E]">
                        1234 AB Dorpstad
                    </p>
                </div>
                <div>
                    <h5 className="font-overlock text-[20px] font-bold mb-2">Volg ons op onze sociale kanalen</h5>
                    <div className='flex items-center'>
                        <img src={facebook} alt='facebook icon'/>
                        <img src={linkedin} alt='linkedin icon' className='ml-2'/>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="bg-white py-2">
                <div className="font-poppins max-w-7xl mx-auto flex justify-between items-center px-4 text-gray-600">
                    <div className="flex space-x-4">
                        <a href="/privacy" className="text-black text-xs font-normal underline">Privacy</a>
                        <a href="/cookies" className="text-black text-xs font-normal underline">Cookieverklaring</a>
                        <a href="/disclaimer" className="text-black text-xs font-normal underline">Disclaimer</a>
                    </div>
                    <div className="text-black text-xs font-normal">
                        &copy; KnusWonen {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
