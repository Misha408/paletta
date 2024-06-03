import { useTranslation } from "react-i18next";
import cn from 'classnames';
import '../../localization/i18n'
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [bigNavBar, setBigNavBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Укр');

  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguages = (lng, text) => {
    setActiveLanguage(text);
    i18n.changeLanguage(lng);
    setIsActive(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setBigNavBar(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(bigNavBar)

  return (
    <div className="main__wraper relative">
      <div
        className={cn(
          'header__wrapper',
          'h-24',
          'bg-white',
          'flex',
          'items-center',
          'rounded-bl-4xl rounded-br-4xl',
          'drop-shadow-2xl',
          'left-0 right-0',
          bigNavBar ? 'fixed m-auto md:max-w-[45rem] lg:max-w-4xl rounded-[3rem] top-[1rem] transition-all duration-600 ease-in-out' : 'top-0 fixed',
          'z-10',
          'transition-all',
          'duration-600'
        )}
      >
        <div className="container__big max-w-1340 mx-auto px-2.5 h-auto">
          <section className='header h-[6rem] flex items-center'>
            <NavLink to='/home' className="logo md:max-w-16 lg:max-w-24">
              <img src="./icons/Logo.svg" alt="logo.png" className="w-auto" />
            </NavLink>
            <nav className="header__nav flex-1 mx-auto">
              <ul className="header__nav-list flex justify-center space-x-8">
                <li className="header__nav-item">
                  <NavLink
                    to='/home'
                    className={`${location.pathname === '/' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                  >
                    {t('Main')}
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to='/product'
                    className={`${location.pathname === '/product' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                  >
                    {t('Product')}
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to='/about'
                    className={`${location.pathname === '/about' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                  >
                    {t('About Us')}
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to='/contacts'
                    className={`${location.pathname === '/contacts' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                  >
                    {t('Contacts')}
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="relative inline-block text-left">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 bg-white font-regular text-gray hover:text-accent"
                    id="options-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="active-lang" onClick={() => setIsActive(!isActive)}>
                      {activeLanguage}
                    </span>
                    <svg className={`h-5 my-auto ${isActive && 'rotate-180'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" class="transition-transform duration-300" id="dropdown-arrow" />
                    </svg>
                  </button>
                </div>


                <div
                  className={`origin-top-right  absolute right-0 mt-2.5 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${isActive ? 'block' : 'hidden'}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                  id="dropdown-menu"
                >
                  <button
                    onClick={() => changeLanguages('uk', 'Укр')}
                    className="block px-2.5 h-7 uppercase font-regular md:text-sm text-gray transition duration-300 ease-in-out transform hover:text-green-500"
                    role="menuitem"
                  >
                    Укр
                  </button>
                  <button
                    className="block px-2.5 h-7 uppercase font-regular text-gray transition duration-300 ease-in-out transform hover:text-green-500"
                    onClick={() => changeLanguages('en', 'Eng')}
                    role="menuitem"
                  >
                    Eng
                  </button>
                  <button
                    className="block px-2.5 h-7 uppercase font-regular text-gray transition duration-300 ease-in-out transform hover:text-green-500"
                    onClick={() => changeLanguages('de', 'Deu')}
                    role="menuitem"
                  >
                    Deu
                  </button>
                  <button
                    className="block px-2.5 h-7 uppercase font-regular text-gray transition duration-300 ease-in-out transform hover:text-green-500"
                    onClick={() => changeLanguages('pl', 'Pl')}
                    role="menuitem"
                  >
                    Pl
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
};

export default NavBar;