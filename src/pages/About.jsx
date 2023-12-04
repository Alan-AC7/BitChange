import React, { useEffect, useState } from 'react';
import Footer from '../components/footer'
import Cubo from '../components/cubo'
import Team from '../components/team'
import '../App.css'
import { useTranslation } from 'react-i18next';


function About () {
  const {t,i18n} = useTranslation();
  return (
    <>
    <br></br>
    <br></br>
    
    <div className="flex flex-col w-full border-opacity-50 p-10">
     
      <div className="divider text-3xl text-[rgb(242,135,13)] font-bold">{t('about.about1')}</div>
    
    </div>
    <Cubo></Cubo>
    <br></br>
    <Team></Team>
    
    
    
      
    
    <br></br>
          <Footer></Footer>
       
        
        </>
  );
};


export default About;

<>
<br></br>
<br></br>

<div className="flex flex-col w-full border-opacity-50 p-10">
 
  <div className="divider text-3xl text-[rgb(242,135,13)] font-bold">ABOUT US</div>

</div>
<Cubo></Cubo>
<br></br>
<Team></Team>



  

<br></br>
      <Footer></Footer>
   
    
    </>