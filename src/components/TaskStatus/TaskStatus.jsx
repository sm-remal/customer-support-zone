import React from 'react';

const TaskStatus = ({ ticket, resolvedHandle }) => {

  return (
    <div className="space-y-3 w-full border-2 p-3 mt-3 rounded-lg bg-fuchsia-100 border-fuchsia-200">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-medium mb-3">{ticket.title}</h3>
        <button onClick={() => resolvedHandle(ticket)} className="btn btn-active bg-green-300 hover:bg-green-500 w-full">Complete</button>
      </div>
    </div>
  );
};

export default TaskStatus; 


