import React from 'react';
import bgImage from '../../assets/vector1.png'

const Banner = ({ toggleStatus, resolved }) => {

    return (
        <div>
            <div className='md:flex items-center gap-4 max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5 mt-5 md:mt-12'>
                <div className="flex flex-col justify-center items-center py-10 space-y-3 md:space-y-8 rounded-2xl flex-1 bg-gradient-to-r from-violet-700 to-purple-500 relative md:h-[220px] overflow-hidden">
                    <img src={bgImage} alt="progress" className="absolute left-0 w-[40%] -mb-1 h-full object-cover opacity-100" />
                    <img src={bgImage} alt="progress" className="absolute right-0 w-[40%] -mb-1 h-full object-cover opacity-100 scale-x-[-1]" />
                    <div className="relative z-10 text-center space-y-6">
                        <h3 className="text-2xl md:text-2xl lg:text-4xl text-white">In Progress</h3>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">{toggleStatus.length}</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center py-10 space-y-3 md:space-y-8 rounded-2xl flex-1 bg-linear-to-r from-[#41c557] to-[#07867c] relative md:h-[220px] overflow-hidden mt-5 md:mt-0">
                    <img src={bgImage} alt="progress" className="absolute left-0  w-[40%] -mb-1 h-full object-cover opacity-100" />
                    <img src={bgImage} alt="progress" className="absolute right-0 w-[40%] -mb-1 h-full object-cover opacity-100 scale-x-[-1]" />
                    <div className="relative z-10 text-center space-y-6">
                        <h3 className="text-2xl md:text-2xl lg:text-4xl text-white">Resolved</h3>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">{resolved.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

