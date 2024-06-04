import 'swiper/css';
import { useTranslation } from "react-i18next";
import { Slider } from '../Components/Slider/Slider';
import 'animate.css/animate.min.css';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className='medium:pt-[6rem] extraSmal:pt-[5rem]'>
      <section className="section relative flex justify-between bg-bgcolor pt-[5.8rem]">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal:w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-613 w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium:text-2xl text-black small:mb-12 extraSmal:mb-8 after-element"
            >
              {t('About Us')}
            </h1>
            <p className=" extraSmal:pb-2 extraLarge:w-[36.125rem] font-medium large:text-xl extraSmal:text-xs text-gray">
              {t('About Us description 1')}
              <br />
              <br />
              {t('About Us description 2')}
              <br />
              <br />
              {t('About Us description 3')}
            </p>
          </div>
          <div
            className="relative max-h-622 small:max-w-500 extraSmal:max-w-[70vw] anim__line-2 wow animate__animated animate__fadeInRight"
          >
            <span
              className="line__grey-4 absolute wow animate__animated animate__fadeInDown"
            ></span>
            <span
              className="line__accent-4 absolute wow animate__animated animate__fadeInDown"
            ></span>
            <img className="w-full h-auto small:min-w-72" src="img/about-1.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section flex justify-between bg-bgcolor">
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal:w-11/12 mx-auto px-2.5 flex small:flex-row extraSmal:flex-col-reverse items-center gap-8"
        >
          <div
            className="max-w-613 w-full mr-auto wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-basic font-bold large:text-titleSize medium:text-2xl text-black small:mb-12 extraSmal:mb-8 small:pt-32 extraSmal:pt-0 after-element"
            >
              {t('Our values')}
            </h1>
            <p className="large:pb-28 extraSmal:pb-7  extraLarge:w-[36.125rem] font-medium large:text-xl extraSmal:text-xs text-gray">
              {t("We are guided by the company's values in our daily work. OUR VALUES:")}
              <br />
              <ul className="medium:mb-12 extraSmal:mb-5 text-gray">
                <li className="list-disc large:text-xl extraSmal:text-xs ml-7">
                  {t('ATTENTION TO DETAIL')}
                </li>
                <li className="list-disc uppercase large:text-xl extraSmal:text-xs ml-7">
                  {t('RESPONSIBILITY')}
                </li>
                <li className="list-disc uppercase large:text-xl extraSmal:text-xs ml-7">
                  {t('Innovation and quality')}
                </li>
                <li className="list-disc uppercase large:text-xl extraSmal:text-xs ml-7">
                  {t('Transparency and ethics')}
                </li>
                <li className="list-disc uppercase large:text-xl extraSmal:text-xs ml-7">
                  {t('Teamwork and cooperation')}
                </li>
              </ul>
            </p>
          </div>
          <div
            className="relative max-h-622 small:max-w-500 extraSmal:max-w-[70vw] anim__line-3 wow animate__animated animate__fadeInRight"
          >
            <span
              className="line__grey-5 absolute wow animate__animated animate__fadeInRight"
            ></span>
            <span
              className="line__accent-5 absolute wow animate__animated animate__fadeInLeft"
            ></span>
            <img className="w-full h-auto small:min-w-72" src="img/about-2.png" alt="" />
          </div>
        </div>
      </section>

      <section className="mx-auto h-auto bg-bgcolor">
        <div
          className="container__big anim__line mx-auto px-2.5 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal:w-11/12"
        >
          <h1 className="font-basic font-bold large:text-titleSize medium:text-2xl text-black mb-8 after-element-smal">
            {t('Corporate newsletter')}
          </h1>

          <Slider />
        </div>
      </section>
    </div>
  );
};