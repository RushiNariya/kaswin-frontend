import { Icon } from '@iconify/react';
import React from 'react';

import banner from '../../assets/images/introspect_banner.jpg';
import PageLayout from '../../components/PageLayout/PageLayout';
function NonPremiumIntrospect() {
  return (
    <PageLayout pageTitle="Introspect">
      <section className="py-6 space-y-3 flex items-center flex-col">
        <h3 className="text-[2rem] font-extrabold">Sensor V/A</h3>
        <img src={banner} alt="banner" className="h-[50%]" />
        <div>
          <button
            type="submit"
            className="tracking-wide lg:min-w-[10rem] font-semibold bg-primary text-white px-2 py-2 md:py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <Icon
              icon="ant-design:thunderbolt-filled"
              className="mx-2"
              width={20}
              height={20}
            />
            <span className="ml-">Upgrade to premium</span>
          </button>
        </div>
      </section>
    </PageLayout>
  );
}

export default NonPremiumIntrospect;
