import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { Link } from "react-router-dom";
import 'animate.css/animate.min.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = '';

export const Contacts = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,13}$/;

  const notify = () => toast.success(t('Thank you for contacting us, please wait for a call'), {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  useEffect(() => {
    const wow = new WOW.WOW({
      offset: window.innerWidth < 768 ? 0 : 300
    });
    wow.init();
  }, []);

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.get('name')) {
      errors.name = t('Name is required');
    }

    if (!formData.get('phone')) {
      errors.phone = t('Phone is required');
    } else if (!phoneRegex.test(formData.get('phone'))) {
      errors.phone = t('Invalid phone number format');
    }

    if (!formData.get('email')) {
      errors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      errors.email = t('Invalid email address');
    }

    if (!formData.get('message')) {
      errors.message = t('Message is required');
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email');
      const message = formData.get('message');

      const messageString = `Ім'я: ${name}\nТелефон: ${phone}\nЕлектронна пошта: ${email}\nПовідомлення: ${message}`;
      sendMassege(messageString);

      event.target.reset();
      notify();
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const sendMassege = async (message) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `${BASE_URL}sendMessage?chat_id=-4279468432&text=${encodedMessage}`;

    const response = await fetch(url);
    console.log(response);
  };

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
              <form
                action="#"
                method="post"
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <div className="mb-6 w-full">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('Name')}
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-none'
                      } text-gray rounded-md py-3 px-6 bg-bgcolor outline-0`}
                  />
                  {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                </div>

                <div className="mb-6 w-full">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t('Phone')}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-none'
                      } text-gray rounded-md py-3 px-6 bg-bgcolor outline-0`}
                  />
                  {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}
                </div>

                <div className="mb-6 w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='E-mail'
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-none'
                      } text-gray rounded-md py-3 px-6 bg-bgcolor outline-0`}
                  />
                  {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder={t('Message')}
                    className={`w-full border ${errors.message ? 'border-red-500' : 'border-none'
                      } text-gray rounded-md py-3 px-6 bg-bgcolor outline-0`}
                  />
                  {errors.message && <p className="text-red-500 mb-2">{errors.message}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className="transition ease-in-out duration-300 border-solid border-4 font-bold px-10 py-4 rounded-md text-black hover:bg-accent hover:text-white border-accent mb-6"
                  >
                    {t('Send')}
                  </button>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};