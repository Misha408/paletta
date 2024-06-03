import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../../localization/i18n'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Squash as Hamburger } from 'hamburger-react'

export const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState('Укр');

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguages = (lng, text) => {
    setActiveLanguage(text);
    i18n.changeLanguage(lng);
    setIsActive(false);
    navigate(`#${lng}`);
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <div className='relative'>
      <div className="w-full mx-auto bg-white fixed shadow-xl top-0 left-0 right-0 z-20">
        <section className=' header px-4 h-[5rem] flex items-center justify-between'>
          <NavLink to='/home' className="max-w-16">
            <img src="./icons/Logo.svg" alt="logo.png" className="w-auto" />
          </NavLink>

          <div className="relative inline-block text-left">
            <div className="relative inline-block text-left">
              <div className='flex items-center'>
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
                  <svg className={`h-5 my-auto ${isActive && 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" class="transition-transform duration-300" id="dropdown-arrow" />
                  </svg>
                </button>

                <Hamburger toggled={isOpen} toggle={setOpen} color='#6F8493' />
              </div>


              <div
                className={`origin-top-right absolute right-0 mt-2.5 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${isActive ? 'block' : 'hidden'}`}
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

      {isOpen &&
        <nav className={'header__nav mx-auto flex-1 bg-white z-50 transition-all h-screen duration-500 fixed top-[5rem] left-0 right-0'}>
          <ul className="header__nav-list flex flex-col text-center pt-24 gap-5">
            <li className="header__nav-item">
              <NavLink
                to='/home'
                className={`${location.pathname === '/' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                onClick={() => setOpen(false)}
              >
                {t('Main')}
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to='/product'
                className={`${location.pathname === '/product' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                onClick={() => setOpen(false)}
              >
                {t('Product')}
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to='/about'
                className={`${location.pathname === '/about' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                onClick={() => setOpen(false)}
              >
                {t('About Us')}
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to='/contacts'
                className={`${location.pathname === '/contacts' && 'text-green-500'} uppercase font-regular text-gray md:text-sm transition duration-300 ease-in-out transform hover:text-green-500`}
                onClick={() => setOpen(false)}
              >
                {t('Contacts')}
              </NavLink>
            </li>
          </ul>
        </nav>}
    </div>
  )
};