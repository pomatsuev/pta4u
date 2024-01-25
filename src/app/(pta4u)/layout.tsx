import React from "react";
import Pta4uHeader from "./components/pta4u-header";
import Pta4uFooter from "./components/pta4u-footer";
import Pta4uPayments from "./components/pta4u-payments";
import Pta4uQuickBuy from "./components/pta4u-quick-buy";
import Pta4uCalculated from "./components/pta4u-calculated";
import Pta4uReviews from "./components/pta4u-reviews";
import Pta4uQuality from "./components/pta4u-quality";
import Pta4uServices from "./components/pta4u-services";

export default function Pta4uLayout({ children }: { children: React.ReactNode}) {
  return <main>
    <Pta4uHeader />
    {children}

    <Pta4uReviews />
    <div className={'mt-[51px] lg:mt-[105px]'}>
      <Pta4uServices />
    </div>
    <div className={'mt-[81px]'}>
      <Pta4uQuality />
    </div>
    <div className={'mt-[105px]'}>
      <Pta4uCalculated />
    </div>
    <div className={'mt-[64px]'}>
      <Pta4uQuickBuy />
    </div>
    <div className={'mt-[70px]'}>
      <Pta4uPayments />
    </div>
    <Pta4uFooter />
  </main>
}
