import React, { useEffect, useState } from 'react';
import Footer from '../components/footer'
import Article from '../components/article'
import Cubo from '../components/cubo'
import Why from '../components/whybtc'
import Steps from '../components/steps'
import Wallet from '../components/wallets'
import Gallery from '../components/gallery'
import Video from '../components/video'
import WebView from '../components/webview'
import Team from '../components/team'
import '../App.css'



const About = () => {

  return (
    
    
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
  );
};

export default About;