import Image from "next/image";
import logo from '../icons/logo_d.svg';
import phone from '../icons/phone.svg';
import Link from "next/link";
import Pta4uButton from "./pta4u-button";

export default function Pta4uHeader() {
  const menu = [
    { id: 1, title: "Услуги", url: '/' },
    { id: 1, title: "Компания", url: '/about' },
    { id: 1, title: "Отзывы", url: '/' },
    { id: 1, title: "Оплата", url: '/' },
    { id: 1, title: "Контакты", url: '/' }
  ];
  return <div className={"container mx-auto flex items-center h-[50px] lg:h-[100px] " +
  "gap-6 lg:gap-10 xl:gap-20 px-5 justify-between lg:justify-start"}>
    <div>
      <Image className={'h-[30px] w-[78px] lg:h-[48px] lg:w-[123px]'} src={logo} alt={'logo'} />
    </div>
    <nav className={'hidden lg:block flex-1'}>
      <ul className={'flex justify-start gap-5'}>
        {
          menu.map(item => {
            return <li><Link href={item.url}>{item.title}</Link></li>
          })
        }
      </ul>
    </nav>
    <div className={'flex gap-2 lg:gap-4 xl:gap-8 font-semibold'}>
      <div className={'hidden lg:flex items-center'}>
        <Image src={phone} alt={'phone'}/>+7 902 480 0262
      </div>
      <Pta4uButton type={'outline'} size={'md'}>
        Заказать
      </Pta4uButton>
      {/*<button className={'py-1 lg:py-2.5 px-4 lg:px-8 text-[13px] lg:text-[16px] border border-[#D0D0D0] rounded-full'}>*/}
      {/*  Заказать*/}
      {/*</button>*/}
    </div>
  </div>
}
