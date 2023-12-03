import '../index.css'

import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-select';



function Navbar () {
  const {t,i18n} = useTranslation();
  return (
    <>
           
<nav class="bg-white dark:bg-neutral fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center">
      <img src="https://media4.giphy.com/media/EIOKH2p0wqgl9KW5fg/giphy.gif?cid=ecf05e47chjl6ohabujj27c6zgmlmvu2srtwumo4zuxqtuov&ep=v1_stickers_search&rid=giphy.gif&ct=s" class="h-8 mr-3" alt="Flowbite Logo"></img>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-[rgb(242,135,13)]">BitChange</span>
  </a>
  <div class="flex md:order-2">
      <LanguageSelector></LanguageSelector>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>  
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral md:dark:bg-neutral dark:border-gray-700">
    <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[rgb(242,135,13)] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('navbar.home')}</a>
      </li>
      <li>
        <a href="/whybitcoin" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[rgb(242,135,13)] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('navbar.why')}</a>
      </li>
      
      <li>
        <a href="/howtoredeem" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[rgb(242,135,13)] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('navbar.how')}</a>
      </li>
      
      
      <li>
        <a href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[rgb(242,135,13)] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('navbar.about')}</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

            </>
  );
};

export default Navbar;

