import { Metadata } from "next/types"
import Pta4uPayments from "../../components/pta4u-payments"

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | service one',
  description: 'Polyglot - translation agency for you',
}

export default function ServicesOnePage() {
  return <div>
      <div className={'container h-full mx-auto px-5'}>
        services one page
      </div>
      <Pta4uPayments />
    </div>
}