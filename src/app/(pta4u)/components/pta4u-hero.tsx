import Pta4uHeroSlider from './pta4u-hero-slider';
import Pta4uHeroForm from './pta4u-hero-form';

const slides: IHeroSlide[] = [
  {
    title:
      'Более 1200 клиентов за 2022 год оформили с нами документы для переезда за рубеж и релокации бизнеса',
    descriptions:
      'Предоставляем услуги полного цикла: от простого перевода до консульской легализации и отправки документов за границу',
    image: '/images/hero/slide1.png'
  },
  {
    title: 'Полиглот - бюро переводов для вас! Polyglot translation agency for you!',
    descriptions:
      'Предоставляем полный спектр переводческих услуг для частных лиц и корпоративных клиентов!',
    image: '/images/hero/slide2.png'
  },
  {
    title: '18 лет на рынке переводческих услуг!',
    descriptions:
      'Более 120 ведущих компаний Дальнего Востока, России и стран АТР доверяют нам в оказании переводческих услуг с 2005 года.',
    image: '/images/hero/slide3.png'
  },
  {
    title: 'Качество – наш приоритет!',
    descriptions:
      'По результатам опроса 2022 года, более 3000 постоянных клиентов выбирают Полиглот и ценят сотрудничество за качество предоставляемых услуг и строгое соблюдение сроков.',
    image: '/images/hero/slide4.png'
  }
];

export default function Pta4uHero() {
  return (
    <div className={'container h-full mx-auto px-5'}>
      <div className={'flex flex-col items-center'}>
        <h3
          className="text-[14px] leading-[16px] lg:text-[18px]
        lg:leading-[22px] text-center font-semibold bg-clip-text
        text-transparent bg-gradient-to-r from-[#F55751] to-[#D83CA3]">
          Polyglot - translation agency for you
        </h3>
        <h1
          className={
            'mt-[11px] text-[22px] leading-[28px] lg:text-[45px] lg:leading-[54px] text-center font-semibold'
          }>
          Бюро переводов во Владивостоке
        </h1>
        <p
          className={
            'mt-[12px] lg:mt-[20px] max-w-[789px] text-center text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px]'
          }>
          Переводим на 45 языков, низкие цены, делаем все быстро и удаленно, вам только приехать и
          забрать. Можем отправить почтой.
        </p>
        <div className={'mt-[28px] lg:mt-[35px] w-full relative'}>
          <Pta4uHeroSlider slides={slides} />
          <Pta4uHeroForm
            className={'mt-[20px] lg:mt-0 lg:absolute right-[40px] bottom-[40px] z-50 w-[344px]'}
          />
        </div>
      </div>
    </div>
  );
}
