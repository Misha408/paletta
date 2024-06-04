import { useTranslation } from "react-i18next";
import 'animate.css/animate.min.css';
import { Contacts } from "../Components/Contacts/Contacts";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <section
        className="relative style__background pb-4 flex justify-between bg-white wow animate__animated animate__fadeIn extraSmal:mt-[4rem] medium:mt-[4rem]"
      >
        <span
          className="line__grey absolute wow animate__animated animate__fadeInDown"
        ></span>
        <span
          className="line__accent absolute wow animate__animated animate__fadeInDown"
        ></span>
        <div
          className="container__big anim__line 2xextraLarge:w-[82.5rem] large:w-4/5 small:w-11/12 extraSmal:w-11/12 mx-auto px-2.5 medium:mt-[6rem] flex"
        >
          <div
            className="mr-8 text-left flex flex-col justify-center wow animate__animated animate__fadeInLeft"
          >
            <h1
              className="font-title 2xextraLarge:text-bigtitleSize large:text-5xl medium: text-2xl mb-4"
            >
              {t('Palleta')}
            </h1>
            <p
              className="text-xs small:w-32 extraSmal: w-28 medium:w-96 lg:text-xl lg:w-96 xl:w-96 2xextraLarge:w-96"
            >
              {t('With care for the environment')}
            </p>
          </div>
        </div>
      </section>

      <section
        className="section style__background-2 small:bg-left-center extraSmal:bg-top-center extraSmal:bg-50 h-full small:h-fit py-10 flex justify-between bg-bgcolor wow animate__animated animate__fadeIn"
      >
        <div
          className="container__big anim__line my-auto 2xextraLarge:w-[82.5rem] large:w-11/12 py-4 small:justify-end mx-auto px-2.5 flex"
        >
          <div
            className="my-auto small:pt-0 extraLarge:py-32 large:ml-auto large:w-5/12 small:w-1/2 extraSmal:pb-3 extraSmal:pt-pt-44% wow animate__animated animate__fadeInRight"
          >
            <h1
              className="font-basic font-bold large:text-titleSize text-black large::mb-12 small:text-xl mb-3 after-element"
            >
              {t('About Us')}
            </h1>
            <p
              className="2xextraLarge:mb-14 extraLarge:text-2xl large:text-xl extraSmal:text-xs text-gray mb-5"
            >
              {t('Our company description')}
              <br />
              <br />
              {t('Our solutions are aimed at reducing environmental impact and ensuring sustainable development.')}
            </p>
            <div className="small:mt-14">
              <Link
                to='/about'
                className="text-center transition ease-in-out duration-300 lborder-solid border-4 rounded-md font-bold large:px-9 large:py-4 small:inline extraSmal:block extraSmal:px-6 extraSmal:py-2 extraSmal:mx-auto text-black hover:bg-accent hover:text-white border-accent"
              >
                {t('Read more')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section style__background-3 small:bg-right-center extraSmal:bg-top-center extraSmal:bg-50 h-full small:h-fit py-10 flex justify-between bg-bgcolor wow animate__animated animate__fadeIn"
      >
        <div
          className="container__big anim__line my-auto 2xextraLarge:w-[82.5rem] large:w-11/12 py-4 small:justify-end mx-auto px-2.5 flex"
        >
          <div
            className="my-auto small:pt-0 extraLarge:py-32 small:mr-auto large:w-5/12 small:w-1/2 extraSmal:pb-3 extraSmal:pt-pt-44% wow animate__animated animate__fadeInRight"
          >
            <h1
              className="font-basic font-bold large:text-titleSize text-black large:mb-12 small:text-xl mb-3 after-element"
            >
              {t('SM 0/40/70 mixture')}
            </h1>
            <p
              className="2xextraLarge:pb-14 extraLarge:text-2xl large:text-xl extraSmal:text-xs text-gray pb-5"
            >
              {t('SM 0/40/70 description')}
            </p>
            <div className="small:mt-14">
              <Link
                to='/product'
                className="text-center transition ease-in-out duration-300 lborder-solid border-4 rounded-md font-bold large:px-9 large:py-4 small:inline extraSmal:block extraSmal:px-6 extraSmal:py-2 extraSmal:mx-auto text-black hover:bg-accent hover:text-white border-accent"
              >
                {t('Read more')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contacts />
    </div>
  );
};