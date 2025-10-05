import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import { Suspense } from 'react'
import { useState } from 'react';
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


const fetchCustomerInfo = async () => {
  const res = await fetch('/CustomerInfo.json');
  return res.json();
}

const customerInfoPromise = fetchCustomerInfo();

const App = () => {

  const [customerCards, setCustomerCards] = useState([]);
  const [toggleStatus, setToggleStatus] = useState([])
  const [resolved, setResolved] = useState([])

  const countProgress = (customer) => {
    toast("✔️ In-Progress !!!")
    setToggleStatus(() => [...toggleStatus, customer])
  }
  const resolvedHandle = (ticket) => {
    toast("✔️ Completed !!!")
    setToggleStatus((value) => value.filter((removeTicket) => removeTicket.id !== ticket.id))
    setResolved(() => [...resolved, ticket])
    setCustomerCards(() => [...customerCards, ticket.id]);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner resolved={resolved} toggleStatus={toggleStatus}></Banner>
      <Suspense fallback={<div className="flex justify-center items-center h-[100px]">
        <span className="loading loading-spinner sm:loading-lg md:loading-xl lg:loading-2xl"></span></div>}>
        <CustomerTickets customerCards={customerCards} resolved={resolved} resolvedHandle={resolvedHandle} toggleStatus={toggleStatus} countProgress={countProgress} customerInfoPromise={customerInfoPromise}></CustomerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default App;