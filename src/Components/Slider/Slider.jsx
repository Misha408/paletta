import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { CardPeople } from '../CardPeople/CardPeople';

const peoples = [
  {
    id: 1,
    name: 'Ilya Yanishyn:',
    text: 'Nature conservation is the responsibility of each of us.',
  },
  {
    id: 2,
    name: 'Ilya Yanishyn:',
    text: 'Environmental awareness is the key to a healthy future.',
  },
  {
    id: 3,
    name: 'Ilya Yanishyn:',
    text: "Let's take care of nature today to preserve it for future generations.",
  },
  {
    id: 4,
    name: 'Ilya Yanishyn:',
    text: 'Nature conservation is the responsibility of each of us.',
  },
  {
    id: 5,
    name: 'Ilya Yanishyn:',
    text: 'Environmental awareness is the key to a healthy future.',
  },
  {
    id: 6,
    name: 'Ilya Yanishyn:',
    text: "Let's take care of nature today to preserve it for future generations.",
  },
]

export const Slider = () => {
  return (
    <div className="relative m-auto">
      <div
        className="phones-swiper-button-prev -left-[2rem] hover:bg-accent transition duration-300 border-4 absolute top-1/2 -translate-y-1/2 border-accent w-14 h-14 items-center justify-center extraSmal:hidden medium:flex"
      >
        <img
          src="./icons/arrow.svg"
          alt="next"
          className="rotate-180 w-9"
        />
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        className='large:max-w-6xl medium:max-w-[40rem] large:max-w-[55rem] extraLarge:max-w-6xl p-4'
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: '.phones-swiper-button-prev',
          nextEl: '.phones-swiper-button-next',
        }}
        pagination
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {peoples.map((people) => (
          <SwiperSlide>
            <CardPeople key={people.id} name={people.name} text={people.text} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="phones-swiper-button-next extraSmal:hidden medium:flex absolute -right-[2rem] border-4 hover:bg-accent transition duration-300 top-1/2 -translate-y-1/2 border-accent w-14 h-14 items-center justify-center"
      >
        <img
          src="./icons/arrow.svg"
          alt="next"
          className="w-9"
        /> 
      </div>
    </div>
  );
};