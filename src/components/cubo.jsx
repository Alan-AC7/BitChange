import '../index.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Cubo() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="cubo" className="max-w-screen-xl mx-auto py-8 px-4 lg:py-12 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            {t('cubo.cubo1')}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">

          <div className="mr-0 md:mr-8 mb-6 md:mb-0 rounded-lg">
            <img
              className="w-1/2 md:w-full mx-auto rounded-lg"
              src="https://cuboplus.dev/img/logo%20cubo+.png"
              alt="can_help_banner"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    {t(`cubo.cubo${index * 2}`)}
                  </h3>
                  <p className="text-sm text-justify">
                    {t(`cubo.cubo${index * 2 + 1}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cubo;


