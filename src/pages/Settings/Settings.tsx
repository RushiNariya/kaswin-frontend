import { Tab } from '@headlessui/react';
import React, { Fragment } from 'react';

import PageLayout from '../../components/PageLayout/PageLayout';
import MyProfile from './MyProfile';
import SpindleListing from './SpindleListing';

function Settings() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <PageLayout pageTitle="Settings">
      <div className="flex flex-row flex-1 sm:flex-col lg:flex-row xl:flex-row">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} vertical>
          <Tab.List className="flex flex-col w-[169px] gap-3 sm:flex-row lg:flex-col xl:flex-col">
            <Tab as={Fragment}>
              <div
                className={`${
                  selectedIndex === 0 ? 'bg-[#e6effc] ' : null
                }rounded-[10px] pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative cursor-pointer`}
              >
                <div
                  className={` ${
                    selectedIndex === 0 ? 'text-[#426ab9]' : 'text-[#545a5f]'
                  } text-left relative`}
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                >
                  My profile{' '}
                </div>
              </div>
            </Tab>
            <Tab as={Fragment}>
              <div
                className={`${
                  selectedIndex === 1 ? 'bg-[#e6effc] ' : null
                }rounded-[10px] pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative cursor-pointer`}
              >
                <div
                  className={` ${
                    selectedIndex === 1 ? 'text-[#426ab9]' : 'text-[#545a5f]'
                  } text-left relative`}
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                >
                  Spindle Listing{' '}
                </div>
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            <Tab.Panel>
              <MyProfile />
            </Tab.Panel>
            <Tab.Panel>
              <SpindleListing />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </PageLayout>
  );
}

export default Settings;
