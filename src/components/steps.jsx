import '../index.css';
import { useTranslation } from 'react-i18next';

import React from 'react'

function Steps () {
    const {t,i18n} = useTranslation();
    return (
        < >
            
        <div id='steps' className="hero h-auto w-full bg-base-200 rounded-lg">
         <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        
        <div class="text-center" >
        <p class="font-bold mt-4 text-sm leading-7 font-regular">
        {t('steps.steps1')}
        </p>
        <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight font-bold">
        {t('steps.steps2')} <span class="text-[rgb(242,135,13)]">{t('steps.steps3')}</span>
        </h3>
        
        </div>
        
        <div class="mt-20">
        <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
        
        <li class=" bg-gray-100 p-5 pb-10 text-center">
          <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div
                      class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                      1
                      
                  </div>
              </div>
              
              <div class="mt-4">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">{t('steps.steps4')}</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps5')}
                  </p>
        
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps6')}
                  </p>
              </div>
          </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
          <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div
                      class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                      2
                  </div>
              </div>
              <div class="mt-4">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">{t('steps.steps7')}</h4>
        
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps8')}
        
                  </p>
        
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps9')}
                  </p>
              </div>
          </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
          <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div
                      class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                      3
                  </div>
              </div>
              <div class="mt-4">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">{t('steps.steps10')}</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps11')}
                  </p>
                  <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                  {t('steps.steps12')}
                  </p>
              </div>
          </div>
        </li>
        
        </ul>
        </div>
        
        
        
        
        
        </div>
        </div>
        
        
          </>
    );
  };

export default Steps;

