import Image from "next/image";

interface IProps {
  payment: IPaymentsLinks;
}

export default function Pta4uPaymentsItem({ payment }: IProps) {
  return <div className={'lg:w-[282px] h-[50px] bg-white rounded-lg flex justify-center items-center gap-3'}>
    {payment.icon && <Image
        src={payment.icon}
        alt={payment.icon}
        width={22}
        height={22}
        style={{objectFit: "scale-down"}}
    /> }
    <span>{payment.title}</span>
  </div>
}
