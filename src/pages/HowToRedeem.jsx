import React, { useEffect, useState } from 'react';
import Steps from '../components/steps';
import Wallet from '../components/wallets';
import Gallery from '../components/gallery';
import WebView from '../components/webview';
import Footer from '../components/footer';


const HowToRedeem = () => {

  return (
    <>
    
    <br></br>
    <div className="flex flex-col w-full border-opacity-50 p-10">
 
 <div className="divider text-3xl text-[rgb(242,135,13)] font-bold pt-10" id='steps'>REDEEM PROCESS</div>
 <br></br>
 <Steps></Steps>
<Wallet></Wallet>
</div>

<div className="flex flex-col w-full border-opacity-50 p-10">

 <div className="divider text-3xl text-[rgb(242,135,13)] font-bold">WHAT CAN YOU DO AFTER REDEEMING?</div>

</div>

<Gallery></Gallery>
<div className='p-10'>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-black dark:text-white m-5">You received your change in BTC. Now what?</h1>
      <p className="py-6 text-black dark:text-white m-5 text-2xl">You can see BTC Map to see which businesses accept Bitcoin! </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="w-auto h-auto  flex items-center ">
<WebView source="https://btcmap.org/map#14/13.70136/-89.19408"  className="border-2 border-red-500"
       />
    </div>
    </div>
  </div>
</div>
</div>

<Footer></Footer>

    </>
  );
};

export default HowToRedeem;