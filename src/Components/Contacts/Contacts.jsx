import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from "react-router-dom";
import 'animate.css/animate.min.css';

export const Contacts = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const wow = new WOW.WOW({
      offset: window.innerWidth < 768 ? 0 : 300
    });
    wow.init();
  }, []);

  return (
    <div className="extraSmal:h-full contact-h ">
      <section className="section bg-white">
        <div className="container__big max-w-1340 mx-auto px-2.5">
          <div
            className="wrapper small:flex extraSmal:gap-6 extraSmal:block justify-between"
          >
            <div className="max-w-416 wow animate__animated animate__fadeInLeft">
              <h1
                className="font-basic font-bold medium:text-paragraphSize extraSmal:text-base text-black mb-12 large:pt-48 extraSmal:pt-20 after-element-smal"
              >
                {t('Contacts')}
              </h1>
              <div className="contact__info">
                <h3 className="font-bold mb-2.5">
                  {t('Address for correspondence:')}
                </h3>
                <p className="text-gray mb-6 medium:text-base extraSmal:text-xs">
                  {t('Cab. Nº7, 126 Bekhterevsky lane, Kyiv, 04053, Ukraine')}
                </p>
                <h3 className="font-bold mb-2.5">
                  {t('Phone:')}
                </h3>
                <p className="text-gray mb-6 medium:text-base extraSmal:text-xs">
                  <a href="tel:+380501461286">+380 50 146 1286</a>
                </p>
                <h3 className="font-bold mb-2.5">
                  {t('Mail:')}
                </h3>
                <p className="text-gray mb-6 medium:text-base extraSmal:text-xs">
                  <a href="mailto:send.to.company.manager@gmail.com">
                    send.to.company.manager@gmail.com
                  </a>
                </p>
                <h3 className="font-bold mb-2.5">
                  {t('We are on social media:')}
                </h3>
                <Link to="#" class="telegram inline-block w-7">
                  <img src="./icons/telegram.svg" alt="telegram" />
                </Link>
                <Link className="whatsapp inline-block w-7" to="#">
                  <img src="./icons/whatsapp.svg" alt="whatsapp" />
                </Link>
              </div>
            </div>
            <div
              className="max-w-525 w-full extraSmal:pt-12 extraSmal:mx-auto small:mx-0 large:pt-36 text-center wow animate__animated animate__fadeInRight"
            >
              <h1
                className="font-basic font-bold extraSmal:text-2xl large:text-titleSize text-black mb-14 after-element-center"
              >
                {t('Contact us')}
              </h1>
              <form action="#" method="post" className="flex flex-col items-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('Name')}
                  className="mb-6 w-full border border-none text-gray rounded-md py-3 px-6 bg-bgcolor outline-0"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t('Phone')}
                  className="mb-6 w-full border border-none text-gray rounded-md py-3 px-6 bg-bgcolor outline-0"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='E-mail'
                  className="mb-6 w-full border border-none text-gray rounded-md py-3 px-6 bg-bgcolor outline-0"
                />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t('Message')}
                  className="mb-9 w-full border border-none text-gray rounded-md py-3 px-6 bg-bgcolor outline-0"
                ></textarea>
                <button
                  type="submit"
                  className="transition ease-in-out duration-300 border-solid border-4 font-bold px-10 py-4 rounded-md text-black hover:bg-accent hover:text-white border-accent mb-6"
                >
                  {t('Read more')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};