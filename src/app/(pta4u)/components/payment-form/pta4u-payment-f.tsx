import Image from "next/image";
import Pta4uButton from "../pta4u-button";

export default function Pta4uPaymentF() {
  return <div className={'flex flex-col lg:flex-row w-full gap-[20px] lg:gap-[24px]'}>
    <div className={'w-full bg-[#F2F2F2] rounded-[20px] pt-[30px] lg:pt-[70px] flex flex-col items-center'}>
      <div className={'bg-white rounded-[30px] p-[14px] lg:p-[20px]'}>
        <div className={'relative lg:w-[217px] lg:h-[217px] w-[145px] h-[145px]'}>
          <Image
            src={'/images/payment/image1029.png'}
            alt={'img'}
            fill={true}
          />
        </div>
      </div>
      <p className={'mt-[19px] lg:mt-[46px] max-w-[216px] lg:max-w-[446px] text-center text-[14px] leading-[20px] lg:text-[18px] lg:leading-[26px] mb-[28px] lg:mb-[57px]'}>
        Сканируйте QR код из приложения вашего банка и введите верную сумму
      </p>
    </div>
    <div className={'w-full bg-[#F2F2F2] rounded-[20px] pt-[30px] lg:pt-[70px] flex flex-col items-center'}>
      <div className={'w-[173px] lg:w-[259px] bg-white rounded-[30px] p-[14px] lg:p-[20px]'}>
        <div className={'relative w-[130px] lg:w-[180px] h-[16px] lg:h-[23px] mt-[30px] lg:mt-[45px] mx-auto'}>
          <Image
            src={'/images/payment/image1069.png'}
            alt={'img'}
            fill={true}
          />
        </div>
        <p className={'pt-[12px] text-center text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px]'}>
          25 способов оплаты
        </p>
        <div className={'mt-[24px] lg:mt-[45px] mb-[10px] flex justify-center'}>
          <Pta4uButton className={'w-[130px] lg:w-[180px]'}>
            Оплатить
          </Pta4uButton>
        </div>
      </div>
      <p className={'mt-[19px] lg:mt-[46px] max-w-[216px] lg:max-w-[446px] text-center text-[14px] leading-[20px] lg:text-[18px] lg:leading-[26px] mb-[28px] lg:mb-[57px]'}>
        Перейдите на сайт Робокасса, введите верную сумму и следуйте инструкциям
      </p>
    </div>
  </div>
}
