import '../index.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Article () {
  const {t,i18n} = useTranslation();
  return (
    <>
    <div className='p-5'>
    <div className="">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://u.today/sites/default/files/styles/1600x900/public/2023-03/31499.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">{t('article.start')}<span class="text-[rgb(242,135,13)]"> {t('article.start2')}</span> {t('article.start3')}</h1>
          <br></br>
          <p className="py-5 text-xl">{t('article.start4')} </p>
          
          <p className="py-3 text-xl">
                <a href="https://www.bitcoin.kn/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">The Bitcoin Knowledge podcast</a>
          </p>
          <p className="py-3 text-xl">
                <a href="https://podcasts.apple.com/es/podcast/bitcoin-en-espa%C3%B1ol/id1405877457" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Bitcoin Podcast</a>
          </p>
          <p className="py-3 text-xl">
                <a href="https://bitcoinmagazine.com/articles" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Bitcoin Magazine</a>
          </p>
        </div>
      </div>
    </div>
    </div>
    
    
    </>
  );
};

export default Article;

