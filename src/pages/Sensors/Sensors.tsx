import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import Datepicker from 'react-tailwindcss-datepicker';

import SensorCard from '../../components/Cards/SensorCard';
import TimeSeriesChart from '../../components/Charts/TimeSeriesChart';
import PageLayout from '../../components/PageLayout/PageLayout';
// import sensorsList from '../../data/sensorsData';
import { useSelector } from '../../redux/rootStateType';
import { fetchSensorByIdSuccess } from '../../redux/sensors/action';
import { selectSensorsList } from '../../redux/sensors/selectors';
import { SensorsListType } from '../../types/types';

function Sensors() {
  const {
    isLoading,
    isLoadingSelectedSensor,
    sensors: sensorsList,
    selectedSensor,
  } = useSelector(selectSensorsList);
  const dispatch = useDispatch<any>();

  const [value, setValue] = React.useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  const selectSensorHandler = (sensor: SensorsListType) => {
    dispatch(fetchSensorByIdSuccess(sensor));
  };

  return (
    <PageLayout pageTitle="Sensors">
      <section className="py-6 space-y-3 w-full">
        <div className="flex-1 w-full">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {sensorsList.map((item) => {
              return (
                <SensorCard
                  key={item.id}
                  data={item}
                  selectSensorHandler={selectSensorHandler}
                  selectedSensor={selectedSensor}
                />
              );
            })}
            {/* <SensorCard />
            <SensorCard />
            <SensorCard />
            <SensorCard /> */}
            {/* <SensorCard /> */}
            {/* <SensorCard /> */}
          </div>
          {selectedSensor ? (
            <div className="w-full mt-8">
              <div className="grid gap-8 sm:grid-cols-1 h-full md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                <div className="col-span-2 border-2 p-4 rounded-3xl h-full">
                  <div>
                    <div className="flex items-center">
                      <span className="font-bold text-[1rem] ml-5 mr-1">
                        Sensor Overview {'>'}
                      </span>
                      <span className="font-bold text-[1rem] ml-1">
                        {' '}
                        Sensor 2 : SNS1180
                      </span>
                      <div className="p-1 px-2 border text-[12px] rounded-[4px] ml-3 border-[#F8969C] text-[#F8969C]">
                        V sensor
                      </div>
                      <div className="group relative">
                        <Icon
                          icon="simple-line-icons:exclamation"
                          width={18}
                          className="text-gray-400 ml-3"
                          height={18}
                        />

                        <div
                          className={`absolute invisible -top-5 left-10 group-hover:visible min-w-[140px] max-w-[1000px] z-50 whitespace-break-spaces bg-[#292C2E] text-white px-4 mb-3 py-2 text-sm rounded-md`}
                        >
                          <div className="p-1">
                            <div>
                              <div className="mb-1 font-medium">
                                <div>
                                  <span className="text-gray-200 mb-4 text-[0.8rem]">
                                    Threshold Value
                                  </span>
                                  <br /> <span className="text-[1rem]">300 m/s</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <TimeSeriesChart />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[1rem] text-[#292C2E] mb-4">
                    Performance report
                  </div>
                  <div className="text-gray-600 font-semibold text-sm mb-2">Date</div>
                  <div className="mb-6">
                    <Datepicker
                      useRange={false}
                      value={value}
                      onChange={handleValueChange}
                      displayFormat="DD-MM-YYYY"
                      separator={'  →  '}
                      inputClassName={(classes) => {
                        return classes + ' date-range';
                      }}
                    />
                  </div>
                  <div className="flex gap-x-3 items-center mb-10 text-[#545A5F]">
                    <button className="border border-gray-500 rounded-xl p-2 px-4 mr-1">
                      <Icon icon="line-md:cloud-down" className="mr-2 inline-block" />
                      Export
                    </button>{' '}
                    <div className="text-[0.8rem]">
                      download report <br /> file from here.
                    </div>
                  </div>
                  <div className="text-center text-sm underline text-gray-400 mb-3">
                    want to sync your data on cloud?
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="tracking-wide  w-[65%] lg:min-w-[10rem] font-semibold bg-primary text-white px-2 py-2 md:py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <Icon
                        icon="ant-design:thunderbolt-filled"
                        className="mx-2"
                        width={20}
                        height={20}
                      />
                      <span className="ml-">Upgrade to premium</span>
                    </button>{' '}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center mt-[5rem] font-bold text-xl">
              Please select any sensor to view further !
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

export default Sensors;
