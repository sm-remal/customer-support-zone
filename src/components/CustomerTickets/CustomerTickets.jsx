import { use } from 'react';
import Customer from '../Customer/Customer';
import TaskStatus from '../TaskStatus/TaskStatus';
import Resolved from '../Resolved/Resolved';

const CustomerTickets = ({ customerInfoPromise, countProgress, toggleStatus, resolvedHandle, resolved, customerCards }) => {
  const customerInfo = use(customerInfoPromise)

  return (
    <div className="max-w-screen-2xl mx-auto px-5 mt-7 md:mt-12">
      <h1 className="text-[22px] md:text-[25px] lg:text-[28px] font-semibold">
        Customer Task </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-2 md:mt-3">
        {/* Left Section */}
        <div className="md:col-span-9 flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {
              customerInfo.filter((cards) => !customerCards.includes(cards.id))
                .map(customerTicket => <Customer key={customerTicket.id} countProgress={countProgress} customerTicket={customerTicket}></Customer>)
            }
          </div>
        </div>

        {/* Right Section */}
        {/* Task Status Section  */}
        <div className="md:col-span-3 w-full py-4 rounded-xl md:-mt-14">
          <h2 className="text-lg font-semibold">Task Status</h2>

          {toggleStatus.length === 0 ? (
            <p className="text-sm text-gray-500">
              Select a ticket to add to Task Status ✅
            </p>
          ) : (
            toggleStatus.map((ticket, index) => (
              <TaskStatus key={index} resolvedHandle={resolvedHandle} ticket={ticket} />
            ))
          )}

          {/* Resolved Section  */}

          <div>
            <h2 className='text-lg font-semibold mt-5'>Resolve Task</h2>
          </div>

          {resolved.length === 0 ? (<p className="text-sm text-gray-500"> No resolve tasks yet ⚠️ </p>
          ) : (resolved.map((resolvedTicket, index) => (<Resolved key={index} resolvedTicket={resolvedTicket}></Resolved>))

          )}

        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;