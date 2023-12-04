import '../index.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Video () {
  const {t,i18n} = useTranslation();
  return (
    <>
<div className='p-10'>

<div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
  <div className="hero-content flex-col lg:flex-row items-center justify-center">
    <div className="orange-border p-4 rounded-lg">
      <div className="text-top lg:text-left text-center lg:text-center">
        <h1 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight font-bold"><span class="text-[rgb(242,135,13)]">{t('video.title1')}</span></h1>
        <br></br>
        <p className="text-lg lg:text-2xl mb-6 lg:mb-10">{t('video.text1')}</p>
      </div>

      <div className="card flex-shrink-0 w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-96">
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L-Qhv8kLESY" //provicional en lo que se pone el que debe ser
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</>
  );
};


export default Video;

