import { useTranslation } from "react-i18next";

export const CardPeople = ({ name, text }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-5 max-w-xs mx-auto bg-white shadow-custom-dark pb-[1.25rem]">
      <img src="./img/Iliya.jpg" alt="People" className="medium-[0.875rem] mb-4" />
      <div className="pl-[1rem] pr-[1rem]">
        <div className="mb-5 text-black large:text-xl font-bold medium:text-base">
          {t(`${name}`)}
        </div>
        <div className="text-black font-bold large:text-xl medium:text-base">
          {t(`${text}`)}
        </div>
      </div>
    </div>
  );
};