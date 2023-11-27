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
import IntrospectDropDown from '../../components/DropDown/IntrospectDropDown';
import PageLayout from '../../components/PageLayout/PageLayout';
import TimeChartDropDown from '../../components/TImeChartDropDown';
import { selectCurrentSpindle } from '../../redux/common/selectors';
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

  const selectedSpindle = useSelector(selectCurrentSpindle);

  const selectIntrospectHandler = (sensor: IntrospectListType) => {
    dispatch(fetchIntrospectByIdSuccess(sensor));
  };

  console.log(selectedIntrospect);

  return (
    <PageLayout pageTitle="Introspect">
      <section className="py-6 space-y-3 w-full">
        <div className="flex-1 w-full">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-7 w-full">
            <div className="hidden md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-3 lg:flex-col gap-y-4 md:col-span-2">
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

            <div className="w-full md:hidden">
              <IntrospectDropDown
                list={introspectList}
                selected={selectedIntrospect || { id: 1, name: 'select Sensor' }}
                setSelected={selectIntrospectHandler}
              />

              <div className="mt-4">
                {selectedIntrospect ? (
                  <IntrospectCard
                    data={selectedIntrospect}
                    selectIntrospectHandler={() => {}}
                    selectedIntrospect={selectedIntrospect}
                  />
                ) : null}
              </div>
            </div>

            {selectedIntrospect ? (
              <div className="lg:col-span-4 xl:col-span-5 w-full">
                <div className="flex justify-between w-full flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between h-full">
                      <div>
                        <span className="text-[12px] font-semibold text-gray-600">
                          Sensor name
                        </span>
                        <h3 className="mt-2 text-[1rem] md:text-[1.3rem] font-extrabold">
                          {selectedIntrospect.name}
                        </h3>
                      </div>
                      <div className="h-full border-l-[1px] mr-8 border-[#AECAF4] w-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between h-full">
                      <div>
                        <span className="text-[12px] font-semibold text-gray-600">
                          Sensor id
                        </span>
                        <h3 className="mt-2 text-[1rem] md:text-[1.3rem] font-extrabold">
                          {selectedIntrospect.sensorId}{' '}
                        </h3>
                      </div>
                      <div className="h-full border-l-[1px] mr-8 border-[#AECAF4] w-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[12px] font-semibold text-gray-600">
                      Spindle system
                    </span>
                    <h3 className="mt-2 text-[1rem] md:text-[1.3rem] font-extrabold">
                      {selectedIntrospect?.id}
                    </h3>
                  </div>
                </div>
                <div className="flex mt-10 gap-x-10">
                  <div>
                    <span>Mac_address : </span>{' '}
                    <span className="font-bold">f5f5f013dd0e</span>
                  </div>
                  <div className="group relative flex gap-x-2 text-primary">
                    <span className="hidden md:inline">System Info</span>{' '}
                    <Icon icon="bi:exclamation-circle" width={18} height={18} />
                    <div
                      className={`absolute invisible -right-10 top-6 md:top-7 md:left-20 group-hover:visible min-w-[320px] max-w-[1000px] z-50 whitespace-break-spaces bg-[#292C2E] text-white px-4 mb-3 py-1 text-sm rounded-md`}
                    >
                      <div className="p-2">
                        <p className=" leading-2 text-white text-[1.1rem] font-bold mb-2">
                          System Info
                        </p>
                        <div className="mb-2">
                          <table className="leading-[1.5rem]">
                            <tr className="pb-2">
                              <td>Machine Type</td>
                              <td> : Electronic microscope</td>
                            </tr>
                            <tr className="pb-2">
                              <td>Machine name</td>
                              <td> : Stevens MEMS Lab</td>
                            </tr>
                            <tr className="pb-2">
                              <td>Machine Specific</td>
                              <td> : Vacuum Pump</td>
                            </tr>
                          </table>
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

                {selectedIntrospect?.sensorType === 'V sensor' ? null : (
                  <>
                    <div>
                      <h4 className="font-bold mt-10">FFT Info</h4>
                    </div>
                    <div className="flex mt-2 gap-x-10">
                      <div>
                        <span>Windowing : : </span>{' '}
                        <span className="font-bold">Hanning</span>
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
                  </>
                )}

                <div className="flex justify-between w-full flex-1 mt-8 gap-x-4">
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={batteryLevelIcon} alt="battery level" />
                    </div>
                    <div className="text-center">
                      <div className="text-[1.2rem] font-extrabold">3.65 V</div>
                      <div className="text-xs text-gray-600 mt-1">Battery Level</div>
                    </div>
                  </div>
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={dataCountIcon} alt="battery level" />
                    </div>
                    <div className="text-center">
                      <div className="text-[1.2rem] font-extrabold">81667</div>
                      <div className="text-xs text-gray-600 mt-1">Data Count</div>
                    </div>
                  </div>
                  <div className="p-4 xl:min-w-[210px] border flex-wrap justify-center lg:flex-nowrap rounded-3xl flex items-center gap-x-6">
                    <div className="text-sm text-gray-600">
                      <img src={sensingDurationIcon} alt="battery level" />
                    </div>
                    <div className="text-center">
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
                <div className="w-[100%] rounded-lg p-1 overflow-x-hidden">
                  <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List
                      onClick={(e) => e.stopPropagation()}
                      className="flex gap-2 md:justify-center flex-wrap md:flex-nowrap justify-around cursor-pointer w-full flex-1 mb-4"
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
                              ? 'px-4 py-2 md:ml-3 border-b-2 border-black outline-none font-bold'
                              : 'px-4 py-2 md:ml-3 border-none text-gray-400 font-bold'
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
                    </Tab.List>
                    <Tab.Panels className="overflow-x-scroll">
                      <Tab.Panel className="">
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
