import '../index.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Video() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="p-10">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="hero-content flex-col lg:flex-row items-center justify-center">
            <div className="orange-border p-4 rounded-lg">
              <div className="text-top lg:text-left text-center lg:text-center">
                <h1 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight font-bold">
                  <span className="text-[rgb(242,135,13)]">{t('video.title1')}</span>
                </h1>
                <br />
                <p className="text-lg lg:text-2xl mb-6 lg:mb-10">{t('video.text1')}</p>
              </div>

              <div className="card flex-shrink-0 w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Ajusta el ancho del contenedor del video y centra el contenido */}
                <div className="w-full h-96 flex items-center justify-center">
                  <iframe
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eAi4f8Z0jSE"
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
}

export default Video;
