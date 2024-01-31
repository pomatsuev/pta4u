import Image from 'next/image';
import WhiteLogo from '../icons/logo_white.svg';
import Pta4uButton from './pta4u-button';

export default function Pta4uCalculated() {
  return (
    <div className={'container h-full mx-auto px-5'}>
      <div
        className="h-[400px] lg:h-[448px] bg-[url('/images/calculated-bg.jpeg')]
      flex flex-col items-center
      bg-cover rounded-[30px]">
        <Image className={'mt-[90px] lg:mt-[112px]'} src={WhiteLogo} alt={'logo'} />
        <h1
          className={
            'text-center text-white text-[18px] lg:text-[26px] lg:leading-[32px] mt-[14px] font-semibold'
          }>
          PTA – надежный оператор рынка переводческих услуг
        </h1>
        <Pta4uButton className={'w-[276px] lg:w-[343px] mt-[68px]'}>
          Рассчитать стоимость перевода
        </Pta4uButton>
      </div>
    </div>
  );
}
