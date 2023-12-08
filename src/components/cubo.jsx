import '../index.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Cubo () {
    const {t,i18n} = useTranslation();
    return (
        <>
            
        <div  id="cubo" class=" max-w-screen-xl mx-auto py-8 px-4 lg:py-12 lg:px-6">
        <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">{t('cubo.cubo1')}</h2>
        </div>
        
        <div class="flex flex-col md:flex-row" >
        
        <div class="mr-0 md:mr-8 mb-6 md:mb-0 rounded-lg">
        <img class="w-1/2 md:w-full mx-auto rounded-lg" src="https://cuboplus.dev/img/logo%20cubo+.png" alt="can_help_banner"></img>
        </div>
        
        
        <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
        <div class="w-full sm:w-1/2 mb-4 px-2 ">
            <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">CUBO+</h3>
                <p class="text-sm text-justify">
                {t('cubo.cubo2')} 
                </p>
            </div>
        </div>
        <div class="w-full sm:w-1/2 mb-4 px-2 ">
            <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6 ">{t('cubo.cubo3')}</h3>
                <p class="text-sm text-justify"> 
                {t('cubo.cubo4')}
                </p>
            </div>
        </div>
        
        <div class="w-full sm:w-1/2 mb-4 px-2 ">
            <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">{t('cubo.cubo5')}</h3>
                <p class="text-sm text-justify">
                {t('cubo.cubo6')}
                </p>
            </div>
        </div>
        
        <div class="w-full sm:w-1/2 mb-4 px-2 ">
            <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">{t('cubo.cubo7')}</h3>
                <p class="text-sm text-justify">
                {t('cubo.cubo8')}
                </p>
            </div>
        </div>
        
        
        </div>
        </div>
        </div>
        </>
    );
  };

export default Cubo;

