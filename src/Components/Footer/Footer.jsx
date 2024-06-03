import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-footer">
      <div className="extraSmal:max-w-310 extraSmal:px-2 md:max-w-2xl lg:max-w-[82.5rem] h-40 m-auto flex justify-between items-center">
        <img src="./icons/Logo.svg" alt="logo.png" className="extraSmal:w-[3rem] medium:w-[5rem]" />

        <nav className="header__nav mx-auto">
          <ul className="header__nav-list flex text-center extraSmal:flex-col extraSmal:gap-1 medium:flex-row medium:gap-4">
            <li className="header__nav-item">
              <NavLink
                to='/product'
                className={`uppercase font-regular text-gray medium:text-base extraSmal:text-xs`}
              >
                {t('Product')}
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to='/about'
                className={`uppercase font-regular text-gray medium:text-base extraSmal:text-xs`}
              >
                {t('About Us')}
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to='/contacts'
                className={`uppercase font-regular text-gray medium:text-base extraSmal:text-xs`}
              >
                {t('Contacts')}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-1.5">
          <Link href="#" class="telegram inline-block w-7">
            <img src="./icons/telegram.svg" alt="telegram" />
          </Link>
          <Link class="whatsapp inline-block w-7" href="#">
            <img src="./icons/whatsapp.svg" alt="whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
};