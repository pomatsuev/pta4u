import { Metadata } from 'next';
import SetBreadcrumbs from '../../../store/setBreadcrumbs';
import Pta4uBreadcrumbs from '../components/pta4u-breadcrumbs';
import Image from 'next/image';
import Recircle from '../icons/recycle.svg';
import Doc from '../icons/doc.svg';
import Smile from '../icons/smile.svg';
import Users from '../icons/users.svg';
import Pta4uReviews from '../components/pta4u-reviews';
import Pta4uQuickBuy from '../components/pta4u-quick-buy';
import Pta4uPayments from '../components/pta4u-payments';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you',
  description: 'Polyglot - translation agency for you'
};

const breadcrumbs: IBreadcrumbs[] = [
  { title: 'Главная', sort: '0', url: '/' },
  { title: 'Компания', sort: '1' }
];

const steps = [
  {
    title: 'Ваш заказ будет выполнен точно к установленному сроку',
    image: '/images/company/image1062.png'
  },
  {
    title:
      'К работе в нашей компании допускаются только профессионалы. Все переводчики проходят строгий отбор и приступают к работе лишь подтвердив на практике свою квалификацию',
    image: '/images/company/image1059.png'
  },
  {
    title:
      'В работе мы учитываем Ваши реальные интересы. Мы делаем нашу работу исходя из Ваших пожеланий и запросов',
    image: '/images/company/image1066.png'
  },
  {
    title:
      'Наша работа построена таким образом, чтобы максимально снизить расходы, оптимизируя при этом стоимость Ваших заказов',
    image: '/images/company/image1058.png'
  },
  {
    title: 'Мы гарантируем полную конфиденциальность и сохранность Ваших документов',
    image: '/images/company/image1067.png'
  },
  {
    title:
      'Вы можете направить нам заказ, не выходя из дома или офиса, с помощью нашего сайта. Готовый перевод мы направим Вам на электронную почту',
    image: '/images/company/Rectangle778.png'
  }
];

export default function AboutPage() {
  return (
    <div className={'mt-[34px] lg:mt-[76px]'}>
      <SetBreadcrumbs breadcrumbs={breadcrumbs} />
      <div className={'container mx-auto px-5'}>
        <div className={'hidden lg:flex justify-center'}>
          <Pta4uBreadcrumbs />
        </div>
        <h1
          className={
            'text-[22px] lg:text-[45px] leading-[28px] lg:leading-[54px] text-center font-semibold lg:mt-[18px]'
          }>
          Компания Polyglot
        </h1>
        <p
          className={
            'mt-[10px] lg:mt-[18px] text-[#747373] max-w-[996px] mx-auto text-center text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px]'
          }>
          Приглашаем вас на маленькую экскурсию по «Бюро переводов «Полиглот»! Вы узнаете, как мы
          работаем, почему большинство клиентов обращаются к нам повторно и почему доверяют нам.
        </p>
        <div className={'mt-[30px]'}>
          <div>
            <div className={'h-[453px] lg:h-[500px] w-full relative rounded-[30px] truncate'}>
              <Image src={'/images/bg-1.png'} alt={'img'} fill={true} objectFit={'cover'} />
              <div
                className="bg-[#3D3038]/[0.4] absolute z-30 top-0 left-0 w-full h-full
              p-[18px] lg:py-[34px] lg:px-[80px] flex flex-col justify-end">
                <div className="flex gap-[12px] lg:gap-[20px] justify-between flex-wrap lg:flex-nowrap">
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <Image src={Recircle} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px]">
                        45
                      </h1>
                      <p className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[20px] max-w-[120px] lg:max-w-none">
                        Языков перевода
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <Image src={Doc} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px]">
                        1 200 000
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[20px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Страниц переведено за 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <Image src={Smile} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px]">
                        Более 1000
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[20px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Довольных клиентов за 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <Image src={Users} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px]">
                        50
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[20px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Профессиональных переводчиков
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] lg:mt-[81px] flex flex-col gap-[20px] lg:gap-[81px]">
          <div className="flex gap-[81px] items-center">
            <div>
              <h1 className="text-[14px] leading-[16px] lg:text-[30px] lg:leading-[36px] font-semibold">
                Забота об удобстве клиента
              </h1>
              <p className="max-w-[560px] mt-[11px] lg:mt-[25px] text-[13px] leading-[16px] lg:text-[16px] lg:leading-[22px]">
                Паспорта и свидетельства о рождении, дипломы и аттестаты, справки и удостоверения и
                т. д. Перевод личных документов потребуется людям, которые приезжают из-за границы в
                Россию. Также перевод нужен, если вы хотите учиться, работать или приобрести
                недвижимость за рубежом. Мы рады помочь вам открыть новую страницу жизни в другой
                стране. Переводим личные документы на 45 языков. Работаем с текстами любой
                сложности. Работу выполняем точно в срок.
              </p>
            </div>
            <div className="hidden lg:block w-[585px] h-[361px] rounded-[30px] relative truncate">
              <Image
                src={'/images/company/image1035.png'}
                alt={'img'}
                fill={true}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex gap-[81px] items-center">
            <div className="hidden lg:block w-[585px] h-[361px] rounded-[30px] relative truncate">
              <Image
                src={'/images/company/image1063.png'}
                alt={'img'}
                fill={true}
                objectFit="cover"
              />
            </div>
            <div>
              <h1 className="text-[14px] leading-[16px] lg:text-[30px] lg:leading-[36px] font-semibold">
                Почему нам доверяют
              </h1>
              <p className="max-w-[560px] mt-[11px] lg:mt-[25px] text-[13px] leading-[16px] lg:text-[16px] lg:leading-[22px]">
                Выполняем срочные переводы личных документов. Если вы разместите заказ до 11 утра,
                мы постараемся перевести документы и заверить их у нотариуса в день обращения, хотя
                это не всегда возможно. <br />
                <br />
                Следует учитывать, что некоторые переводы требуют долгой и вдумчивой работы. Для
                сравнения: художественный перевод или перевод инструкции по эксплуатации корабля
                занимает больше времени, чем перевод справки или личных документов. Поэтому если вам
                нужно получить готовый перевод к определённому времени, чем раньше вы обратитесь в
                «Бюро переводов «Полиглот», тем лучше.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[42px] lg:mt-[98px]">
          <h1 className="text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px] font-semibold text-center">
            Мы работаем для вас
          </h1>
          <p className="max-w-[840px] mx-auto mt-[20px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] text-[#747373] text-center">
            По результатам опроса 2022г, более 3000 постоянных клиентов выбирают Полиглот и ценят
            сотрудничество с нами за качество сервиса и качество предоставляемых услуг.
          </p>
        </div>
        <div className="mt-[21px] lg:mt-[36px] flex flex-wrap gap-[19px] lg:gap-[24px] justify-between">
          {steps.map((step, i) => {
            return (
              <div key={i} className="max-w-[158px] lg:max-w-[384px]">
                <div className="w-[158px] lg:w-[384px] h-[116px] lg:h-[226px] relative rounded-[20px] lg:rounded-[30px] truncate">
                  <Image src={step.image} alt={'img'} fill={true} objectFit="cover" />
                </div>
                <p className="mt-[7px] lg:mt-[20px] text-[13px] leading-[16px] lg:text-[18px] lg:leading-[22px] text-center">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[62px]">
        <Pta4uReviews />
      </div>
      <div className="mt-[43px] lg:mt-[72px]">
        <Pta4uQuickBuy />
      </div>
      <div className="mt-[46px] lg:mt-[70px]">
        <Pta4uPayments />
      </div>
    </div>
  );
}
