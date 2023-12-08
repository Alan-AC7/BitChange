import React, { useEffect, useState } from 'react';
import Steps from '../components/steps';
import Wallet from '../components/wallets';
import Gallery from '../components/gallery';
import WebView from '../components/webview';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';

function HowToRedeem () {
  const {t,i18n} = useTranslation();
  return (
    <>
    
<br></br>
<div className="flex flex-col w-full border-opacity-50 p-10">

<div className="divider text-3xl text-[rgb(242,135,13)] font-bold pt-10" id='steps'>{t('how.how1')}</div>
<br></br>
<Steps></Steps>
<Wallet></Wallet>
</div>

<div className="flex flex-col w-full border-opacity-50 p-10">

<div className="divider text-3xl text-[rgb(242,135,13)] font-bold">{t('how.how2')}</div>

</div>

<div className='p-10'>


<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold text-black dark:text-white m-5">{t('how.how3')}</h1>
  <p className="py-6 text-black dark:text-white m-5 text-2xl">{t('how.how4')} </p>
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

<Gallery></Gallery>


<Footer></Footer>

</>
  );
};

export default HowToRedeem;

