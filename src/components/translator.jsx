import React, { useEffect } from 'react';

function TranslateWidget() {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        // Una vez cargado el script, inicializa el widget de Google Translate
        window.googleTranslateElementInit();
      };
      document.body.appendChild(script);
    };

    // Verifica si la API de Google Translate ya está disponible
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    } else {
      // Si no está disponible, carga el script
      loadGoogleTranslateScript();
    }

    // Limpieza al desmontar el componente
    return () => {
      const script = document.querySelector('[src^="https://translate.google.com/translate_a/element.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="google_translate_element"></div>;
}

export default TranslateWidget;

