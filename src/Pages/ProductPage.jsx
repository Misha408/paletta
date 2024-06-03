import { useTranslation } from "react-i18next";
import 'animate.css/animate.min.css';

export const ProductPage = () => {
  const { t } = useTranslation();

  return (
    <div className="medium:pt-[6rem] extraSmal:pt-[5rem]">
      <section className="section relative flex justify-between bg-bgcolor">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal: w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-613 w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium: text-2xl  text-black small:mb-12 extraSmal:mb-8 small:pt-32 extraSmal:pt-0 after-element"
            >
              {t('Mixture of SM 0/40/70')}
            </h1>
            <p className="medium:pb-28 extraSmal:pb-2 extraLarge:w-[36.125rem] font-medium large:text-xl extraSmal:text-xs text-gray">
              {t('SM 0/40/70 description')}
              <br />
              <br />
              {t('The separation technology description')}
              <br />
              <br />
              {t('Our mineral mixture SM 0/40/70 description')}
            </p>
          </div>
          <div
            className="relative max-h-622 small:max-w-500 extraSmal:max-w-[70vw] anim__line-2 wow animate__animated animate__fadeInRight"
          >
            <span
              className="line__grey-2 absolute wow animate__animated animate__fadeInDown"
            ></span>
            <span
              className="line__accent-2 absolute wow animate__animated animate__fadeInLeft"
            ></span>
            <img className="w-full h-auto small:min-w-72" src="img/product-1.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section flex justify-between bg-bgcolor">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal: w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-613 w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium: text-2xl  text-black small:mb-12 extraSmal:mb-8 small:pt-32 extraSmal:pt-0 after-element"
            >
              {t('Mixture and concrete')}
            </h1>
            <p className="medium:pb-28 extraSmal:pb-2  extraLarge:w-[36.125rem] font-medium large:text-xl extraSmal:text-xs text-gray">
              {t('The introduction of the mixture description')}
              <br />
              <br />
              {t('Due to the spherical shape of the particles description')}
              <br />
              <br />
              {t('Due to the particle size description')}
            </p>
          </div>
          <div
            className="relative max-h-622 small:max-w-500 extraSmal:max-w-[70vw] anim__line-3 wow animate__animated animate__fadeInRight"
          >
            <span
              className="line__grey-3 absolute wow animate__animated animate__fadeInDown"
            ></span>
            <span
              className="line__accent-3 absolute wow animate__animated animate__fadeInLeft"
            ></span>
            <img className="w-full h-auto small:min-w-72" src="img/product-2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section flex justify-between bg-bgcolor">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal: w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-613 w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium: text-2xl  text-black small:mb-12 extraSmal:mb-8 small:pt-32 extraSmal:pt-0 after-element"
            >
              {t('The main differences between the mixture and ash :')}
            </h1>
            <p className="medium:pb-28 extraSmal:pb-2 extraLarge:w-[36.125rem] font-medium large:text-xl extraSmal:text-xs text-gray">
              {t('The main differences between the mixture and ash :')}
              <br />
              <br />
              {t('1. The SM 0/40/70 description')}
              <br />
              {t('For our product description')}
              <br />
              <br />
              {t('Unburned carbon (carbon) description')}
              <br />
              <br />
              {t('2. Due to the long exposure description')}
              <br />
              <br />
              {t('3. Our product is more homogeneous and finer. description')}
            </p>
          </div>
          <div
            className="relative max-h-622 small:max-w-500 extraSmal:max-w-[70vw] anim__line-3 wow animate__animated animate__fadeInRight"
          >
            <img className="w-full h-auto small:min-w-72" src="img/product-3.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section flex justify-between bg-bgcolor medium:pt-32 extraSmal:pt-5 medium:pb-24 extraSmal:pb-2">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal: w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-3xl w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium: text-2xl  text-black small:mb-12 extraSmal:mb-8 small:pt-32 extraSmal:pt-0 after-element"
            >
              {t('Fields of application:')}
            </h1>
            <div className="medium:mb-28 extraSmal:mb-5 text-gray">
              <ul className="medium:mb-12 extraSmal:mb-5">
                <li className="list-disc medium:text-xl extraSmal:text-xs ml-7">
                  {t('Production of concrete.')}
                </li>
                <li className="list-disc medium:text-xl extraSmal:text-xs ml-7">
                  {t('Production of aerated concrete.')}
                </li>
                <li className="list-disc medium:text-xl extraSmal:text-xs ml-7">
                  {t('Production of cement.')}
                </li>
                <li className="list-disc medium:text-xl extraSmal:text-xs ml-7">
                  {t('Production of construction mixtures.')}
                </li>
              </ul>
              <p className="medium:mb-12 extraSmal:mb-5 medium:text-xl extraSmal:text-xs">
                {t('At all stages of production description')}
              </p>
              <ul>
                <li className="list-disc ml-7 medium:text-xl extraSmal:text-xs">
                  {t('Laboratory testing of raw materials and products (materials)')}
                </li>
                <li className="list-disc ml-7 medium:text-xl extraSmal:text-xs">
                  {t('Quality analysis of raw materials for production')}
                </li>
                <li className="list-disc ml-7 medium:text-xl extraSmal:text-xs">
                  {t('Selection of recipes for final products')}
                </li>
                <li className="list-disc ml-7 medium:text-xl extraSmal:text-xs">
                  {t('Technological consulting')}
                </li>
                <li className="list-disc ml-7 medium:text-xl extraSmal:text-xs">
                  {t('Conducting joint or cross-validation studies')}
                </li>
              </ul>
            </div>
          </div>
          <div className="wow animate__animated animate__fadeInRight">
            <div className="bg-white py-4 px-9 mb-14 min-h-64 h-fit shadow-tl">
              <h1
                className="font-basic font-bold text-2xl mb-7 text-black after-element"
              >
                {t('Geography of supply:')}
              </h1>
              <ul className="text-gray">
                <li className="list-disc ml-7 ">
                  {t('Europe')}
                </li>
                <li className="list-disc ml-7 ">
                  {t('Ukraine')}
                </li>
              </ul>
            </div>
            <div className="bg-white py-4 px-9 min-h-64 h-fit shadow-tl">
              <h1
                className="font-basic font-bold text-2xl mb-7 text-black after-element"
              >
                {t('Shipment of products:')}
              </h1>
              <ul className="text-gray">
                <li className="list-disc ml-7 ">
                  {t('Road transport:')}
                </li>
                <li className="list-disc ml-7 ">
                  {t('Railway transport')}
                </li>
                <li className="list-disc ml-7 ">
                  {t('Maritime transport')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};