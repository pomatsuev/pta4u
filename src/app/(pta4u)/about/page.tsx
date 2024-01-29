import {Metadata} from "next";
import SetBreadcrumbs from "../../../store/setBreadcrumbs";
import Pta4uBreadcrumbs from "../components/pta4u-breadcrumbs";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you',
  description: 'Polyglot - translation agency for you',
}

const breadcrumbs: IBreadcrumbs[] = [
  { title: 'Главная', sort: 0, url: '/' },
  { title: 'Компания', sort: 1},
] as IBreadcrumbs[];

export default function AboutPage() {
  return <div className={'mt-[76px]'}>
    <SetBreadcrumbs breadcrumbs={breadcrumbs}/>
    <div className={'container mx-auto px-5'}>
      <div className={'flex justify-center'}>
        <Pta4uBreadcrumbs />
      </div>
      <h1 className={'text-[45px] leading-[54px] text-center font-semibold mt-[18px]'}>Компания Polyglot</h1>
      <p className={'mt-[18px] text-[#747373] max-w-[996px] mx-auto text-center text-[18px] leading-[22px]'}>Приглашаем вас на маленькую экскурсию по «Бюро переводов «Полиглот»! Вы узнаете, как мы работаем,
        почему большинство клиентов обращаются к нам повторно и почему доверяют нам.</p>
      <div className={'mt-[30px]'}>
        <div>
          <div className={'h-[500px] w-full relative rounded-[30px] truncate'}>
            <Image src={'/images/bg-1.png'} alt={'img'} fill={true} objectFit={'cover'}/>
            <div className="bg-[#3D3038]/[0.4] absolute z-30 top-0 left-0 w-full h-full
              py-[34px] px-[80px] flex flex-col justify-end"
            >

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
