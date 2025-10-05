import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Resolved = ({ resolvedTicket }) => {
  console.log(resolvedTicket)
  return (
    <div className="space-y-3 w-full border-2 p-3 mt-3 rounded-lg bg-green-50 border-green-200">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-medium">{resolvedTicket.title}</h3>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-green-600 flex items-center gap-2'><FaCheck />Completed</p>
          <p className='text-[12px] text-gray-400 font-semibold'>Click to remove</p>
        </div>
      </div>
    </div>
  );
};

export default Resolved;