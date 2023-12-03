import '../index.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Why () {
  const {t,i18n} = useTranslation();
  return (
    <>
    <br></br>
         <div className="hero min-h-screen bg-base-200  p-10" id='whyBTC'>
           <div className="hero-content flex-col lg:flex-row-reverse">
             <img
               src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D"
               className="max-w-sm rounded-lg shadow-2xl"
               alt="Bitcoin Illustration"
             />
             <div>
               <h1 className="text-5xl text-[rgb(242,135,13)] font-bold mb-4">{t('why.why')}</h1>
               <h2 className="text-xl text-white-700 mb-6">{t('why.transforming')}</h2>
    
               <p className="py-2 px-3 text-lg text-justify">
               {t('why.offer')}
               </p>
    
               <p className="py-2 px-3 text-lg text-justify">
               {t('why.enable')}
               </p>
    
               <ul className="list-disc py-6 px-3">
                 <li className="text-lg">{t('why.list1')}</li>
                 <li className="text-lg">{t('why.list2')}</li>
                 <li className="text-lg">{t('why.list3')}</li>
               </ul>
             </div>
           </div>
         </div>
         
       </>
  );
};

export default Why;