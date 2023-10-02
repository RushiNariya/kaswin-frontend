import { Tab } from '@headlessui/react';
import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import batteryLevelIcon from '../../assets/images/battery_level.png';
import dataCountIcon from '../../assets/images/data_count.png';
import sensingDurationIcon from '../../assets/images/sensing_duration.png';
import IntrospectCard from '../../components/Cards/IntrospectCard';
import DemoTwo from '../../components/Charts/DemoTwo';
import EChart from '../../components/Charts/EChart';
import Spectrogram from '../../components/Charts/Spectrogram';
import Temperature from '../../components/Charts/Temperature';
import TimeDomainChart from '../../components/Charts/TimeDomainChart';
import TimeEChart from '../../components/Charts/TimeEChart';
import PageLayout from '../../components/PageLayout/PageLayout';
import TimeChartDropDown from '../../components/TImeChartDropDown';
import { fetchIntrospectByIdSuccess } from '../../redux/introspects/action';
import { selectIntrospectList } from '../../redux/introspects/selectors';
// import introspectList from '../../data/introspectData';
import { useSelector } from '../../redux/rootStateType';
import { IntrospectListType } from '../../types/types';
function Introspect() {
  const dispatch = useDispatch<any>();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const {
    isLoading,
    isLoadingSelectedIntrospect,
    introspects: introspectList,
    selectedIntrospect,
  } = useSelector(selectIntrospectList);

  const selectIntrospectHandler = (sensor: IntrospectListType) => {
    dispatch(fetchIntrospectByIdSuccess(sensor));
  };

  return (
    <PageLayout pageTitle="Introspect">
      <section className="py-6 space-y-3 w-full">
        <div className="flex-1 w-full">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-7 w-full">
            <div className="flex flex-wrap gap-3 lg:flex-col gap-y-4 md:col-span-2">
              {introspectList.map((item) => {
                return (
                  <IntrospectCard
                    key={item.id}
                    data={item}
                    selectIntrospectHandler={selectIntrospectHandler}
                    selectedIntrospect={selectedIntrospect}
                  />
                );
              })}
              {/* <IntrospectCard />
              <IntrospectCard />
              <IntrospectCard />
              <IntrospectCard /> */}
            </div>
            {selectedIntrospect ? (
              <div className="lg:col-span-4 xl:col-span-5 w-full">
                <div className="flex justify-between w-full flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between h-full">
                      <div>
                        <span className="text-[12px] text-gray-500">Sensor name</span>
                        <h3 className="mt-2 text-[1.3rem] font-extrabold">Sensor 1</h3>
                      </div>
                      <div className="h-full border-l-[1px] mr-8 border-[#AECAF4] w-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between h-full">
                      <div>
                        <span className="text-[12px] text-gray-500">Sensor id</span>
                        <h3 className="mt-2 text-[1.3rem] font-extrabold">SNS1234</h3>
                      </div>
                      <div className="h-full border-l-[1px] mr-8 border-[#AECAF4] w-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[12px] text-gray-500">Spindle system</span>
                    <h3 className="mt-2 text-[1.3rem] font-extrabold">2</h3>
                  </div>
                </div>
                <div className="flex mt-10 gap-x-10">
                  <div>
                    <span>Mac_address : </span>{' '}
                    <span className="font-bold">f5f5f013dd0e</span>
                  </div>
                  <div className="group relative flex gap-x-2 text-primary">
                    System Info <Icon icon="bi:exclamation-circle" />
                    <div
                      className={`absolute invisible top-7 left-20 group-hover:visible min-w-[300px] max-w-[1000px] z-50 whitespace-break-spaces bg-gray-700 text-white px-4 mb-3 py-1 text-sm rounded-md`}
                    >
                      <div className="p-2">
                        <p className=" leading-2 text-white text-[1.2rem] mb-2">
                          System Info
                        </p>
                        <div>
                          <div className="mb-1 font-medium">
                            <span>Machine Type</span> <span>: Electronic microscope</span>
                          </div>
                          <div className="mb-1 font-medium">
                            <span>Machine name</span> <span>: Stevens MEMS Lab</span>
                          </div>
                          <div className="mb-1 font-medium">
                            <span>Machine Specific</span> <span>: Vacuum Pump</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>rssi : </span> <span className="font-bold">-62</span>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>Version : </span> <span className="font-bold">V2.05</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mt-10">FFT Info</h4>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>Windowing : : </span> <span className="font-bold">Hanning</span>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>Sampling rate[Hz] : : </span>{' '}
                    <span className="font-bold">12800</span>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>Sampling Count : : </span>{' '}
                    <span className="font-bold">8192</span>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-10">
                  <div>
                    <span>Averaging : : </span> <span className="font-bold">0</span>
                  </div>
                </div>
                <div className="flex justify-between w-full flex-1 mt-8 gap-x-4">
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={batteryLevelIcon} alt="battery level" />
                    </div>
                    <div className="">
                      <div className="text-[1.2rem] font-extrabold">3.65 V</div>
                      <div className="text-xs text-gray-600 mt-1">Battery Level</div>
                    </div>
                  </div>
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={dataCountIcon} alt="battery level" />
                    </div>
                    <div className="">
                      <div className="text-[1.2rem] font-extrabold">81667</div>
                      <div className="text-xs text-gray-600 mt-1">Data Count</div>
                    </div>
                  </div>
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={sensingDurationIcon} alt="battery level" />
                    </div>
                    <div className="">
                      <div className="text-[1.2rem] font-extrabold">1.31 sec</div>
                      <div className="text-xs text-gray-600 mt-1">Sensing duration</div>
                    </div>
                  </div>
                </div>
                <div className="my-8 w-[100%] border-b text-center">
                  <div className="leading-none inline-block text-[1.4rem] font-extrabold px-4 text-gray-400 tracking-wide bg-white transform translate-y-1/2">
                    Vibration Chart
                  </div>
                </div>
                <div className="w-full rounded-lg p-1">
                  <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List
                      onClick={(e) => e.stopPropagation()}
                      className="flex justify-center cursor-pointer w-full flex-1 overflow-scroll mb-4"
                    >
                      <Tab as={React.Fragment}>
                        <span
                          className={
                            selectedIndex === 0
                              ? 'px-4 py-2 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 border-none text-gray-400 font-bold'
                          }
                        >
                          Time Domain
                        </span>
                      </Tab>
                      <Tab as={React.Fragment}>
                        <span
                          className={
                            selectedIndex === 1
                              ? 'px-4 py-2 ml-3 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 ml-3 border-none text-gray-400 font-bold'
                          }
                        >
                          FFT Domain
                        </span>
                      </Tab>
                      <Tab as={React.Fragment}>
                        <span
                          className={
                            selectedIndex === 2
                              ? 'px-4 py-2 ml-3 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 ml-3 border-none text-gray-400 font-bold'
                          }
                        >
                          Temperature
                        </span>
                      </Tab>
                      <Tab as={React.Fragment}>
                        <span
                          className={
                            selectedIndex === 3
                              ? 'px-4 py-2 ml-3 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 ml-3 border-none text-gray-400 font-bold'
                          }
                        >
                          Spectrogram
                        </span>
                      </Tab>
                      {/* <Tab as={React.Fragment}>
                        <span
                          className={
                            selectedIndex === 4
                              ? 'px-4 py-2 ml-3 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 ml-3 border-none text-gray-400 font-bold'
                          }
                        >
                          All
                        </span>
                      </Tab> */}
                    </Tab.List>
                    <Tab.Panels>
                      <Tab.Panel className="">
                        {/* <TimeDomainChart /> */}
                        {/* <TimeEChart /> */}
                        <TimeChartDropDown />
                      </Tab.Panel>
                      <Tab.Panel className="">
                        <EChart />
                      </Tab.Panel>
                      <Tab.Panel className="">
                        <Temperature />
                      </Tab.Panel>
                      <Tab.Panel className="">
                        <Spectrogram />
                      </Tab.Panel>
                      {/* <Tab.Panel className="">
                        <TimeEChart />
                        <div className="my-3"></div>
                        <EChart />
                        <div className="my-3"></div>
                        <Temperature />
                        <div className="my-3"></div>
                        <Spectrogram />
                      </Tab.Panel> */}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            ) : (
              <div className="w-full justify-center items-start mt-10 flex lg:col-span-4 xl:col-span-5 font-bold text-xl">
                <div>
                  Please select any sensor to view further !
                  <div className="mt-3">
                    <Link
                      className="hover:underline font-normal"
                      to={'/introspect/non-premium'}
                    >
                      click here for non-premium
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Introspect;
