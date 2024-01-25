'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Stars from '../icons/stars.svg'
import Star from '../icons/star.svg'
import Image from "next/image";
import Pta4uButton from "./pta4u-button";
const images = [
  '/images/sponsors/image 1047.png',
  '/images/sponsors/image 1048.png',
  '/images/sponsors/image 1049.png',
  '/images/sponsors/image 1050.png',
  '/images/sponsors/image 1051.png',
  '/images/sponsors/image 1053.png',
  '/images/sponsors/image 1048.png',
  '/images/sponsors/image 1049.png',
  '/images/sponsors/image 1050.png',
  '/images/sponsors/image 1050.png',
  '/images/sponsors/image 1051.png',
  '/images/sponsors/image 1053.png',
  '/images/sponsors/image 1048.png',
  '/images/sponsors/image 1049.png',
];
export default function Pta4uReviews() {
  return <div className={'container h-full mx-auto px-5 flex flex-col items-center'}>
    <p className={'text-[18px] leading-[22px]'}>
      <span className={'text-[#F55751] font-semibold'}>Более 20</span> лучших компаний выбирают сервис Polyglot
    </p>
    <div className={'reviews-slider'}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        freeModeSticky={true}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {
          images.map((image, i) => {
            return <SwiperSlide key={i}>
              <div style={{width: '138px', height: '128px'}}>
                <Image
                  objectFit={'scale-down'}
                  fill={true}
                  src={image}
                  alt={'alt'}
                />
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
    <h1 className={'text-[30px] leading-[36px] font-semibold'}>Отзывы Яндекс и 2ГИС</h1>
    <p className={'mt-[20px] text-[24px] leading-[36px] max-w-[760px] text-center'}>
      "Периодически перевожу различные документы, как личные так и по работе. Любезные девушки , всегда подскажут как лучше сделать и где можно сэкономить. Качество перевода всегда всегда на высоте"
    </p>
    <div className={'mt-[20px]'}>
      <Image src={Stars} alt={'img'} />
    </div>
    <p className={'mt-[10px] text-[18px] font-semibold'}>Джовани Селезнев</p>
    <p className={'mt-[4px] text-[16px] italic font-serif text-[#747373]'}>Знаток города 5 уровня</p>
    <div className={'mt-[32px] flex flex-col lg:flex-row gap-[10px] lg:gap-[24px]'}>
      <Pta4uButton type={'outline'}>
        <div className={'text-inherit flex gap-[7px]'}>
          Яндекс отзывы:
          <div className={'text-inherit flex gap-[4px]'}>
            <Image src={Star} alt={'img'} />
            4.7
          </div>
        </div>
      </Pta4uButton>
      <Pta4uButton type={'outline'}>
        <div className={'text-inherit flex gap-[7px]'}>
          2ГИС отзывы:
          <div className={'text-inherit flex gap-[4px]'}>
            <Image src={Star} alt={'img'} />
            4.9
          </div>
        </div>
      </Pta4uButton>
    </div>
  </div>
}
