// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative inline-block text-left">
      <select
      className="appearance-none bg-[rgb(242,135,13)] text-white py-1 px-2 pr-6 rounded-md leading-tight focus:outline-none focus:border-primary-color focus:border-2"
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="it">Italiano</option>
      <option value="fr">Français</option>
      <option value="ptbr">Português</option>
      <option value="la">Lingua Latina</option>
      <option value="de">Deutsch</option>
      <option value="ko">한국어</option>
      <option value="ja">日本語</option>
      <option value="zh">中文</option>
      <option value="uk">Український</option>
      <option value="ru">Русский</option>
      <option value="po">Polski</option>
      <option value="ca">Català</option>
      <option value="no">Norsk</option>
      <option value="sv">Svensk</option>
      <option value="tr">Türk</option>
      {/* Agrega más opciones según los idiomas que admitas */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 12l-8 8h16l-8-8z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LanguageSelector;
