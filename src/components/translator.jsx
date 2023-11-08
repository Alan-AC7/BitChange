import React, { useEffect } from 'react';

function TranslateWidget() {
  useEffect(() => {
    // Función para inicializar el widget de Google Translate
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }

    // Carga el script de Google Translate y llama a la función de inicialización
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
}

export default TranslateWidget;
