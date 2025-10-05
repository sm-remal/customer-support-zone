import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return ( 

        <div className='max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5 bg-black mt-12'>
            <div className='md:flex md:gap-4 pt-8 md:pt-16 pb-5 pl-5 md:pl-10'>
                <div className='flex-1 lg:mr-20 md:ml-5'>
                    <h3 className='text-[14px] md:text-[15px] lg:text-[18px] font-bold text-gray-100 pb-2'>CS — Ticket System</h3>
                    <p className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Our Customer Service Zone is dedicated to providing you with the best support experience. we have committed to ensuring every customer inquiry is addressed with speed and care. Our team works tirelessly to resolve issues. Whether it's a quick query or a detailed concern, our Customer Service Zone is here to assist you 24/7. Experience service excellence today.</p>
                </div>
                <div className='flex-1 list-none mt-2 md:mt-0'>
                    <h3 className='text-[14px] md:text-[15px] lg:text-[18px] font-bold text-gray-100 pb-2'>Company</h3>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>About Us</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Our Mission</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Contact Saled</li>
                </div>
                <div className='flex-1 list-none'>
                    <h3 className='text-[14px] md:text-[15px] lg:text-[18px] font-bold text-gray-100 pb-2'>Services</h3>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Products & Services</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Customer Stories</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Download Apps</li>
                </div>
                <div className='flex-1 list-none'>
                    <h3 className='text-[14px] md:text-[15px] lg:text-[18px] font-bold text-gray-100 pb-2'>Information</h3>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Privacy Policy</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Terms & Conditions</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400'>Join Us</li>
                </div>
                <div className='flex-1 list-none'>
                    <h3 className='text-[14px] md:text-[15px] lg:text-[18px] font-bold text-gray-100 pb-2'>Social Links</h3>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400 flex items-center gap-2'> <FaTwitter />@CS — Ticket System</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400 flex items-center gap-2'><FaLinkedin />@CS — Ticket System</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400 flex items-center gap-2'><FaFacebook />@CS — Ticket System</li>
                    <li className='text-[11px] md:text-[14px] 2xl:text-[16px] text-gray-400 flex items-center gap-2'><FaEnvelope />support@cst.com</li>
                </div>
            </div>
            <div className='border-t-1 border-gray-50 text-center py-5'>
                <p className='text-[12px] md:text-[15px] 2xl:text-[16px] text-gray-400'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>

    );
};

export default Footer