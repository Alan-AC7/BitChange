import Footer from "../components/footer";
import { useTranslation } from 'react-i18next';

function Index() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://prod.wordpress.usemultiplier.cloud/wp-content/uploads/2023/03/62398ad198b195119954dee1-1920-x-1082-p-1600.webp)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">BITCHANGE</h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>

      <div className='p-5'>

        <div className="hero h-auto w-full bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <figure className="max-w-sm mx-auto lg:ml-0 lg:mr-8 rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://image.cnbcfm.com/api/v1/image/102730336-RTX1EWQK.jpg?v=1529451602"
                alt="Bitcoin Change"
                className="w-full h-auto"
              />
            </figure>
            <div className="mt-6 lg:mt-0">
              <h1 className="text-5xl font-bold mb-4">{t('index.subtitle1')}</h1>
              <p className="py-2 text-xl">
                {t('index.text1')}
              </p>
              <br></br>
              <a href="/Howtoredeem">
                <button className="btn btn-neutral bg-[rgb(242,135,13)] text-white">
                  {t('index.btn1')}
                </button>
                <br></br>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className='p-5'>
        <div className="hero h-auto w-full bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://cdn.images.express.co.uk/img/dynamic/23/750x445/1136210.jpg" className="w-full h-auto lg:w-1/2 mx-auto rounded-lg shadow-2xl" />
            <div className="mt-6 lg:mt-0">
              <h1 className="text-5xl font-bold">{t('index.subtitle2')}</h1>
              <br></br>
              <p className="py-5 text-xl">{t('index.text2')}</p>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <Footer></Footer>
    </>
  );
};

export default Index;
