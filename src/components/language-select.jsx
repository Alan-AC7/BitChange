// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      {/* Agrega más opciones según los idiomas que admitas */}
    </select>
  );
}

export default LanguageSelector;
