import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';

const Customer = ({ customerTicket, countProgress }) => {

    return (

        <div onClick={() => countProgress(customerTicket)} className="flex-1 p-3 space-y-2 border border-gray-300 shadow-md rounded-xl cursor-pointer  hover:shadow-md transform hover:scale-102 transition duration-300 ease-out">
            <div className="flex justify-between items-center">
                <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">
                    {customerTicket.title}
                </h2>
                <p className={`btn rounded-full flex items-center gap-1 text-xs ${customerTicket.status === "Open" ? "bg-green-300 text-green-800" : "bg-amber-200"}`}>
                    <FaCircle size={12} /> {customerTicket.status}
                </p>
            </div>
            <p className="text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]">
                {customerTicket.description}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="text-[10px] md:text-[14px] lg:text-[16px] text-gray-500">
                        #<span>{customerTicket.id}</span>
                    </h3>
                    <p className={`text-[10px] md:text-[14px] lg:text-[16px] font-medium ${customerTicket.priority === "HIGH PRIORITY" ? "text-red-600" : customerTicket.priority == "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-600"}`}>
                        {customerTicket.priority}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] md:text-[14px] lg:text-[16px] text-gray-500">
                        {customerTicket.customer}
                    </p>
                    <FaCalendar className="text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]" />
                    <span className="text-[10px] md:text-[14px] lg:text-[16px] text-gray-500">
                        {customerTicket.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Customer;